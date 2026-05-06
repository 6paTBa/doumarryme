import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { colors, radii, shadows, fonts } from '../constants/tokens'

interface Props {
  children:  ReactNode
  onClick:   () => void
  style?:    CSSProperties
}

export default function Button({ children, onClick, style: extraStyle }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding:       '15px 48px',
        background:    `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
        color:         colors.white,
        border:        'none',
        borderRadius:  radii.pill,
        fontFamily:    fonts.body,
        fontSize:      14,
        letterSpacing: '0.5px',
        cursor:        'pointer',
        boxShadow:     hovered ? shadows.btnHover : shadows.btn,
        transform:     hovered ? 'translateY(-2px)' : 'none',
        transition:    '0.2s ease',
        ...extraStyle,
      }}
    >
      {children}
    </button>
  )
}
