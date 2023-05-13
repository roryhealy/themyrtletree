import React from 'react';
import Menu from '@/components/menu';

export default function Header() {
  return (
    <header className='fixed top-0 w-screen h-24 pr-8 flex flex-row-reverse'>
      <Menu />
    </header>
  );
}
