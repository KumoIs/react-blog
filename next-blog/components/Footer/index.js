import React from 'react';
import styled from 'styled-components'

const FooterStyled = styled.div`
	text-align: center;
	width: 100%;
	padding: 1rem;
	color:#888;
`;

const Footer = ()=>(
	<FooterStyled>
		<div> 系统由 React+Node+Ant Desgin驱动 </div>
	</FooterStyled>
)

export default Footer
