import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [wScrollX, setWScrollX] = useState(0)
  const [wScrollY, setWScrollY] = useState(0)

  useEffect(() => {
    function handleScrollListener() {
      setWScrollX(window.scrollX)
      setWScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScrollListener)
    return () => {
      window.removeEventListener("scroll", handleScrollListener)
    }
  }, [])

  return { wScrollX, wScrollY }
}
