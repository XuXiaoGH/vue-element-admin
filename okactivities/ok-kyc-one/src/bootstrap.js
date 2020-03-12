/**
 * 应用启动时做检查工作
 *
 * @param {*} config
 * @returns {boolean} 是否显示页面
 */
function bootstrap(config) {
  const buildType = process.env.ASSETS_BUILD_TYPE;

  // 环境判断
  if (buildType == 'daily' || buildType == 'prepub') {
    return true;
  }
  const { online, timeRange, site } = config;
  const { sign = 'OKEx' } = (window.okGlobal || {});
  // 上线状态判断
  if (!online) {
    return false;
  }
  // 当前站点判断
  if (site.toLowerCase().indexOf(sign.toLowerCase()) === -1) {
    return false;
  }
  // 开始结束时间判断
  let { startTime, endTime } = timeRange;
  startTime = new Date(startTime).getTime();
  endTime = new Date(endTime).getTime();
  const now = Date.now();
  if (startTime && endTime) {
    // 不在“开始日期-结束日期”范围内
    if (now < startTime || now > endTime) {
      return false;
    }
  } else if (startTime) {
    // 在开始日期之前
    if (now < startTime) {
      return false;
    }
  } else if (endTime) {
    // 在结束日期之后
    if (now > endTime) {
      return false;
    }
  }
  return true;
}

export default bootstrap;
