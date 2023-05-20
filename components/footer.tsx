import React from 'react';
import Image from 'next/image';
import AudioPlayer from '@/components/audioplayer';

import leftArrowImage from '../public/images/white/arrow-left.svg';
import rightArrowImage from '../public/images/white/arrow-right.svg';

export interface FooterProps {
  showControls: boolean;
}

export default function Footer({ showControls }: FooterProps) {
  const buttonStyle =
    'border-0 rounded-lg px-20 py-1 active:bg-neutral-700 hover:bg-neutral-900 transition-colors ease-in duration-100';
  if (!showControls) {
    return (
      <footer className='fixed bottom-0 w-screen py-5 grid grid-rows-2 justify-items-center'>
        <div className='grid grid-cols-2 gap-x-20 w-1/2 justify-items-center'>
          <button className={buttonStyle}>
            <Image src={leftArrowImage} alt='Previous slide' />
          </button>

          <button className={buttonStyle}>
            <Image src={rightArrowImage} alt='Previous slide' />
          </button>
        </div>

        <AudioPlayer />
      </footer>
    );
  }

  return (
    <footer className='fixed bottom-0 w-screen h-24 py-2 flex justify-around'>
      <p>The Myrtle Tree - A pitch for a game about sound and reliving memories.</p>
      <p className='text-right'>By Rory Healy.</p>
    </footer>
  );
}
