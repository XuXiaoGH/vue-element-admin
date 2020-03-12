import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('demoStore')
@observer
class Demo extends Component {
  loadMore = () => {
    this.props.demoStore.loadList();
  };

  render() {
    const { demoStore } = this.props;

    return (
      <div className="app-root">
        <div className="app-header">Demo Page</div>
        <div className="app-body">
          <div>Demo</div>
          <div style={{ marginTop: 10 }}>
            {
              demoStore.list.map((item, index) => {
                return (
                  <div className="item" key={index}>{item}</div>
                );
              })
            }
          </div>
          <a onClick={this.loadMore} href="#" style={{ marginLeft: 0 }}>Load more ...</a>
        </div>
        <div className="app-footer">Demo Page</div>
      </div>
    );
  }
}

export default withRouter(Demo);
