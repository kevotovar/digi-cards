import { useState, useCallback } from 'react'

export default function useToggleOpenState(isOpen = false) {
  const [open, setOpen] = useState(isOpen)
  const toggleOpen = useCallback(
    (...props: any) => {
      setOpen(!open)
    },
    [open, setOpen]
  )
  return { open, setOpen, toggleOpen }
}
