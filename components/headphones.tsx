import React from 'react';
import Image from 'next/image';

import headphonesImage from '../public/images/white/headphones.svg';

export interface HeadphonesProps {
  toShow: boolean;
}

export default function Headphones({ toShow }: HeadphonesProps) {
  return (
    <div
      className={`flex flex-col items-center transition-all duration-[2500ms] ${toShow ? 'opacity-100' : 'opacity-0'}`}
    >
      <Image src={headphonesImage} alt='Headphones image' />
      <p>Headphones recommended</p>
    </div>
  );
}
