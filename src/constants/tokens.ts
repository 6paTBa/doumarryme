export const colors = {
  primary:      '#e91e63',
  primaryDark:  '#ad1457',
  primaryDeep:  '#880e4f',
  primaryMid:   '#c2185b',
  primarySoft:  '#f48fb1',
  primaryPale:  '#fce4ec',
  accentPurple: '#ce93d8',
  accentYellow: '#fff176',
  white:        '#ffffff',
} as const

export const fonts = {
  display: "'Cormorant Garamond', serif",
  body:    "'DM Sans', sans-serif",
} as const

export const radii = {
  pill: '50px',
  card: '18px',
} as const

export const shadows = {
  btn:      '0 8px 32px rgba(233,30,99,0.28)',
  btnHover: '0 14px 40px rgba(233,30,99,0.38)',
  dotGlow:  '0 4px 14px rgba(244,143,177,0.45)',
} as const

export const transitions = {
  screen: '0.75s cubic-bezier(0.4,0,0.2,1)',
  fast:   '0.5s ease',
  bg:     '0.9s ease',
} as const

export const screenBackgrounds: readonly string[] = [
  'linear-gradient(135deg, #fff0f8 0%, #fce4ec 30%, #f8bbd0 60%, #f3e5f5 100%)',
  'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 25%, #fff9c4 60%, #fce4ec 100%)',
  'linear-gradient(135deg, #e8f5e9 0%, #f3e5f5 40%, #fce4ec 80%, #e3f2fd 100%)',
  'linear-gradient(135deg, #fff8e1 0%, #fce4ec 40%, #f3e5f5 80%, #e8eaf6 100%)',
  'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 40%, #f3e5f5 100%)',
]
