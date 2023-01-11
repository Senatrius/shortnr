import { FeatureCard } from './FeatureCard';
import { Shortener } from './Shortener';

export const Features = () => {
  return (
    <section className='bg-secondary-100'>
      <Shortener />
      <div className='mx-auto w-[86%] max-w-[30rem] text-center'>
        <h2 className='mb-6 text-heading-300 text-secondary-400 md:text-heading-400'>
          Advanced Statistics
        </h2>
        <p className='text-normal-200 text-secondary-300'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className='relative mt-[5.75rem] flex flex-col md:mx-auto md:w-[87%] md:flex-row md:gap-[1.875rem]'>
        <div className='absolute left-1/2 top-[5.75rem] h-[calc(100%-5.75rem)] w-2 -translate-x-1/2 bg-primary-100 md:top-1/2 md:h-2 md:w-full md:-translate-y-1/2'></div>
        <FeatureCard
          icon='./src/assets/icon-brand-recognition.svg'
          title='Brand Recognition'
          body="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
        />
        <FeatureCard
          icon='./src/assets/icon-detailed-records.svg'
          title='Detailed Records'
          body='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
          classes='mt-11'
        />
        <FeatureCard
          icon='./src/assets/icon-fully-customizable.svg'
          title='Fully Customizable'
          body='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
          classes='mt-[5.5rem]'
        />
      </div>
    </section>
  );
};
