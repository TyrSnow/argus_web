import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MainDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Argus - Smart Stock Analysis</title>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
