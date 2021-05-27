/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useState} from 'react';
import { Layout, Menu, Avatar } from 'antd';
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
import {
	LogoWrapper,
	SubMenuContent,
	MenuText,
	HeaderContent,
	HeaderBalance,
	UserNotificationWrapper,
	NotificationCircle,
} from '../styles/LayoutStyles';
import Logo from '../assets/logo.svg';
import {
	DashboardIcon,
	CustomerIcon,
	Wallet,
	AnalyticsIcon,
	ContactIcon,
	Logout,
	SettingsIcons,
	TeamIcon,
	NotificationIcon,
} from '../assets/icon';





const { Header, Sider, Content } = Layout;




export default function LayoutComponent({children}) {
    
    const { SubMenu } = Menu;

    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(prev => !prev)
    }
    
    return (
		<Layout style={{ height: '100vh' }}>
			<Sider trigger={null} collapsible collapsed={collapsed} style={{ overflow: 'scroll' }} width="230">
				<LogoWrapper>
					<div className="logo">{!collapsed && <img src={Logo} alt="Logo" />}</div>

					<span className="trigger" onClick={toggle}>
						{' '}
						{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					</span>
				</LogoWrapper>
				<Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" defaultOpenKeys={['sub1', 'sub2']}>
					<SubMenu key="sub1" title={collapsed ? <MenuText>MP</MenuText> : <MenuText>Main pages</MenuText>}>
						<Menu.Item key="1" style={{ background: '#fff' }}>
							<SubMenuContent>
								<DashboardIcon />
								<span className="sub-menu-text">Dashboard</span>
							</SubMenuContent>
						</Menu.Item>
						<Menu.Item key="2">
							<SubMenuContent>
								<Wallet />
								<span className="sub-menu-text">Balances</span>
							</SubMenuContent>
						</Menu.Item>
						<Menu.Item key="3">
							<SubMenuContent>
								<CustomerIcon />
								<span className="sub-menu-text">Customers</span>
							</SubMenuContent>
						</Menu.Item>
						<Menu.Item key="4">
							<SubMenuContent>
								<AnalyticsIcon />
								<span className="sub-menu-text">Analytics</span>
							</SubMenuContent>
						</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" title={collapsed ? <MenuText>GE</MenuText> : <MenuText>General</MenuText>}>
						<Menu.Item key="5">
							<SubMenuContent>
								<SettingsIcons />
								<span className="sub-menu-text">Settings</span>
							</SubMenuContent>
						</Menu.Item>
						<Menu.Item key="6">
							<SubMenuContent>
								<TeamIcon />
								<span className="sub-menu-text">Team</span>
							</SubMenuContent>
						</Menu.Item>
						<Menu.Item key="7">
							<SubMenuContent>
								<ContactIcon />
								<span className="sub-menu-text">Contact</span>
							</SubMenuContent>
						</Menu.Item>
						<Menu.Item key="8">
							<SubMenuContent>
								<Logout />
								<span className="sub-menu-text">Logout</span>
							</SubMenuContent>
						</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<div className="site-layout-background" style={{ padding: '0' }}>
					<HeaderContent>
						<HeaderBalance>
							<p>Balances</p>
							<p>Today, 19th October 2020</small>
						</HeaderBalance>

						<UserNotificationWrapper>
							<NotificationCircle big>
								<span style={{ marginTop: '5px' }}>
									<NotificationIcon />
								</span>
								<NotificationCircle small />
							</NotificationCircle>
							<span>
								<Avatar
									size="large"
									src="https://res.cloudinary.com/dt69gb9me/image/upload/v1622140249/ava_ni3yvc.png"
								/>
							</span>
						</UserNotificationWrapper>
					</HeaderContent>
				</div>
				<Content
					className="site-layout-background"
					style={{
						// padding: 20,
						minHeight: 280,
						overflowX: 'auto',
						// width: 'max-content'
					}}
				>
					<div style={{ overflow: 'auto', height: '100%', padding: '2rem' }}>{children}</div>
				</Content>
			</Layout>
		</Layout>
	);
}
