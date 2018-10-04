import Document, { Head, Main, NextScript } from 'next/document';

export default class MainDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Argus - Smart Stock Analysis</title>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
