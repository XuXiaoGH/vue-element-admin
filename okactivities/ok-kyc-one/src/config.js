/**
 * 全站配置
 */

export default {
  // 活动页系列路由前缀 'page-<activity-name>'
  routePrefix: 'page-ok-kyc-one',
  // 针对那些站点开启
  site: 'OKEx',
  // 活动支持的开发交易所ID
  brokerIds: [],
  // 活动开始和结束的北京时间(格式为: 2019-05-16 10:00:00 GMT+0800)
  timeRange: {
    startTime: '',
    endTime: '',
  },
  // 如果下线该活动 指定online: false即可 优先级最高
  online: true,
};
