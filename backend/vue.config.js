module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000', // Redirige todas las solicitudes a este servidor backend
          changeOrigin: true
        }
      }
    }
  }
  