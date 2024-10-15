'use client';

import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import LanguageSelector from './language-selector';
import { Button } from './ui/button';
import ThemeChanger from './theme-changer';
import { useTranslations } from 'next-intl';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const t = useTranslations('navbar');

  const navigation = [{ name: `${t('home')}`, href: '/' }];

  return (
    <Disclosure
      as='nav'
      className='sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm'
    >
      {({ open }: any) => (
        <>
          <div className='mx-auto container px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-black   dark:text-white  dark:hover:text-white '>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
                <ThemeChanger />
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href='/'>
                    <Logo />
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:block w-full'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Button asChild variant={'ghost'} key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <div className='hidden sm:block'>
                  <ThemeChanger />
                </div>
                {/* <LanguageSelector /> */}
                {/* <RecoilRoot>
                  <IconAdmin />
                </RecoilRoot> */}
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item, index: number) => (
                <Link
                  href={item.href}
                  key={index}
                  className={
                    'text-light hover:text-light block rounded-md px-3 py-2 text-base font-medium'
                  }
                >
                  <Disclosure.Button>{item.name}</Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const Logo = () => {
  return (
    <svg
      id='kevin_agyeman_logo'
      className='h-8 w-auto fill-black dark:fill-white'
      data-name='Kevin Agyeman'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1080 1080'
    >
      <title>kevin_agyeman_logo</title>
      <path d='M1044.35,1079.5H781.48a35.12,35.12,0,0,1-24.86-10.3L540,852.58,323.38,1069.2a35.12,35.12,0,0,1-24.86,10.3H35.65a35.15,35.15,0,0,1-24.85-60L959.48,70.8H793.75L298.93,565.63a35.15,35.15,0,0,1-60-24.86V35.65A35.15,35.15,0,0,1,274.07.5H466.64a35.15,35.15,0,0,1,35.15,35.15V263.34L754.1,11A35.81,35.81,0,0,1,779.19.5h265.16a35.15,35.15,0,0,1,24.85,60L120.52,1009.2H284L645.5,647.66a35.14,35.14,0,0,1,49.35-.35l76.74,74.57.36.35,297.25,297.26a35.15,35.15,0,0,1-24.85,60ZM796,1009.2H959.48L722.41,772.12l-51.7-50.25-81,81ZM309.22,70.8V455.91L431.49,333.64V70.8Z' />
      <path d='M1043.9,781.93a35.58,35.58,0,0,1-25.19-10.43L812.39,565.18a35.61,35.61,0,0,1,0-50.35L834,493.23h0L1018.71,308.5a35.61,35.61,0,0,1,60.79,25.18V746.32a35.6,35.6,0,0,1-35.6,35.61ZM887.93,540l120.35,120.36V419.64Z' />
    </svg>
  );
};
