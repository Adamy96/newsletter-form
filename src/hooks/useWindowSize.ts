'use client';
import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const initialState: InitialStateType = {
    width: undefined,
    height: undefined
  }

  const [windowSize, setWindowSize] = useState(initialState)

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width, innerHeight: height } = window
      setWindowSize({
        width: width,
        height: height
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

type InitialStateType = {
  width: number | undefined
  height: number | undefined
}

export default useWindowSize
