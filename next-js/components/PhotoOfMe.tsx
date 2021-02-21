//@jsx jsx
import { jsx, Box, Text } from 'theme-ui';
import NextImage from 'next/Image';

export const PhotoOfMe = () => (
  <Box>
    <NextImage
      width={500}
      height={500}
      sx={{ borderRadius: 'large' }}
      src={'/assets/Andrew-M-Westling-2019-1.jpg'}
    />
    <Text variant="label">
      At Barbican Centre in London, May 2019. Photo by Cecily Devoto
    </Text>
  </Box>
);
