import React from 'react';

import Header from '@/components/header';
import Main from '@/components/main';

export default function Home() {
  return (
    <main className='bg-black w-screen h-screen'>
      <Header />
      <Main />
    </main>
  );
}
