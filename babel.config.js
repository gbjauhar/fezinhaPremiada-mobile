module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@context': './src/context',
          '@services': './src/services',
          '@types': './src/@types',
          '@store': './src/store',
          '@theme': './src/theme/index.ts',
          '@env': '.env.json',
          '@validators': './src/validators',
          '@utils': './src/utils',
          '@queries': './src/graphql',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
