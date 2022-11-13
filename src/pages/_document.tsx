import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
