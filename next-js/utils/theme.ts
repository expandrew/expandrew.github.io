export default {
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
  },
  lineHeights: {
    body: 1.5,
  },
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#f1553a',
    muted: '#f6f6f6',
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
