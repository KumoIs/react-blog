import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    // 1.这里采用react里High Order Component的方式，可以重新包装APP和所有渲染的组件
    const originalRenderPage = ctx.renderPage;
    try{
      ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: App => (props) =>
                // App挂载样式
                sheet.collectStyles(<App {...props} />)
          });
      // 因为覆盖了Document，所以要重新返回页面的props
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

