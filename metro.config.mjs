import { getDefaultConfig, mergeConfig } from '@react-native/metro-config';

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// eslint-disable-next-line no-undef
export default mergeConfig(getDefaultConfig(__dirname), config);
