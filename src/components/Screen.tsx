import type { ReactNode } from 'react'
import { transitions } from '../constants/tokens'

export type ScreenState = 'visible' | 'hidden-left' | 'hidden-right'

interface Props {
  state:    ScreenState
  children: ReactNode
}

const transformMap: Record<ScreenState, string> = {
  'visible':      'translateX(0)',
  'hidden-left':  'translateX(-110%)',
  'hidden-right': 'translateX(110%)',
}

export default function Screen({ state, children }: Props) {
  const active = state === 'visible'

  return (
    <div
      style={{
        position:       'absolute',
        inset:          0,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '48px 32px',
        transform:      transformMap[state],
        opacity:        active ? 1 : 0,
        pointerEvents:  active ? 'all' : 'none',
        transition:     `transform ${transitions.screen}, opacity 0.55s ease`,
        willChange:     'transform, opacity',
      }}
    >
      {children}
    </div>
  )
}
