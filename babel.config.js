module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      },
      
    ],
    ["@babel/plugin-syntax-decorators",
    {
      legacy: true
    },
  ]
    
  ]
};
