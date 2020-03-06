import React from 'react'
import { Avatar, Divider } from 'antd'
import { AuthorStyled } from './Author.style'

const Author = () => {
	return (
		<>
			<AuthorStyled />
			<div className="author-div comm-box">
				<div>
					{' '}
					<Avatar
						size={100}
						src="/image/a2.png"
					/>
				</div>
				<div className="author-introduction">
					一个心心奋斗的小前端
					<Divider>目前暂无</Divider>
					<Avatar size={28} icon="github" className="account" />
					<Avatar size={28} icon="qq" className="account" />
					<Avatar size={28} icon="wechat" className="account" />
				</div>
			</div>
		</>
	)
}

export default Author
