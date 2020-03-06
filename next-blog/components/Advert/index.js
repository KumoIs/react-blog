import React from 'react'
import AdvertDomainStyled, { ImageStyled } from './Advert.style';

const Advert = () => {
	return (
		<>
			<AdvertDomainStyled />
			<div className="ad-div comm-box">
				<ImageStyled src='/image/_advert1.png' />
				<ImageStyled src='/image/_advert2.png' />
				<ImageStyled src='/image/_advert3.jpg' />
				<ImageStyled src='/image/_advert4.png' />
			</div>
		</>
	)
}

export default Advert;
