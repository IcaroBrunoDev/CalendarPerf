module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.ios.js', '.android.js'],
        alias: {
          '*': ['src/*'],
          '@stitches.config': ['./stitches.config.ts'],
        },
      },
    ],
  ],
};
