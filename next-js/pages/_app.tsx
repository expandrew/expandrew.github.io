// @jsx jsx
import * as React from 'react';
import NextApp from 'next/app';
import NextLink from 'next/link';
import NextImage from 'next/Image';
import { jsx, Container, Flex, Link, Text, ThemeProvider } from 'theme-ui';
import theme from '../utils/theme';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
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
            <NextLink href="/" passHref>
              <Link>
                <Flex sx={{ alignItems: 'center' }}>
                  <NextImage
                    src="/images/a.png"
                    alt="Andrew Westling 'A' logo"
                    width="32px"
                    height="32px"
                    sx={{
                      borderRadius: '50%',
                    }}
                  />
                  <Text sx={{ marginLeft: '10px' }}>andrewwestling.com</Text>
                </Flex>
              </Link>
            </NextLink>
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
