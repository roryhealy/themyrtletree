import React from 'react';

import Menu from '@/components/menu';
import Main from '@/components/main';

export default function Home() {
  return (
    <main className='flex flex-col w-screen sm:h-screen bg-black h-full min-h-screen'>
      <section className='flex justify-end sm:p-4'>
        <Menu />
      </section>

      <section className='flex flex-1 p-1'>
        <Main />
      </section>
    </main>
  );
}
