import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { state } from '../../../state';

type ConfirmationResult = FirebaseAuthTypes.ConfirmationResult;
type User = FirebaseAuthTypes.User;
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Screen for logging in with a phone number.
 * @returns {JSX.Element} JSX element for the login screen.
 */
/******  b6117b0b-2e82-4041-9050-fcd568672d79  *******/ export default function LoginScreen() {
  const [confirm, setConfirm] = useState<ConfirmationResult | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');

  function onAuthStateChanged(user: User | null) {
    if (user) {
      state.user.updateUser({ id: user.uid, name: user.displayName ?? '' });
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function signInWithPhoneNumber(phoneNumber: string): Promise<void> {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm?.confirm(code);
    } catch (error) {
      console.error(error);
    }
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login with Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter phone number'
          keyboardType='phone-pad'
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => signInWithPhoneNumber(phoneNumber)}
        >
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter OTP'
        keyboardType='number-pad'
        value={code}
        onChangeText={(text) => setCode(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => confirmCode()}>
        <Text style={styles.buttonText}>Confirm Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
