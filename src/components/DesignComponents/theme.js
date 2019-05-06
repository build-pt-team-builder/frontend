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

    //LIGHT
    accent1: '#bb1333',
    bg00: '#aaa',
    bg01: '#fff',
    txt01: '#fff',
    txt02: '#ccc',
    txt03: '#666',
    txt04: '#222',
    txt05: '#181F22',
    txt06: '#55596D',

    //legacy
    primaryColor: '#bb1333',
    primaryDark: '#bb1333',
    primaryBgShading: '#222',
    secondaryColor: '#08addd',
    secondaryBgShading: '#222',
    accent: '#888',
    accent2: '#666',
    emphasis: '#fff',
    darkText: '#222',
    lightText: '#FFFFFF',
    lightTextEmphasis: '#fff',
    danger: 'red'
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

  //legacy
  fontStyles: {
    logoFont: "'Bangers', 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif",
    headingFont: "'Bangers', 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif",
    defaultFont: "'Lato', sans-serif",
  },
  colorScheme: {
    logoColor: () => {
      return theme.color.emphasis
    },
    headerBgColor: () => {
      return theme.color.lightText
    },
    headerFontColor: () => {
      return theme.color.accent
    },
    footerBgColor: () => {
      return theme.color.primaryColor
    },
    footerFontColor: () => {
      return theme.color.lightText
    },
    headingColor: () => {
      return theme.color.primaryColor
    },
    defaultFontColor: () => {
      return theme.color.darkText
    },
    defaultLinkColor: () => {
      return theme.color.secondaryColor
    },
    containerBgColor: () => {
      return theme.primaryBgShading
    },
    cardBgColor: () => {
      return theme.secondaryBgShading
    },
    defaultBorderColor: () => {
      return theme.color.secondaryBgShading
    },
  },
  fontSizing: { // Based on CSS default font-resizing of 62.5%
    xxxxs: '.8rem',
    xxxs: '1rem',
    xxs: '1.2rem',
    xs: '1.4rem', // base size for mobile view
    s: '1.6rem', // base size for text
    sm: '1.8rem', // base size for menu and button text
    m: '2rem', // base heading/sub-heading size
    ml: '2.4rem', // base headline size
    l: '4rem', // for big emphasis
    xl: '5rem', // ultra large
    xxl: '6rem', // site banner headline
    xxxl: '8rem',
  },
}

export default theme

export const {color, colorScheme, fontStyles, fontSizing, font, size, breakpoints, flex} = theme