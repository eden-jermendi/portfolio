const baseTheme = {
  surface: {
    canvas: '',
    subtle: '',
    elevated: '',
    overlay: '',
  },
  text: {
    primary: '',
    secondary: '',
    muted: '',
    inverse: '',
  },
  border: {
    soft: '',
    strong: '',
  },
  accent: {
    primary: '',
    secondary: '',
    glow: '',
  },
  shadow: {
    card: '',
    hero: '',
  },
}

export const lightTheme = {
  ...baseTheme,
  surface: {
    canvas: '#f5efff',
    subtle: 'rgba(233, 223, 255, 0.42)',
    elevated: '#fffdfd',
    overlay: 'rgba(255, 255, 255, 0.78)',
  },
  text: {
    primary: '#20182d',
    secondary: '#5b516d',
    muted: '#7d6f95',
    inverse: '#fdfaff',
  },
  border: {
    soft: 'rgba(120, 96, 167, 0.18)',
    strong: 'rgba(115, 85, 174, 0.34)',
  },
  accent: {
    primary: '#6f46d7',
    secondary: '#aa8bff',
    glow: 'rgba(147, 110, 255, 0.28)',
  },
  shadow: {
    card: '0 18px 48px rgba(67, 36, 129, 0.12)',
    hero: '0 24px 80px rgba(92, 57, 171, 0.18)',
  },
}

export const darkTheme = {
  ...baseTheme,
  surface: {
    canvas: '#0f0b17',
    subtle: 'rgba(27, 20, 40, 0.82)',
    elevated: '#181124',
    overlay: 'rgba(25, 18, 37, 0.88)',
  },
  text: {
    primary: '#f4efff',
    secondary: '#c6bdd7',
    muted: '#9f93ba',
    inverse: '#130d1d',
  },
  border: {
    soft: 'rgba(177, 154, 234, 0.12)',
    strong: 'rgba(177, 154, 234, 0.3)',
  },
  accent: {
    primary: '#c4a6ff',
    secondary: '#8d68e5',
    glow: 'rgba(146, 96, 255, 0.3)',
  },
  shadow: {
    card: '0 26px 90px rgba(5, 2, 10, 0.42)',
    hero: '0 32px 110px rgba(66, 28, 117, 0.38)',
  },
}

export type ThemeType = typeof lightTheme
