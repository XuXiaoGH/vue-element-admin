/**
 * 演示store
 */

import { action, observable } from 'mobx';
import service from '../service';

class DemoStore {
  // 一个state
  @observable list = [1, 2, 3];

  @action loadList() {
    service.getList().then((data) => {
      this.list = [...this.list, ...data];
    }).catch(() => {
      this.list.push(4, 5, 6, 7);
    });
  }
}

export default new DemoStore();
