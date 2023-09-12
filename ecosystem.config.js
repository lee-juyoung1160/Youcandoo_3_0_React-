module.exports = {
  apps: [
    {
      name: 'youcandoo.www',
      cwd: '/home/yanadoo/youcandoo.www/',
      script: 'npm',
      args: 'run dev',
      watch: false,
      autorestart: true,
      ignore_watch: ['node_modules', 'logs'],
      // exec_mode: 'cluster',
      // instances: 0,
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: '/home/yanadoo/youcandoo.www/logs/youcandoo-err.log',
      // out_file: '/home/yanadoo/youcandoo.www/logs/youcandoo-out.log',
      combine_logs: true,
      merge_logs: true,
    },
  ],
}
