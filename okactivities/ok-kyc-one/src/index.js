import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { LocaleProvider } from '@ok/react-locale';
import stores from './stores';
import Routes from './routes';
import config from './config';
import bootstrap from './bootstrap';
import zhCN from './locales/zhCN';
import './less/style.less';

import './fonts/iconfont';
import './fonts/iconfont.css';

// 勿删，项目线上启动前的判断
if (bootstrap(config)) {
  ReactDOM.render(
    <LocaleProvider localeData={zhCN}>
      <Provider {...stores}>
        <Routes />
      </Provider>
    </LocaleProvider>,
    document.getElementById('root')
  );
} else {
  window.location.href = '/404';
}
