const path = require('path');

module.exports = {
  entry: './cypress/e2e/openMyProfile.cy.js', // Основний файл, який Webpack обробляє
  output: {
    filename: 'bundle.js', // Ім'я вихідного бандлу
    path: path.resolve(__dirname, 'dist') // Директорія для збереження бандлу
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Обробляє всі JavaScript файли
        exclude: /node_modules/, // Виняток для файлів з node_modules
        use: {
          loader: 'babel-loader', // Використання Babel для трансляції JavaScript
          options: {
            presets: ['@babel/preset-env'] // Налаштування Babel
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js'] // Розширення файлів, які Webpack обробляє
  }
};