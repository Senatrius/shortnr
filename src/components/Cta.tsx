export const Cta = () => {
  return (
    <section className="bg-primary-200 bg-[url('./src/assets/bg-boost-mobile.svg')] bg-cover bg-no-repeat pb-[5.5rem] pt-24 md:bg-[url('./src/assets/bg-boost-desktop.svg')]">
      <div className='mx-auto flex w-[87%] max-w-[27.5rem] flex-col items-center'>
        <h2 className='mb-[1.125rem] text-center text-heading-300 text-white md:mb-6 md:text-heading-400'>
          Boost your links today
        </h2>
        <a
          href='#'
          className='rounded-full bg-primary-100 py-5 px-10 text-btn-300 text-white hover:brightness-125'>
          Get Started
        </a>
      </div>
    </section>
  );
};
