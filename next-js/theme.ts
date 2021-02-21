export default {
  useColorSchemeMediaQuery: true,
  breakpoints: ['40rem', '52rem', '64rem'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '0.79rem',
    '1rem',
    '1.125rem',
    '1.266rem',
    '1.424rem',
    '1.602rem',
    '1.802rem',
  ],
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
    primary: '#f1553a',
    secondary: '#1d93b2',
    accent: '#fcbb1a',
    highlight: '#efefef',
    modes: {
      dark: {
        text: '#dddddd',
        background: '#050708',
        primary: '#f1553a',
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
      fontSize: 0,
      color: 'muted',
    },
    footer: {
      lineHeight: 2,
      fontSize: 0,
    },
    default: {
      fontSize: 1,
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
        fontSize: [5, 6],
      },
      h2: {
        variant: 'text.heading',
        fontSize: [4, 5],
      },
      h3: {
        variant: 'text.heading',
        fontSize: [3, 4],
      },
      h4: {
        variant: 'text.heading',
        fontSize: [2, 3],
      },
      h5: {
        variant: 'text.heading',
        fontSize: [1, 2],
      },
      h6: {
        variant: 'text.heading',
        fontSize: [0, 1],
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
    },
    footer: {
      backgroundColor: 'highlight',
      fontSize: 0,
      paddingY: 4,
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
