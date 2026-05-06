import { colors, fonts, shadows } from '../constants/tokens'
import type { Moment } from '../constants/content'

interface Props extends Moment {
  isLast: boolean
}

export default function TimelineItem({ icon, title, desc, isLast }: Props) {
  return (
    <div
      style={{
        display:       'flex',
        gap:           18,
        alignItems:    'flex-start',
        paddingBottom: isLast ? 0 : 28,
        position:      'relative',
      }}
    >
      {!isLast && (
        <div
          style={{
            position:   'absolute',
            left:       15,
            top:        34,
            bottom:     0,
            width:      1,
            background: `linear-gradient(to bottom, ${colors.primarySoft}, transparent)`,
          }}
        />
      )}

      <div
        style={{
          width:          32,
          height:         32,
          borderRadius:   '50%',
          background:     `linear-gradient(135deg, ${colors.primarySoft}, ${colors.accentPurple})`,
          flexShrink:     0,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       13,
          boxShadow:      shadows.dotGlow,
        }}
      >
        {icon}
      </div>

      <div>
        <p style={{ fontFamily: fonts.body, fontSize: 13, color: colors.primaryDeep, marginBottom: 3 }}>
          {title}
        </p>
        <p style={{ fontFamily: fonts.body, fontSize: 12, color: colors.primaryMid, opacity: 0.6, lineHeight: 1.5 }}>
          {desc}
        </p>
      </div>
    </div>
  )
}
