// @jsx jsx
import * as React from 'react';
import NextApp from 'next/app';
import NextLink from 'next/link';
import NextImage from 'next/Image';
import Head from 'next/head';
import { jsx, Box, Container, Flex, Link, Text, ThemeProvider } from 'theme-ui';
import theme from '../utils/theme';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>andrewwestling.com</title>
        </Head>
        <header
          role="banner"
          sx={{
            alignItems: 'center',
            borderBottomColor: 'muted',
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
            borderTopColor: 'primary',
            borderTopStyle: 'solid',
            borderTopWidth: '5px',
            display: 'flex',
            minHeight: '56px',
          }}
        >
          <Container>
            <Flex
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Box sx={{ flex: '0 1 auto' }}>
                <NextLink href="/" passHref>
                  <Link sx={{ display: 'flex', alignItems: 'center' }}>
                    <NextImage
                      src="/assets/a.png"
                      alt="Andrew Westling 'A' logo"
                      width={32}
                      height={32}
                      sx={{ borderRadius: 'full' }}
                    />
                    <Text sx={{ marginLeft: '10px' }}>andrewwestling.com</Text>
                  </Link>
                </NextLink>
              </Box>
            </Flex>
          </Container>
        </header>
        <main>
          <Container>
            <Component {...pageProps} />
          </Container>
        </main>
      </ThemeProvider>
    );
  }
}
