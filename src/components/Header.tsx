import { useState } from "react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return <header>
    <div className="mx-auto w-[87%] max-w-[69.375rem] relative flex items-center justify-between pt-10">
      <img src="./src/assets/logo.svg" alt="Shortly company logo" />
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {!isMenuOpen ? <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 18H24V21H0V18Z" fill="currentColor"/><path d="M0 9H24V12H0V9Z" fill="currentColor"/><path d="M0 0H24V3H0V0Z" fill="currentColor"/></svg> : <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.24188e-07 18.8552L18.8552 2.23981e-06L21 2.14478L2.14478 21L8.24188e-07 18.8552Z" fill="currentColor"/><path d="M18.8552 21L0 2.14478L2.14478 0L21 18.8552L18.8552 21Z" fill="currentColor"/></svg>}
      </button>
      <nav className={`absolute rounded-lg w-full pt-7 px-6 pb-10 bg-primary-200 top-24 ${isMenuOpen ? "block" : "hidden"} md:relative md:flex md:flex-row md:ml-10 items-center md:top-0 md:p-0 md:bg-0`}>
        <ul className="md:flex flex-row gap-2 md:gap-8">
          <li><a href="#" onClick={() => setIsMenuOpen(false)} className="block py-4 text-white text-nav-200 text-center md:text-primary-100 md:text-nav-100 md:py-0 hover:text-primary-100 md:hover:text-secondary-400">Features</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)} className="block py-4 text-white text-nav-200 text-center md:text-primary-100 md:text-nav-100 md:py-0 hover:text-primary-100 md:hover:text-secondary-400">Pricing</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)} className="block py-4 text-white text-nav-200 text-center md:text-primary-100 md:text-nav-100 md:py-0 hover:text-primary-100 md:hover:text-secondary-400">Resources</a></li>
        </ul>
        <div className="w-full h-[1px] bg-divider my-5 md:hidden"></div>
        <ul className="md:flex flex-row items-center gap-2 md:gap-9 md:ml-auto">
          <li><a href="#" onClick={() => setIsMenuOpen(false)} className="block py-4 text-white text-nav-200 text-center md:text-primary-100 md:text-nav-100 md:py-0 hover:text-primary-100 md:hover:text-secondary-400">Login</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)} className="block rounded-full py-4 text-white text-btn-200 text-center whitespace-nowrap bg-primary-100 md:py-3 md:px-6 md:text-btn-100 hover:brightness-125">Sign Up</a></li>
        </ul>
      </nav>
    </div>
    
  </header>
}