const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hoc': path.resolve(__dirname, 'src/hoc'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@services': path.resolve(__dirname, 'src/services'),
    }
  },
};