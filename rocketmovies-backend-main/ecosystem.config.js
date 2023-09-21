module.exports = {
  apps: [
    {
      name: 'app',
      script: './src/server.js', //indica o nome do arquivo que irá iniciar a aplicação!
      instances: 'max',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
