module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        '> 0.2%',
        'last 4 versions',
        'Safari >= 12',
        'iOS >= 12',
        'Firefox >= 60',
        'Chrome >= 60',
        'Edge >= 79',
        'not dead',
        'not op_mini all',
      ],
      flexbox: 'no-2009',
      grid: 'autoplace',
    }),
  ],
};
