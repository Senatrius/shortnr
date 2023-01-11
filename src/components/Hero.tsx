export const Hero = () => {
  return (
    <section className='mt-7 mb-[9.5rem] flex flex-col items-center justify-between overflow-hidden md:mt-[4.625rem] md:mb-48 md:flex-row-reverse'>
      <img
        className='-mr-[42.5%] min-w-[132.5vw] sm:mx-auto sm:w-[87%] sm:min-w-[unset] md:-mr-[13%] md:w-[50%] mlg:-mr-[12.5%] mlg:w-[80%] mlg:max-w-[728px] xl:-mr-[15%] xl:max-w-[860px]'
        src='./src/assets/illustration-working.svg'
        alt=''
      />
      <div className='mx-[6.5%] flex flex-col items-center text-center md:items-start md:text-left'>
        <h1 className='mt-10 max-w-[25rem] text-heading-500 text-secondary-400 md:mt-0 md:max-w-[40.625rem] md:text-heading-550 xlg:text-heading-600'>
          More than just shorter links
        </h1>
        <p className='mt-6 mb-7 max-w-[30rem] text-normal-400 text-secondary-300'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <a
          className='block rounded-full bg-primary-100 py-[1.125rem] px-9 text-btn-300 text-white hover:brightness-125'
          href='#'>
          Get Started
        </a>
      </div>
    </section>
  );
}