import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { renderRoutes } from 'react-router-config';
import { union } from '../utils/utils';

import './HomeLayout.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const HomeLayout = (props: any) => {
  const { route } = props;

  const [breadcrumbDataSource, setBreadcrumbDataSource] = useState();
  const [menuDefaultVal, setMenuDefaultVal] = useState({
    keys: props.location.pathname.split('/').slice(1),
    openKeys: [props.location.pathname.split('/').slice(1)[0]],
  });

  // 遍历菜单列表
  const Menus = data => (data || []).map(item => {
    if (!item.hidden) {
      if (item.routes) {
        return (
          <SubMenu key={item.key} title={item.name}>
            {Menus(item.routes)}
          </SubMenu>
        )
      }

      return (
        <Menu.Item key={item.key} title={item.name} path-name={item.path}>
          <span>
            {item.name}
          </span>
        </Menu.Item>
      )
    }
  });

  // 点击菜单跳转对应页面
  const HandleMenuClick = info => {
    const dataSource = union(route.routes, info.keyPath);
    setBreadcrumbDataSource(dataSource);
    props.history.push(info.item.props['path-name'])
  };

  // 菜单展开时获取keys
  const HandleMenuOpenChange = item => setMenuDefaultVal({ ...menuDefaultVal, openKeys: item });

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={menuDefaultVal.keys}
          defaultOpenKeys={menuDefaultVal.openKeys}
          onClick={HandleMenuClick}
          onOpenChange={HandleMenuOpenChange}
        >
          {Menus(route.routes)}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, height: '32px' }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {
              (breadcrumbDataSource || []) .map(item => {
                return <Breadcrumb.Item key={item.key}>{item.name}</Breadcrumb.Item>
              })
            }
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{renderRoutes(route.routes)}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default HomeLayout
