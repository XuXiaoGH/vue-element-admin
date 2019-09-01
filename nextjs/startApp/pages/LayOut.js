import React from 'react'
import Router from 'next/router'
import { Button } from 'antd';
import Head from 'next/head';

import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;

const SubMenu = Menu.SubMenu;


export default class extends React.Component {
    static getInitialProps() {
        return {
            collapsed: false,
        }
    }

    constructor(props) {
        super(props)
    }

    onCollapse = () => {
        this.props.collapsed = true;
    }

    render() {
        const { collapsed } = this.props
        return (
            <div className='list'>
                <Head>
                    <link rel='stylesheet' href='https://cdn.bootcss.com/antd/3.1.3/antd.css'/>
                    <link rel='stylesheet' href='static/css/layout.css'/>
                </Head>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <span>Option 1</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><span>User</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                Bill is a cat.
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
