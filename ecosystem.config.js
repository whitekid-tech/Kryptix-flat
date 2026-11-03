module.exports = {
  apps: [{
    name: 'kryptix-xmd',
    script: 'index.js',
    autorestart: true,
    max_restarts: 1000,
    min_uptime: '10s',
    restart_delay: 2000,
    max_memory_restart: '700M',
    env: { NODE_ENV: 'production' }
  }]
};
