import React from 'react';
import Image from 'next/image';

import headphonesImage from '../public/images/white/headphones.svg';

export interface HeadphonesProps {
  hidden: boolean;
}

export default function Headphones({ hidden }: HeadphonesProps) {
  return (
    <div hidden={hidden}>
      <div
        className={`flex flex-col items-center transition-all duration-[2500ms] ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image src={headphonesImage} alt='Headphones image' />
        <p>Headphones recommended</p>
      </div>
    </div>
  );
}
