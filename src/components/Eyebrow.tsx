import type { ReactNode } from 'react'
import { colors, fonts } from '../constants/tokens'

interface Props {
  children: ReactNode
}

export default function Eyebrow({ children }: Props) {
  return (
    <p
      style={{
        fontFamily:    fonts.body,
        fontSize:      11,
        letterSpacing: '3.5px',
        textTransform: 'uppercase',
        color:         colors.primaryMid,
        opacity:       0.65,
        marginBottom:  22,
      }}
    >
      {children}
    </p>
  )
}
