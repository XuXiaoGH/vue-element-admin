import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toLocale } from '@ok/react-locale';
import config from '../../config';
import './index.less';

class Home extends Component {
  render() {
    return (
      <div className="app-root">
        <div className="app-header">{toLocale('header')}</div>
        <div className="app-body">
          <Link to={`/${config.routePrefix}/home`}>Home</Link>
          <Link to={`/${config.routePrefix}/demo`}>Demo</Link>
          <Link to={`/${config.routePrefix}/login`}>Login</Link>
          <div>Home Page</div>
        </div>
        <div className="app-footer">Footer</div>
      </div>
    );
  }
}

export default withRouter(Home);
