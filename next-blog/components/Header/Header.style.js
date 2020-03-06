import styled from 'styled-components';

export const HeaderStyled = styled.div`
	width: 100%;
	background-color: #fff;
	padding: .4rem;
	overflow: hidden;
	height: 3.2rem;
	.header-content {
		.header-logo{
			color:#1e90ff;
			font-size: 1.4rem;
			text-align: left;
		}
		.header-txt{
			font-size: 0.6rem;
			color: #999;
			display: inline-block;
			padding-left: 0.3rem;
		}
		.ant-meu{
			line-height: 3.2rem;
			border: none;
		}
		.ant-menu-item{
			font-size:.7rem !important;
			padding-left:1rem;
			padding-right:1rem;
		}
		.ant-menu-horizontal {
			line-height: 2.5rem;
			border: none;
		}
	}
`;
