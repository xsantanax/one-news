import React, { useEffect } from "react"

const useClickOutside = (ref: React.Ref<null>, callback: () => void) => {
  const handleClick = (e: Event) => {
    // @ts-ignore this ref won't be null at this point
    if (ref.current.contains(e.target)) {
      return
    }

    callback()
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])
}

export default useClickOutside
