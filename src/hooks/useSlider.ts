import { useCallback, useState } from 'react'

const TOTAL_SCREENS = 6

interface UseSliderReturn {
  current: number
  total:   number
  goTo:    (n: number) => void
}

export function useSlider(): UseSliderReturn {
  const [current, setCurrent] = useState<number>(1)

  const goTo = useCallback((n: number) => {
    if (n < 1 || n > TOTAL_SCREENS) return
    setCurrent(n)
  }, [])

  return { current, goTo, total: TOTAL_SCREENS }
}
