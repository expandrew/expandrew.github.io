// @jsx jsx
import NextApp from 'next/app';
import Head from 'next/head';
import NextImage from 'next/image';
import NextLink from 'next/link';
import * as React from 'react';
import { jsx, Box, Container, Flex, Link, Text, ThemeProvider } from 'theme-ui';
import { DarkModeToggle } from '../components/DarkModeToggle';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import theme from '../theme';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>andrewwestling.com</title>
        </Head>
        <Flex sx={{ minHeight: '100vh', flexDirection: 'column' }}>
          <Header />
          <main sx={{ flex: 1 }}>
            <Container sx={{ marginBottom: 5 }}>
              <Component {...pageProps} />
            </Container>
          </main>
          <Footer sx={{ flex: 0 }} />
        </Flex>
      </ThemeProvider>
    );
  }
}
