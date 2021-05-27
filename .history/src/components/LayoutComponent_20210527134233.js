import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	TeamOutlined,
	PieChartOutlined,
	DesktopOutlined,
	FileOutlined,
} from '@ant-design/icons';
import '../styles/layout.css'
import {LogoWrapper} from '../styles/LayoutStyles';
import Logo from '../assets/logo.svg';
import {DashboardIcon } from '../assets/icon';





const { Header, Sider, Content } = Layout;




export default function LayoutComponent({children}) {
    
    const { SubMenu } = Menu;


	const MenuItemGroup = Menu.ItemGroup;



    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(prev => !prev)
    }
    
    return (
		<Layout style={{ height: '100vh' }}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<LogoWrapper>
					<div className="logo">{!collapsed && <img src={Logo} alt="Logo" />}</div>

					<span className="trigger" onClick={toggle}>
						{' '}
						{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					</span>
				</LogoWrapper>
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
					<SubMenu
						key="sub1"
						title={
							<span>
								{/* <Icon type="mail" /> */}
								<span></span>
							</span>
						}
					>
						<MenuItemGroup key="g1" title="Item 1">
							<Menu.Item key="1">Option 1</Menu.Item>
							<Menu.Item key="2">Option 2</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup key="g2" title="Item 2">
							<Menu.Item key="3">Option 3</Menu.Item>
							<Menu.Item key="4">Option 4</Menu.Item>
						</MenuItemGroup>
					</SubMenu>
					<SubMenu
						key="sub2"
						title={
							<span>
								{/* <Icon type="appstore" /> */}
								<span>Navigation Two</span>
							</span>
						}
					>
						<Menu.Item key="5">Option 5</Menu.Item>
						<Menu.Item key="6">Option 6</Menu.Item>
						<SubMenu key="sub3" title="Submenu">
							<Menu.Item key="7">Option 7</Menu.Item>
							<Menu.Item key="8">Option 8</Menu.Item>
						</SubMenu>
					</SubMenu>
					<SubMenu
						key="sub4"
						title={
							<span>
								{/* <Icon type="setting" /> */}
								<span>Navigation Three</span>
							</span>
						}
					>
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
						<Menu.Item key="11">Option 11</Menu.Item>
						<Menu.Item key="12">Option 12</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					{/* <span className="trigger" onClick={toggle}> {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }</span> */}
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
}
