export default {
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '0.889rem',
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
    text: '#000000',
    background: '#ffffff',
    primary: '#f1553a',
    muted: '#f6f6f6',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    label: {
      fontSize: 0,
    },
    default: {
      fontSize: [0, 1],
      lineHeight: 'body',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
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
  },
  radii: {
    default: '3px',
    large: '10px',
    full: '9999px',
  },
  sizes: {
    container: '40em',
  },
  layout: {
    container: {
      paddingX: 3,
    },
  },
};
