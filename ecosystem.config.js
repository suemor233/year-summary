module.exports = {
  apps: [
    {
      name: 'suemor-year',
      script: 'npx next start -p 1106',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '180M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
