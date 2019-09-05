module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': { path: 'src' },
    'postcss-preset-env': { stage: 0 },
    'cssnano': env === 'production' ? { preset: 'default' } : false,
  }
});