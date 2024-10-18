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
  return <span>Veronacovid.it</span>;
};
