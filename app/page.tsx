import React from 'react';
import Image from 'next/image';

import Menu from '@/components/menu';
import Main from '@/components/main';

// Lazy preload
import leftArrowImage from '../public/images/white/arrow-left.svg';
import rightArrowImage from '../public/images/white/arrow-right.svg';
import menuImage from '../public/images/white/menu.svg';
import sunImage from '../public/images/white/sun.svg';
import moonImage from '../public/images/black/moon.svg';
import githubImage from '../public/images/white/github-logo.svg';
import headphonesImage from '../public/images/white/headphones.svg';
import nextImage from '../public/images/white/next.svg';
import previousImage from '../public/images/white/previous.svg';
import playImage from '../public/images/white/play.svg';
import pauseImage from '../public/images/white/pause.svg';
import stopImage from '../public/images/white/stop.svg';

export default function Home() {
  return (
    <main className='flex flex-col w-screen sm:h-screen bg-[#1d1d1f] h-full min-h-screen'>
      <section className='flex justify-end sm:p-4'>
        <Menu />
      </section>

      <section className='flex flex-1 p-1'>
        <Main />
        <div>
          <Image src={leftArrowImage} alt='' hidden />
          <Image src={rightArrowImage} alt='' hidden />
          <Image src={menuImage} alt='' hidden />
          <Image src={sunImage} alt='' hidden />
          <Image src={moonImage} alt='' hidden />
          <Image src={githubImage} alt='' hidden />
          <Image src={headphonesImage} alt='' hidden />
          <Image src={nextImage} alt='' hidden />
          <Image src={previousImage} alt='' hidden />
          <Image src={playImage} alt='' hidden />
          <Image src={pauseImage} alt='' hidden />
          <Image src={stopImage} alt='' hidden />
        </div>
      </section>
    </main>
  );
}
