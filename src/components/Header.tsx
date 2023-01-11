import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className='relative mx-auto flex w-[87%] max-w-[69.375rem] items-center justify-between pt-10'>
      <img
        src='./src/assets/logo.svg'
        alt='Shortly company logo'
      />
      <button
        className='md:hidden'
        aria-label='Mobile menu'
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {!isMenuOpen ? (
          <svg
            width='24'
            height='21'
            viewBox='0 0 24 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 18H24V21H0V18Z'
              fill='currentColor'
            />
            <path
              d='M0 9H24V12H0V9Z'
              fill='currentColor'
            />
            <path
              d='M0 0H24V3H0V0Z'
              fill='currentColor'
            />
          </svg>
        ) : (
          <svg
            width='21'
            height='21'
            viewBox='0 0 21 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M8.24188e-07 18.8552L18.8552 2.23981e-06L21 2.14478L2.14478 21L8.24188e-07 18.8552Z'
              fill='currentColor'
            />
            <path
              d='M18.8552 21L0 2.14478L2.14478 0L21 18.8552L18.8552 21Z'
              fill='currentColor'
            />
          </svg>
        )}
      </button>
      <nav
        className={`absolute top-24 w-full rounded-lg bg-primary-200 px-6 pt-7 pb-10 ${
          isMenuOpen ? 'block' : 'hidden'
        } items-center sm:right-0 sm:w-[75%] md:relative md:top-0 md:ml-10 md:flex md:w-full md:flex-row md:bg-0 md:p-0`}>
        <ul className='flex-row gap-2 md:flex md:gap-8'>
          <li>
            <a
              href='#'
              onClick={() => setIsMenuOpen(false)}
              className='block py-4 text-center text-nav-200 text-white hover:text-primary-100 md:py-0 md:text-nav-100 md:text-primary-100 md:hover:text-secondary-400'>
              Features
            </a>
          </li>
          <li>
            <a
              href='#'
              onClick={() => setIsMenuOpen(false)}
              className='block py-4 text-center text-nav-200 text-white hover:text-primary-100 md:py-0 md:text-nav-100 md:text-primary-100 md:hover:text-secondary-400'>
              Pricing
            </a>
          </li>
          <li>
            <a
              href='#'
              onClick={() => setIsMenuOpen(false)}
              className='block py-4 text-center text-nav-200 text-white hover:text-primary-100 md:py-0 md:text-nav-100 md:text-primary-100 md:hover:text-secondary-400'>
              Resources
            </a>
          </li>
        </ul>
        <div className='my-5 h-[1px] w-full bg-divider md:hidden'></div>
        <ul className='flex-row items-center gap-2 md:ml-auto md:flex md:gap-9'>
          <li>
            <a
              href='#'
              onClick={() => setIsMenuOpen(false)}
              className='block py-4 text-center text-nav-200 text-white hover:text-primary-100 md:py-0 md:text-nav-100 md:text-primary-100 md:hover:text-secondary-400'>
              Login
            </a>
          </li>
          <li>
            <a
              href='#'
              onClick={() => setIsMenuOpen(false)}
              className='block whitespace-nowrap rounded-full bg-primary-100 py-4 text-center text-btn-200 text-white hover:brightness-125 md:py-3 md:px-6 md:text-btn-100'>
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
