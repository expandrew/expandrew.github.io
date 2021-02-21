//@jsx jsx
import { jsx } from 'theme-ui';
import NextImage from 'next/Image';

export const PhotoOfMe = () => (
  <NextImage
    width={500}
    height={500}
    sx={{ borderRadius: 'large' }}
    src={'/assets/Andrew-M-Westling-2019-1.jpg'}
  />
);
