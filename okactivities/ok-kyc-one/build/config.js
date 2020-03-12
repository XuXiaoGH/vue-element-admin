/**
 * 配置文件
 */
module.exports = {
  dev: {
    // 端口
    port: 5000,
    // 连接后端API的URL
    apiUrl: 'http://coinmainweb.new.docker.okex.com/'
  },

  daily: {
    publicBasePath: '//daily-test.okcoin-inc.com/cdn/assets/',
  },
  prepub: {
    publicBasePath: 'https://ok-public-hk.oss-cn-shenzhen.aliyuncs.com/cdn/assets/',
  },
  publish: {
    publicBasePath: 'https://img.bafang.com/cdn/assets/',
  }
};
