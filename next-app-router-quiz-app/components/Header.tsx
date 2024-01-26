'use client';

import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    { title: 'Home', path: '/' },
    { title: 'Question', path: '/question' },
    { title: 'State', path: '/state' },
    { title: 'Quiz', path: '/quiz' },
  ];

  return (
    <header className="shadow-lg">
      <div
        className={`fixed z-20 transition-all duration-300 lg:hidden ${
          open ? 'right-0' : '-right-64'
        } h-screen w-64 bg-orange-500 p-4`}
      >
        <XCircleIcon
          className={`mb-4 size-8 stroke-slate-50`}
          stroke="2"
          onClick={() => setOpen(false)}
        />
        <div className="flex flex-col space-y-4" onClick={() => setOpen(false)}>
          {routes.map((route) => (
            <Link
              className={'rounded bg-orange-700 px-6 py-2 text-slate-100'}
              href={route.path}
              key={route.path}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between bg-orange-600 px-6 py-4">
        <div
          className={`text-xl font-bold text-slate-50 sm:text-4xl lg:text-2xl xl:text-4xl`}
        >
          Quiz App
        </div>
        <nav className={'hidden space-x-8 lg:flex'}>
          {routes.map((route) => (
            <Link
              className={'rounded bg-orange-700 px-6 py-2 text-slate-100'}
              href={route.path}
              key={route.path}
            >
              {route.title}
            </Link>
          ))}
        </nav>
        <Bars3Icon
          onClick={() => setOpen(!open)}
          className={'size-6 stroke-indigo-50 lg:hidden'}
        />
      </div>
    </header>
  );
};

export default Header;
