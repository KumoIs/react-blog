import React, { useState } from 'react'
import Router from 'next/router'
import { Row, Col, List, Icon, Breadcrumb } from 'antd'
import moment from 'moment';
import axios from 'axios';

import Head from 'next/head'
import Header from '../components/Header/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';

import { BreadStyled } from '../public/style/pages/globalStyled';

const Home = props => {
	const [mylist, setMylist] = useState(props.data)

	return (
		<>
			<Head>
				<title>Home</title>
				<meta charSet="utf-8" />
			</Head>
			<Header />
			<Row className="comm-main" type="flex" justify="center">
				<Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
					<BreadStyled>
						<Breadcrumb>
							<Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
							<Breadcrumb.Item>视频列表</Breadcrumb.Item>
						</Breadcrumb>
					</BreadStyled>
					<div>
						<List
							header={<div>最新日志</div>}
							itemLayout="vertical"
							dataSource={mylist}
							renderItem={(item) => (
								<List.Item>
									<div
										className="list-title"
										style={{
											cursor: 'pointer'
										}}
										onClick={() => Router.push({ pathname: '/detailed', query: { id: item.id } })}
									>
										{item.title}
									</div>
									<div className="list-icon">
										<span>
											<Icon type="calendar" /> {moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')}
										</span>
										<span>
											<Icon type="folder" /> {item.typeName}
										</span>
										<span>
											<Icon type="fire" /> {item.previewNum}
										</span>
									</div>
									<div className="list-context">{item.introduce}</div>
								</List.Item>
							)}
						/>
					</div>
				</Col>

				<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
				</Col>
			</Row>
			<Footer />
		</>
	)
}

Home.getInitialProps = async () => {
	return await new Promise((resolve => {
		axios('http://127.0.0.1:7001/default/list').then(res => {
			resolve(res.data)
		})
	}))
}

export default Home
