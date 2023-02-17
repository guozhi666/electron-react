import { useNavigate } from 'react-router-dom';
import './menu.css'
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('违章数据管理', '/violation', <PieChartOutlined />),
  getItem('系统管理', '/system', <MailOutlined />, [
    getItem('用户管理', '/system/user'),
    getItem('角色管理', '/system/role'),
    getItem('菜单管理', '/system/menu'),
    getItem('部门管理', '/system/dept'),
    getItem('岗位管理', '/system/post'),
    getItem('字典管理', '/system/dict'),
  ]),
];

function MenuList() {
  const navigate = useNavigate()

  function menuChange(record: any) {
    if (record.key !== '/') {
      navigate(record.key)
    }
  }

  return (
    <>
      <div className="menu_wrapper">
        <div className='menu_title'>违章通知单系统</div>
        <div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          items={items}
          onClick={menuChange}
        />
        </div>
      </div>
    </>
  )
}

export default MenuList;