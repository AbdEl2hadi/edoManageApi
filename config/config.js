module.exports = {
  development: {
    port: process.env.PORT || 3000,
    env: 'development'
  },
  production: {
    port: process.env.PORT || 8080,
    env: 'production'
  },
  test: {
    port: process.env.PORT || 3001,
    env: 'test'
  }
};
