export const Hero = () => {
  return <section className="overflow-hidden flex flex-col md:flex-row-reverse justify-between items-center mt-7 md:mt-[4.625rem]">
      <img className="-mr-[42.5%] min-w-[132.5vw] sm:min-w-[unset] sm:w-[87%] sm:mx-auto md:w-[50%] md:-mr-[13%] mlg:w-[80%] mlg:-mr-[12.5%] mlg:max-w-[728px] xl:-mr-[15%] xl:max-w-[860px]" src="./src/assets/illustration-working.svg" alt="" />
    <div className="mx-[6.5%] flex flex-col items-center text-center md:text-left md:items-start">
      <h1 className="text-heading-500 text-secondary-400 max-w-[25rem] mt-10 md:mt-0 md:text-heading-550 md:max-w-[40.625rem] xlg:text-heading-600">More than just shorter links</h1>
      <p className="text-normal-400 text-secondary-300 max-w-[30rem] mt-6 mb-7">Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <a className="block rounded-full py-[1.125rem] px-9 text-btn-300 text-white bg-primary-100 hover:brightness-125" href="#">Get Started</a>
    </div>
  </section>
}