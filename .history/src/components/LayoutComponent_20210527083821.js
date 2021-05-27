import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	PieChartOutlined,
} from '@ant-design/icons';
import '../styles/layout.css'
import {LogoWrapper} from '../styles/LayoutStyles';
import Logo from '../assets/logo.svg';
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
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					{/* <SubMenu style={{background: 'pink'}} key="sub1" icon={<UserOutlined />} title="Main pages">
						<Menu.Item key="3">Tom</Menu.Item>
						<Menu.Item key="4">Bill</Menu.Item>
						<Menu.Item key="5">Alex</Menu.Item>
					</SubMenu> */}
                    
					<Menu.Item key="1" icon={<PieChartOutlined />}>
						Option 1
					</Menu.Item>

					<Menu.Item key="2" icon={<VideoCameraOutlined />}>
						nav 2
					</Menu.Item>
					<Menu.Item key="3" icon={<UploadOutlined />}>
						nav 3
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
