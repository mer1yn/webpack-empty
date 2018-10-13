const path = require('path')

console.log(__dirname)

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'    
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    }
}
