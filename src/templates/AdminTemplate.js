import React, { Fragment, useState } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import { Layout, Menu,Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content,Footer } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = ({ Component, ...restProps }) => {


    const [state, setState] = useState({
        collapsed: false,
    })

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };


    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
             <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={state.collapsed} onCollapse={state.onCollapse}>
          <div className="logo" >
          <Link 
                                to="/home" 
                               
                               
                            >
                                MOVIE
                            </Link>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<DesktopOutlined />}>
            <NavLink to='/admin/films'>Quản lý Phim</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}  >
            <NavLink to='/admin/users'>Quản lý người dùng</NavLink>
            </Menu.Item>
          
          
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} > <Header> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
             
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <Component {...propsRoute} >
           
            </Component>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Quản Lý Web Phim</Footer>
        </Layout>
      </Layout>
    
        </Fragment>
    }} />
}
