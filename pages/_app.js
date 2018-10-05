import React from 'react';
import { Provider } from 'mobx-react';
import App, { Container } from 'next/app';

import 'antd/dist/antd.less';

import authStore from '../stores/authStore';

import './_main.js';
const stores = {
  authStore,
};

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    authStore.set_token(localStorage.getItem('token'));
    console.debug('App Component will mount');
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Provider {...stores}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}