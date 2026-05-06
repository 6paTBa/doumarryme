import type { CSSProperties } from 'react'
import { RefObject, useCallback, useState } from 'react'
import { noButtonLabels } from '../constants/content'

interface Offset {
  x: number
  y: number
}

interface UseEscapingButtonReturn {
  label:    string
  style:    CSSProperties
  onEscape: () => void
}

export function useEscapingButton(
  containerRef: RefObject<HTMLDivElement>
): UseEscapingButtonReturn {
  const [moveCount, setMoveCount] = useState<number>(0)
  const [offset, setOffset]       = useState<Offset>({ x: 0, y: 0 })

  const MAX_MOVES = noButtonLabels.length - 1

  const onEscape = useCallback(() => {
    if (!containerRef.current) return

    const { offsetWidth: cw, offsetHeight: ch } = containerRef.current
    const maxX = cw / 2 - 80
    const maxY = ch / 2 - 80
    const rx   = (Math.random() * 2 - 1) * maxX
    const ry   = (Math.random() * 2 - 1) * maxY

    setOffset({ x: rx, y: ry })
    setMoveCount((prev) => Math.min(prev + 1, MAX_MOVES + 1))
  }, [containerRef, MAX_MOVES])

  const disabled = moveCount > MAX_MOVES

  const style: CSSProperties = {
    transform:     `translate(${offset.x}px, ${offset.y}px)`,
    opacity:       disabled ? 0 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    transition:    'transform 0.35s ease, opacity 0.3s ease',
  }

  const label = noButtonLabels[Math.min(moveCount, MAX_MOVES)]

  return { label, style, onEscape }
}
