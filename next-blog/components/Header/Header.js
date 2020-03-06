import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import {
	HeaderStyled,
} from './Header.style';

const Header = () => {
	return (
		<>
			<HeaderStyled>
				<Row className='header-content' type="flex" justify="center">
					<Col xs={24} sm={24} md={16} lg={18} xl={14} >
						<span className="header-logo">Blog</span>
						<span className="header-title">嘚啵嘚啵嘚啵</span>
					</Col>
					<Col xs={0} sm={0} md={7} lg={5} xl={4}>
						<Menu mode='horizontal'>
							<Menu.Item key="home">
								<Icon type="home" />
								首页
							</Menu.Item>
							<Menu.Item key="video">
								<Icon type="youtube" />
								视频
							</Menu.Item>
							<Menu.Item key="life">
								<Icon type="smile" />
								生活
							</Menu.Item>
						</Menu>
					</Col>
				</Row>
			</HeaderStyled>
		</>
	)
}

export default Header;
