const fontSizes = [
  '0.800rem',
  '1.000rem',
  '1.125rem',
  '1.275rem',
  '1.450rem',
  '1.600rem',
  '2.000rem',
];

export default {
  useColorSchemeMediaQuery: true,
  breakpoints: ['40rem', '52rem', '64rem'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes,
  fontWeights: {
    body: 400,
    heading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#050708',
    background: '#ffffff',
    muted: '#666666',
    highlight: '#efefef',
    primary: '#f1553a',
    secondary: '#1d93b2',
    tertiary: '#b8c05d',
    accent: '#fcbb1a',
    modes: {
      dark: {
        text: '#dddddd',
        background: '#050708',
        muted: '#898989',
        highlight: '#333333',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    label: {
      fontSize: fontSizes[0],
      color: 'muted',
    },
    footer: {
      lineHeight: 2,
      fontSize: fontSizes[0],
    },
    default: {
      fontSize: fontSizes[1],
      lineHeight: 'body',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      h1: {
        variant: 'text.heading',
        fontSize: [fontSizes[5], fontSizes[6]],
      },
      h2: {
        variant: 'text.heading',
        fontSize: [fontSizes[4], fontSizes[5]],
      },
      h3: {
        variant: 'text.heading',
        fontSize: [fontSizes[3], fontSizes[4]],
      },
      h4: {
        variant: 'text.heading',
        fontSize: [fontSizes[2], fontSizes[3]],
      },
      h5: {
        variant: 'text.heading',
        fontSize: [fontSizes[1], fontSizes[2]],
      },
      h6: {
        variant: 'text.heading',
        fontSize: [fontSizes[0], fontSizes[1]],
      },
    },
    a: {
      color: 'inherit',
      '&:hover': {
        color: 'primary',
      },
    },
    p: {
      variant: 'text.default',
    },
    li: {
      variant: 'text.default',
    },
    footer: {
      backgroundColor: 'highlight',
      paddingY: 4,
      fontSize: fontSizes[0],
      color: 'muted',
      a: {
        color: 'muted',
      },
    },
  },
  radii: {
    default: '3px',
    large: '10px',
    full: '9999px',
  },
  sizes: {
    container: '50rem',
  },
  layout: {
    container: {
      paddingX: 3,
    },
  },
};
