import React from 'react';
import { Provider } from 'mobx-react';
import App, { Container } from 'next/app';

import 'antd/dist/antd.less';

import authStore from '../stores/authStore';
import frameStore from '../stores/frameStore';

import './_main.js';
import '../styles/style.scss';

const stores = {
  authStore,
  frameStore,
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
    console.debug('App Component will mount');
    authStore.set_token(localStorage.getItem('token'));
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.debug(error, info);
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