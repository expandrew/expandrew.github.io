//@jsx jsx
import { jsx, Box, Text } from 'theme-ui';
import NextImage from 'next/image';

export const PhotoOfMe = () => (
  <Box as="figure">
    <NextImage
      width={500}
      height={500}
      sx={{ borderRadius: 'large' }}
      src={'/assets/Andrew-M-Westling-2019-1.jpg'}
      alt="Photo of Andrew at Barbican Centre"
    />
    <Text as="figcaption" variant="label">
      At Barbican Centre in London, May 2019. Photo by Cecily Devoto
    </Text>
  </Box>
);
