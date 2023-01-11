import { ChangeEvent, FormEvent, useState } from 'react';

interface IShort {
  original: string;
  short: string;
}

export const Shortener = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState<IShort[]>([]);

  const shortenUrl = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (url === '') {
      setError('Please add a link');
      return;
    }

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`,
        {
          method: 'GET',
          mode: 'cors'
        }
      );

      const data = await response.json();

      if (data.ok) {
        setShortenedLinks([
          ...shortenedLinks,
          {
            original: data.result.original_link,
            short: data.result.full_short_link
          }
        ]);
      } else {
        switch (data.error_code) {
          case 2:
            setError('Please enter a valid URL.');
            break;
          case 3:
            setError('Rate limit reached. Try again later.');
            break;
          case 4:
            setError('Your IP address is blocked. Sorry :/');
            break;
          case 5:
            setError(
              'Error occurred when generating a shortened link. Try again.'
            );
            break;
          case 6:
            setError('Unknown error.');
            break;
          case 10:
            setError(
              `This link cannot be shortened. ${data.disallowed_reason}`
            );
            break;
          default:
            setError('Unknown error.');
        }
      }

      console.log(data);
    } catch (err) {
      setError(`${err.message}. Please try again later.`);
    }
  };

  const copyText = (e: any, text: string) => {
    e.target.textContent = 'Copied!';
    e.target.style.backgroundColor = 'hsl(260, 8%, 14%)';
    navigator.clipboard.writeText(text);
  };

  return (
    <div className='-translate-y-[5rem] md:-translate-y-[5.25rem]'>
      <form
        onSubmit={shortenUrl}
        className="mt mx-auto flex w-[87%] flex-col rounded-lg bg-primary-200 bg-[url('./src/assets/bg-shorten-mobile.svg')] bg-cover bg-top bg-no-repeat p-6 md:flex-row md:items-center md:justify-between md:bg-[url('./src/assets/bg-shorten-desktop.svg')] md:py-[3.25rem] md:px-16">
        <div className='flex grow flex-col'>
          <label
            htmlFor='url'
            className='sr-only'>
            Enter URL
          </label>
          <input
            className={`rounded-lg border-[3px] border-white bg-white p-3 text-normal-200 placeholder:text-secondary-300 md:p-[0.8125rem] md:text-normal-300 ${
              error && '!border-error'
            }`}
            type='text'
            name='url'
            id='url'
            value={url}
            placeholder='Shorten a link here...'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUrl(e.target.value);
              setError('');
            }}
          />
          {error && (
            <span className='relative mt-2 text-err-100 italic text-error md:absolute md:top-[7.5rem] md:mt-0 md:text-err-200'>
              {error}
            </span>
          )}
        </div>
        <button
          className='mt-4 grow whitespace-nowrap rounded-lg bg-primary-100 py-[0.8125rem] px-10 text-btn-300 text-white hover:brightness-125 md:mt-0 md:ml-6 md:shrink md:grow-0 md:py-[1.1875rem] md:text-btn-200'
          type='submit'>
          Shorten It!
        </button>
      </form>
      <div
        aria-live='polite'
        className='mx-auto flex w-[87%] flex-col'>
        {shortenedLinks.map((link, idx) => (
          <div
            key={idx}
            className='mt-4 flex flex-col rounded-lg bg-white md:mt-6 md:flex-row md:items-center md:py-4 md:pr-6 md:pl-8'>
            <p className='p-4 text-normal-300 md:mr-auto md:p-0 md:text-normal-400'>
              {link.original}
            </p>
            <div className=' h-[1px] w-full bg-divider md:hidden'></div>
            <a
              target='_blank'
              href={link.short}
              className='p-4 text-normal-300 text-primary-100 hover:text-secondary-500 md:p-0 md:text-normal-400'>
              {link.short}
            </a>
            <button
              onClick={e => copyText(e, link.short)}
              className='mx-4 mb-4 min-w-[6.375rem] rounded-lg bg-primary-100 p-4 text-btn-100 text-white md:mx-0 md:mb-0 md:ml-10'
              type='button'>
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
