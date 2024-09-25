import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

function NavBar() {
  const [current, setCurrent] = useState('mail'); // Using useState hook to manage state

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key); // Updating state with setCurrent
  };

  return (
    <>
      <Menu  className='flex bg-blue-700' onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail">
        <MailOutlined />
        Mail
      </Menu.Item>
      <Menu.Item key="app" >
        <AppstoreOutlined />
        Library
      </Menu.Item>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <SettingOutlined />
            Navigation Three - Submenu
          </span>
        }
        >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="/" target="_blank" rel="noopener noreferrer">
          Gpay
        </a>
      </Menu.Item>
      <Menu.Item className="text-white text-3xl " >
        gs
      </Menu.Item>
    </Menu>
  </>
  );
}

export default NavBar;
