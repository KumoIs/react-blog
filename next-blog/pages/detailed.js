import React, { useState, useEffect } from 'react';
import { Row, Col, List, Icon, Breadcrumb, Affix } from 'antd';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

import Head from 'next/head';
import Header from '../components/Header/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import Tocify from '../components/Tocify/Tocify.tsx';

import { BreadStyled } from '../public/style/pages/globalStyled'; // 分页容器
import DetailedDomainStyled  from '../public/style/pages/Detailed.style'; // 详情页


const Detailed = props => {
	const [dataSource, setDataSource] = useState(props.data[0]);

	const renderer = new marked.Renderer();
	const tocify = new Tocify()
	renderer.heading = function(text, level, raw) { // 定义对#这种标签的解析
		const anchor = tocify.add(text, level);
		return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
	};

	marked.setOptions({
		renderer, // 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
		gfm: true, // 启动类似Github样式的Markdown,填写true或者false
		pedantic: false, // 只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
		sanitize: false, // 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
		tables: true, // 支持Github形式的表格，必须打开gfm选项
		breaks: false, // 支持Github换行符，必须打开gfm选项，填写true或者false
		smartLists: true, // 优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
		highlight: function(code) {
			return hljs.highlightAuto(code).value; // 自动检测HTML高亮显示，会有点慢
		}, // 高亮显示规则 ，这里我们将使用highlight.js来完成
	})

	return (
		<>
			<Head>
				<title>Home</title>
				<meta charSet="utf-8" />
			</Head>
			<Header />
			<DetailedDomainStyled />
			<Row className="comm-main" type="flex" justify="center">
				<Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>

					<BreadStyled>
						<Breadcrumb>
							<Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
							<Breadcrumb.Item>详情页</Breadcrumb.Item>
						</Breadcrumb>
					</BreadStyled>

					<div>
						<div className="detailed-title">
							详情页标题
						</div>

						<div className="list-icon center">
							<span><Icon type="calendar" /> 2020-01-13</span>
							<span><Icon type="folder" /> 分类标题</span>
							<span><Icon type="fire" /> 100000人</span>
						</div>

						<div
							className='detailed-content'
							dangerouslySetInnerHTML={{ __html: marked(dataSource.content) }}
						/>
					</div>
				</Col>

				<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
					<Affix offsetTop={5}>
						<div className="detailed-nav comm-box">
							<div className="nav-title">文章目录</div>
							{tocify && tocify.render()}
						</div>
					</Affix>
				</Col>
			</Row>
			<Footer />
		</>
	)
}

Detailed.getInitialProps = async(context)=>{
	let id =context.query.id
	console.log(context);
	return await new Promise(resolve=> {
		axios('http://127.0.0.1:7001/default/detail/'+id).then(
			(res)=>{
				resolve(res.data)
			}
		)
	})
}

export default Detailed
