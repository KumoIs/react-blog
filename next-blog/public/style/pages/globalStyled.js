import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	.comm-left{
		background-color: #FFF;
		padding:.3rem;
		border-radius: ${ ({ theme: { borders } }) => borders.radius };
		border: ${ ({ theme: { borders } }) => borders.colorEEE };
	}
	.comm-box{
		background-color: #FFF;
		margin-left: .5rem;
		padding:.3rem;
		border-radius:  ${ ({ theme: { borders } }) => borders.radius };
		border:  ${ ({ theme: { borders } }) => borders.colorEEE };
	}
	.comm-main{
		margin-top: .5rem;
	}
`

export const ListStyled = createGlobalStyle`
	.list-title{
    font-size:1.3rem;
    color: #1e90ff;
    padding: .5rem 0.5rem;
	}
	.list-context{
			color:#777;
			padding:.5rem;
	}
	.list-icon{
			padding:.5rem 0;
			color:#AAA;
	}
	.list-icon span{
			display: inline-block;
			padding: 0 10px;
	}
`

export const BreadStyled = styled.div`
	padding: .5rem;
	border-bottom: ${ ({ theme: { borders } }) => borders.colorEEE };
	background-color: #e1f0ff;
`;



export default GlobalStyle
