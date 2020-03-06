import App from 'next/app'
import React from 'react'
import 'antd/dist/antd.css'
import '../public/style/pages/minireset.css';
import GlobalStyle, { ListStyled } from '../public/style/pages/globalStyled';
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'


const theme = {
  colors: {
    primary: '#0070f3',
  },
	borders: {
		radius: '.3rem',
		colorEEE: '1px solid #eee',
	}
};

export default class MyApp extends App {
	render() {
    const { Component, pageProps } = this.props
    return (
    	<>
				<Head>
					<script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js">
					</script>
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
					</link>
				</Head>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<ListStyled />
					<Component {...pageProps} />
				</ThemeProvider>
			</>
    )
  }
}
