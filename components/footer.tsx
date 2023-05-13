import React from 'react';
import Menu from '@/components/menu';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 w-screen h-24 py-2 flex justify-around'>
      <p>The Myrtle Tree - A pitch for a game about sound and reliving memories.</p>
      <p className='text-right'>By Rory Healy.</p>
    </footer>
  );
}
