const theme = {
  color: {
    accent0: '#bb1333',
    accent1: '#08addd',

    bg00: '#181F22',
    bg01: '#22292C',
    bg02: '#252C2F',
    bg03: '#666',
    bg04: '#888',
    bg05: '#cccccc',
    bg06: '#EFEFF3',
    bg07: '#FFFFFF',

    txt00: '#000',
    txt01: '#222',
    txt02: '#666',
    txt03: '#888',
    txt04: '#ccc',
    txt05: '#fff',
  },
  
  font: {
    f00: "'Lato', sans-serif",
    f01: "'Montserrat', sans-serif",
  },

  size: {
    s00: '0.6rem',
    s01: '0.8rem',
    s02: '1.0rem',
    s03: '1.2rem',
    s04: '1.4rem',
    s05: '1.6rem',
    s06: '1.8rem',
    s07: '2.0rem',
    s08: '2.4rem',
    s09: '3.0rem',
    s10: '4.0rem',
    s11: '5.0rem',
    s12: '6.0rem',
    s13: '8.0rem',
  },

  // for media queries -- express them as @media ${theme.breakpoints[0]} {styles here}
  // in the arr, the first is for mobile, second is for portrait tablet, third is for desktop
  breakpoints: [
    '(max-width: 600px)',
    '(max-width: 768px)',
    '(min-width: 769px)',
  ],
 
  flex: (direction = 'row', align = 'normal', justify = 'normal') => `{
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  }`,
}

export default theme

export const {color, font, size, breakpoints, flex} = theme