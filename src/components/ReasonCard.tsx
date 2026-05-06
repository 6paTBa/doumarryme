import { useState } from 'react'
import { colors, fonts, radii } from '../constants/tokens'
import type { Reason } from '../constants/content'

type Props = Reason

export default function ReasonCard({ num, text }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:     hovered ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(10px)',
        borderRadius:   radii.card,
        padding:        '22px 20px',
        border:         '1px solid rgba(255,255,255,0.85)',
        transform:      hovered ? 'translateY(-3px)' : 'none',
        transition:     '0.2s ease',
      }}
    >
      <p
        style={{
          fontFamily:   fonts.display,
          fontSize:     34,
          fontStyle:    'italic',
          color:        colors.primarySoft,
          lineHeight:   1,
          marginBottom: 9,
        }}
      >
        {num}
      </p>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize:   13,
          color:      colors.primaryDeep,
          lineHeight: 1.55,
        }}
      >
        {text}
      </p>
    </div>
  )
}
