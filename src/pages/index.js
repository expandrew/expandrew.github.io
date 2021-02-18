// @jsx jsx
import { jsx, Container, Flex, Heading, Image, Link, Text } from 'theme-ui';

import logo from '../assets/a.png';
import me from '../assets/Andrew-M-Westling-2019-1.jpg';

const Home = () => {
  return (
    <main>
      <title>andrewwestling.com</title>
      {/* Header */}
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
          <Flex sx={{ alignItems: 'center' }}>
            <Link rel="author" href="/">
              <Image
                alt="Andrew Westling 'A' logo"
                src={logo}
                sx={{
                  borderRadius: '50%',
                  height: '32px',
                  marginRight: '10px',
                  verticalAlign: 'middle',
                  width: '32px',
                }}
              />
              andrewwestling.com
            </Link>
          </Flex>
        </Container>
      </header>

      <section>
        <Container>
          <Flex sx={{ flexDirection: 'column' }}>
            <Heading sx={{ marginBottom: 3, marginTop: 3 }}>
              <span
                aria-label="waving hand emoji"
                role="img"
                sx={{ marginRight: 2 }}
              >
                👋
              </span>
              Hi, I'm Andrew M Westling, a software engineer in Brooklyn, NY.
            </Heading>
            <Image
              alt="Photo of Andrew M Westling"
              sx={{ borderRadius: 'large' }}
              src={me}
            />
            <Text variant="label" sx={{ marginBottom: 3 }}>
              At Barbican Centre in London, May 2019. Photo by Cecily Devoto
            </Text>
            <Text>
              I’m a software engineer in New York City. I currently work at{' '}
              <Link href="https://better.com">Better</Link>.
            </Text>
            <Text>
              I previously worked on the teams at{' '}
              <Link href="https://architizer.com">Architizer</Link> and{' '}
              <Link href="http://eyecuelab.com">EyeCue Lab</Link>.
            </Text>
            <Text>
              I play the violin with{' '}
              <Link href="https://brooklynsymphonyorchestra.org">
                Brooklyn Symphony Orchestra
              </Link>{' '}
              in my free time.
            </Text>
            <Text>
              I grew up in Oregon. I have a degree in architecture from
              University of Oregon.
            </Text>
            <Text>
              You can learn more about my professional experience from my{' '}
              <Link href="/resume">resume</Link>.
            </Text>
          </Flex>
        </Container>
      </section>
    </main>
  );
};

export default Home;
