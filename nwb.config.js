module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
  },
  babel: {
    cherryPick: 'some-module',
    plugins: [['import', { libraryName: 'antd-mobile', style: 'css' }]],
  },
}
