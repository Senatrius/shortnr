interface IFeatureCard {
  icon: string;
  title: string;
  body: string;
  classes?: string;
}

export const FeatureCard = ({ icon, title, body, classes }: IFeatureCard) => {
  return (
    <div className={`relative mx-auto w-full ${classes}`}>
      <div className='absolute -top-[2.75rem] left-1/2 flex h-[5.5rem] w-[5.5rem] -translate-x-1/2 items-center justify-center rounded-full bg-primary-200 md:left-[4.75rem]'>
        <img
          src={icon}
          alt=''
        />
      </div>
      <div className='bg-white py-20 px-8 pb-10'>
        <h3 className='mb-5 text-heading-200 text-secondary-400'>{title}</h3>
        <p className='text-normal-200 text-secondary-300'>{body}</p>
      </div>
    </div>
  );
};
