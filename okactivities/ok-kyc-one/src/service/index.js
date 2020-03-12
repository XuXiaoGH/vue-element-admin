/**
 * 数据服务
 */
import dataProxy from '../dataProxy';

export default {
  getList() {
    return dataProxy.get('/getList');
  }
};
