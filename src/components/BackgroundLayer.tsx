import { screenBackgrounds, transitions } from '../constants/tokens'

interface Props {
  current: number
}

export default function BackgroundLayer({ current }: Props) {
  return (
    <>
      {screenBackgrounds.map((bg, i) => (
        <div
          key={i}
          style={{
            position:   'absolute',
            inset:      0,
            background: bg,
            opacity:    current === i + 1 ? 1 : 0,
            transition: `opacity ${transitions.bg}`,
          }}
        />
      ))}
    </>
  )
}
