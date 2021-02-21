// @jsx jsx
import NextApp from 'next/app';
import Head from 'next/head';
import NextImage from 'next/image';
import NextLink from 'next/link';
import * as React from 'react';
import { jsx, Box, Container, Flex, Link, Text, ThemeProvider } from 'theme-ui';
import { DarkModeToggle } from '../components/DarkModeToggle';
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
                      <Text sx={{ marginLeft: '10px' }}>
                        andrewwestling.com
                      </Text>
                    </Link>
                  </NextLink>
                </Box>
                <Box>
                  <DarkModeToggle />
                </Box>
              </Flex>
            </Container>
          </header>
          <main sx={{ flex: 1 }}>
            <Container sx={{ marginBottom: 5 }}>
              <Component {...pageProps} />
            </Container>
          </main>
          <footer sx={{ flex: 0, variant: 'styles.footer' }}>
            <Footer />
          </footer>
        </Flex>
      </ThemeProvider>
    );
  }
}
