import { useCallback } from 'react'
import { petals } from '../constants/content'

const PETAL_COUNT    = 100
const PETAL_INTERVAL = 180  // ms between spawns
const PETAL_LIFETIME = 7000 // ms until removal

const KEYFRAME_ID = 'petal-keyframes'
const KEYFRAME_CSS = `
  @keyframes petalFloat {
    0%   { transform: translateY(0) rotate(0deg);    opacity: 0.5; }
    60%  { opacity: 0.3; }
    100% { transform: translateY(-105vh) rotate(400deg); opacity: 0; }
  }
`

function ensureKeyframes(): void {
  if (document.getElementById(KEYFRAME_ID)) return
  const style = document.createElement('style')
  style.id = KEYFRAME_ID
  style.textContent = KEYFRAME_CSS
  document.head.appendChild(style)
}

interface UsePetalsReturn {
  spawnPetals: (container: HTMLElement | null) => void
}

export function usePetals(): UsePetalsReturn {
  const spawnPetals = useCallback((container: HTMLElement | null) => {
    if (!container) return
    ensureKeyframes()

    for (let i = 0; i < PETAL_COUNT; i++) {
      setTimeout(() => {
        const el = document.createElement('div')
        const duration = 3.5 + Math.random() * 3

        Object.assign(el.style, {
          position:      'absolute',
          bottom:        '-40px',
          left:          `${Math.random() * 100}%`,
          fontSize:      '20px',
          opacity:       '0.5',
          pointerEvents: 'none',
          animation:     `petalFloat ${duration}s linear forwards`,
        })

        el.textContent = petals[Math.floor(Math.random() * petals.length)]
        container.appendChild(el)
        setTimeout(() => el.remove(), PETAL_LIFETIME)
      }, i * PETAL_INTERVAL)
    }
  }, [])

  return { spawnPetals }
}
