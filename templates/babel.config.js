module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.json'],
        root: ['./'],
        alias: {
          '@types': './src/types',
          '@assets': './assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@copy': './src/copy',
          '@utils': './src/utils',
          '@services': './src/services',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
