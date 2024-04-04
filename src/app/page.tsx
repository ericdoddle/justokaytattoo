import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { InstagramIcon, TikTokIcon } from '@/components/SocialIcons';

import stippledCars from '@/images/photos/work/stippled-cars.jpg';
import ariPortrait from '@/images/photos/ari/ari-portrait.jpg';
import flash1 from '@/images/photos/flash/flash-1.jpeg';
import { INSTAGRAM, MAILING_LIST, TIKTOK } from '@/lib/constants';

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}>
      <path
        d='M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
        className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
      />
      <path
        d='m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6'
        className='stroke-zinc-400 dark:stroke-zinc-500'
      />
    </svg>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

function MailingList() {
  return (
    <>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <MailIcon className='h-6 w-6 flex-none' />
        <span className='ml-3'>Mailing List</span>
      </h2>
      <div className='mt-3 flex'>
        <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
          Stay up to date on tattoo work and booking.
        </p>
        <Button type='submit' className='ml-4 flex-none' href={MAILING_LIST}>
          Join List
        </Button>
      </div>
    </>
  );
}

function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className='mt-16 sm:mt-20'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {[stippledCars, ariPortrait, flash1].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}>
            <Image
              src={image}
              alt=''
              sizes='(min-width: 640px) 18rem, 11rem'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <Container className='mt-9'>
        <div className='max-w-5xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-7xl dark:text-zinc-100'>
            JUST OKAY TATTOO
          </h1>
          <div className='mx-auto max-w-xl lg:max-w-none'>
            <div className='mt-6 flex text-base text-zinc-600 dark:text-zinc-400'>
              Bay Area Based Tattoo Artist. Contemporary fineline, black and
              grey, surrealism, stippling, and image repeater.
              <div className='ml-3 mt-1 flex gap-6'>
                <SocialLink
                  href={INSTAGRAM}
                  aria-label='Follow on Instagram'
                  target='_blank'
                  rel='noopener noreferrer'
                  icon={InstagramIcon}
                />
                <SocialLink
                  href={TIKTOK}
                  aria-label='Follow on TikTok'
                  target='_blank'
                  rel='noopener noreferrer'
                  icon={TikTokIcon}
                />
              </div>
            </div>
            <div className='mt-6'>
              <MailingList />
            </div>
          </div>
        </div>
      </Container>
      <Photos />
    </>
  );
}
