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
					{/* <Menu.Item key="1" icon={<PieChartOutlined />}>
						Option 1
					</Menu.Item>
					<Menu.Item key="2" icon={<DesktopOutlined />}>
						Option 2
					</Menu.Item> */}
					<SubMenu
						title={
							<span>
								<Icon type="setting" />
								Navigation Three - Submenu
							</span>
						}
					>
						<MenuItemGroup title="Item 1">
							<Menu.Item key="setting:1">Option 1</Menu.Item>
							<Menu.Item key="setting:2">Option 2</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup title="Item 2">
							<Menu.Item key="setting:3">Option 3</Menu.Item>
							<Menu.Item key="setting:4">Option 4</Menu.Item>
						</MenuItemGroup>
					</SubMenu>

					<Menu.Item key="9" icon={<FileOutlined />}>
						Files
					</Menu.Item>
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
