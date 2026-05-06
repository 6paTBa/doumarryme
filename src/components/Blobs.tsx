import type { CSSProperties } from 'react'
import { colors } from '../constants/tokens'

interface BlobConfig {
  width:   number
  height:  number
  color:   string
  style:   CSSProperties
}

const BLOBS: BlobConfig[] = [
  {
    width:  350,
    height: 350,
    color:  colors.primarySoft,
    style:  { top: -100, left: -100 },
  },
  {
    width:  280,
    height: 280,
    color:  colors.accentPurple,
    style:  { bottom: -80, right: -80 },
  },
  {
    width:  200,
    height: 200,
    color:  colors.accentYellow,
    style:  { top: '40%', left: '55%' },
  },
]

export default function Blobs() {
  return (
    <>
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          style={{
            position:     'absolute',
            width:        blob.width,
            height:       blob.height,
            borderRadius: '50%',
            background:   blob.color,
            filter:       'blur(70px)',
            opacity:      0.35,
            pointerEvents:'none',
            ...blob.style,
          }}
        />
      ))}
    </>
  )
}
