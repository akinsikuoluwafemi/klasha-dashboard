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
import {dashboardIcon } from '../assets/icon';





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
					<SubMenu key="sub1" icon={<UserOutlined />} title="Main pages">
                        <Menu.Item key="3">
                            <div>
                                <dashboardIcon
                            </div>
                        </Menu.Item>
						<Menu.Item key="4">Bill</Menu.Item>
						<Menu.Item key="5">Alex</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
						<Menu.Item key="6">Team 1</Menu.Item>
						<Menu.Item key="8">Team 2</Menu.Item>
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
