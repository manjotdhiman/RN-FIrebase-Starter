# Firebase Auth Starter with React Native

This is a starter template for authentication in a React Native application using Firebase. It includes phone number authentication and OTP verification, making it a great starting point for building apps that require secure and scalable user authentication.

## Features

- Phone number authentication with Firebase
- OTP (One-Time Passcode) verification
- Basic login and logout functionality
- Modular project structure for scalability
- Starter UI for login and home screens

## Libraries Used

This project is built using the following libraries:

| Library | Version | Description |
| ------- | ------- | ----------- |
| [@react-native-community/masked-view](https://github.com/react-native-masked-view/masked-view) | ^0.1.11 | Provides masked views for React Native apps. Useful for navigation transitions. |
| [@react-native-firebase/app](https://rnfirebase.io/) | ^21.4.0 | Firebase SDK for React Native. Initializes the Firebase app. |
| [@react-native-firebase/auth](https://rnfirebase.io/auth/usage) | ^21.4.0 | Firebase authentication module for React Native. Handles user authentication. |
| [@react-navigation/native](https://reactnavigation.org/) | ^7.0.0 | Core library for React Navigation, enabling screen navigation within the app. |
| [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/) | ^7.0.0 | Stack navigator for React Navigation, allowing stacked navigation patterns. |
| [react](https://reactjs.org/) | 18.3.1 | JavaScript library for building user interfaces. |
| [react-native](https://reactnative.dev/) | 0.76.1 | Framework for building native apps using React. |
| [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/) | ^2.20.2 | Library for gesture handling in React Native. |
| [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) | ^3.16.1 | Enables animations in React Native. Used for smooth and complex animations. |
| [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) | ^4.14.0 | Manages safe area insets for devices with notches or rounded corners. |
| [react-native-screens](https://reactnavigation.org/docs/react-native-screens) | ^4.0.0 | Optimizes memory usage and transitions between screens. |
| [valtio](https://valtio.pmnd.rs/) | ^2.1.2 | Proxy-based state management library for React. Used for global state management. |

## Project Structure

```
firebase-auth-starter-react-native/
├── ios/
├── android/
├── node_modules/
├── src/
│   ├── nav/                # Navigation configurations
│   ├── screens/            # App screens
│   │   ├── auth/           # Authentication screens
│   │   │   └── Login/
│   │   │       └── index.tsx   # Login screen with Firebase phone auth
│   │   └── dashboard/      # Dashboard screens
│   │       └── home/
│   │           └── index.tsx   # Home screen with logout functionality
│   ├── state/              # Global state management
│   │   ├── auth/           # Authentication-related state
│   │   └── user/           # User-related state
│   ├── utils/              # Utility functions and configurations
│       └── firebase/
│           ├── auth.ts     # Firebase authentication functions
│           └── firebaseConfig.ts # Firebase configuration
├── .gitignore
├── App.tsx                 # Main entry point of the app
├── README.md
└── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above recommended)
- [Firebase Project](https://firebase.google.com/) set up with authentication enabled for phone number sign-in
- Android Studio or Xcode for running the project on Android and iOS devices/emulators

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/firebase-auth-starter-react-native.git
cd firebase-auth-starter-react-native
```

### 2. Install Dependencies

Use `npm` or `yarn` to install the required dependencies:

```bash
npm install
# or
yarn install
```

### 3. Configure Firebase

- Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project (if you haven't already).
- Enable **Phone Authentication** in the **Authentication** section.
- Download the `google-services.json` file and place it in the `android/app` directory.
- Download the `GoogleService-Info.plist` file and place it in the `ios` directory.

### 4. Run the Application

Run the app on Android or iOS:

```bash
# For Android
npx react-native run-android

# For iOS
npx react-native run-ios
```

### 5. Login with Phone Number

1. Enter your phone number in the login screen.
2. Receive the OTP (One-Time Passcode) on your phone.
3. Enter the OTP to verify and log in.

## Usage

- **Login**: The `LoginScreen` in `src/screens/auth/Login` allows users to sign in with a phone number and OTP.
- **Home**: After logging in, users are navigated to the `HomeScreen` in `src/screens/dashboard/home`, where they can see a welcome message and use the `Logout` button to sign out.

## Contributing

We welcome contributions to improve this Firebase Auth Starter. If you would like to contribute, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button on the top right of this page.
2. **Clone the Fork**: Clone your fork to your local machine.
   ```bash
   git clone https://github.com/yourusername/firebase-auth-starter-react-native.git
   cd firebase-auth-starter-react-native
   ```
3. **Create a Branch**: Create a new branch for your changes.
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Your Changes**: Modify the code with your enhancements or fixes.
5. **Test Your Changes**: Ensure your changes work as expected.
6. **Commit and Push**: Commit and push your changes to your forked repository.
   ```bash
   git add .
   git commit -m "Add your commit message here"
   git push origin feature/your-feature-name
   ```
7. **Submit a Pull Request**: Go to the original repository and open a pull request to merge your changes.

### Guidelines

- Keep your code clean and follow the existing coding style.
- Make sure your code is well-tested.
- Write clear commit messages.
- Update the documentation if you make changes that affect usage.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or issues, feel free to create an issue or reach out.

---

Thank you for using and contributing to this Firebase Auth Starter!
