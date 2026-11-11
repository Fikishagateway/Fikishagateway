import { useEffect } from "react"
import { useLocation } from "react-router"

export default function HashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = decodeURIComponent(location.hash.slice(1))
    const scrollToSection = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    const frame = window.requestAnimationFrame(scrollToSection)
    const timeout = window.setTimeout(scrollToSection, 80)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
    }
  }, [location.hash, location.pathname])

  return null
}
