import { useState } from "react"
import { Link } from "react-router"
import type { Header as HeaderType } from "../types/Header"
import { Header as HeaderContent } from "../contents/Header"
import { Menu, ArrowRightIcon, X } from "lucide-react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="text-[#56645f]">
      <div className="container mx-auto px-4 py-4 lg:px-0">
        <div className="relative flex items-center justify-between border-b border-[#dfe7e2] pb-4">
          <Link
            to="/"
            className="relative z-10 flex items-center gap-2"
            onClick={closeMenu}
          >
            <img
              src="/images/logo/logo.png"
              alt="Fikisha, prepaid TANESCO and submeter tokens in Tanzania"
              className="h-10 w-auto"
            />
            <span>Fikisha</span>
          </Link>

          <nav
            aria-label="Primary"
            className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex"
          >
            <ul className="pointer-events-auto flex items-center gap-6 text-[13px] tracking-[-.01em]">
              {HeaderContent.map((item: HeaderType) => (
                <li key={item.label}>
                  <Link to={item.href} className="whitespace-nowrap hover:text-[#2c9a58]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-4">
            <div className="hidden items-center gap-4 md:flex text-[13px] tracking-[-.01em]">
              <Link to="/">Log in</Link>
              <Link
                to="/"
                className="flex items-center gap-2 rounded-full bg-[#102820] px-5 py-3 text-white"
              >
                <span>Sign up</span>
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-[#dfe7e2] lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="flex flex-col gap-4 border-b border-[#dfe7e2] py-4 lg:hidden"
          >
            {HeaderContent.map((item: HeaderType) => (
              <Link
                to={item.href}
                key={item.label}
                className="py-1"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2 md:hidden">
              <Link to="/" onClick={closeMenu}>
                Log in
              </Link>
              <Link
                to="/"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#102820] px-5 py-3 text-white"
                onClick={closeMenu}
              >
                <span>Sign up</span>
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
