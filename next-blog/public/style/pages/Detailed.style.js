import styled, { createGlobalStyle } from 'styled-components';

const DetailedDomainStyled = createGlobalStyle`
	.bread-div{
    padding: .5rem;
    border-bottom:1px solid #eee;
    background-color: #e1f0ff;
	}
	.detailed-title{
		font-size: 1.8rem;
		text-align: center;
		padding: 1rem;
	}
	.center{
		text-align: center;
	}
	.detailed-content{
		padding: 1.3rem;
		font-size: 1rem;
	}
	pre{
		display: block;
		background-color:#f3f3f3;
		padding: .5rem !important;
		overflow-y: auto;
		font-weight: 300;
		font-family: Menlo, monospace;
		border-radius: .3rem;
	}
	pre{
		background-color: #283646 !important;
	}
	pre >code{
		border:0px !important;
		background-color: #283646 !important;
		color:#FFF;
	}
	code {
		display: inline-block ;
		background-color:#f3f3f3;
		border:1px solid #fdb9cc;
		border-radius:3px;
		font-size: 12px;
		padding-left: 5px;
		padding-right: 5px;
		color:#4f4f4f;
		margin: 0px 3px;
	}
	
	.title-anchor{
		color:#888 !important;
		padding:4px !important;
		margin: 0rem !important;
		height: auto !important;
		line-height: 1.2rem !important;
		font-size: .7rem !important;
		border-bottom: 1px dashed #eee;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.active{
		color:rgb(30, 144, 255) !important;
	}
	.nav-title{
		text-align: center;
		color: #888;
		border-bottom: 1px solid rgb(30, 144, 255);
	
	}
	.article-menu{
		font-size:12px;
	}
	iframe{
		height: 34rem;
	}
	.detailed-content  img{
		width: 100%;
		border:1px solid #f3f3f3;
	}
	.title-level3{
	display: none !important;
	}
	.ant-anchor-link-title{
		font-size: 12px !important;
	}
	.ant-anchor-wrapper{
		padding: 5px !important;
	}
`;

export default DetailedDomainStyled;
