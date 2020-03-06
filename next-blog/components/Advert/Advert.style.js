import styled, { createGlobalStyle } from 'styled-components'

const AdvertDomainStyled = createGlobalStyle`
	.ad-div{
    margin-top: .5rem;
	}
`;

export const ImageStyled = styled.div`
	width: 100%;
	height: 123px;
	border-radius: ${ ({ theme: { borders } }) => borders.radius };
	margin-bottom: .2rem;
	overflow: hidden;
	background: url(${({ src })  => src}) center center /cover no-repeat;
`;

export default AdvertDomainStyled;
