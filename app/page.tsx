import React from 'react';

import Menu from '@/components/menu';
import Main from '@/components/main';

export default function Home() {
  return (
    <main className='flex flex-col w-screen h-screen bg-black'>
      <section className='flex justify-end p-4'>
        <Menu />
      </section>

      <section className='flex flex-1 p-1'>
        <Main />
      </section>
    </main>
  );
}
