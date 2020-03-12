import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Demo from './containers/Demo';
import Login from './containers/Login';
import config from './config';

// 跳转网站404页
function Forward404() {
  const { location } = window;
  const isLocal = /192.168/.test(location.href);

  // 本地跳首页 不是本地环境则跳到404页面
  location.href = isLocal ? `/${config.routePrefix}` : '/404';
}

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/${config.routePrefix}`} exact component={Home} />
        <Route path={`/${config.routePrefix}/home`} exact component={Home} />
        <Route path={`/${config.routePrefix}/demo`} exact component={Demo} />
        <Route path={`/${config.routePrefix}/login`} exact component={Login} />
        <Route path="*" component={Forward404} />
      </Switch>
    </BrowserRouter>
  );
};
