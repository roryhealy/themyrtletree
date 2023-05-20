import React from 'react';
import Image from 'next/image';

export interface HeadphonesProps {
  toShow: boolean;
}

export default function Headphones({ toShow }: HeadphonesProps) {
  return (
    <div
      className={`flex flex-col items-center transition-all duration-[2500ms] ${toShow ? 'opacity-100' : 'opacity-0'}`}
    >
      <Image src='images/white/headphones.svg' alt='Headphones image' width={100} height={100} />
      <p>Headphones recommended</p>
    </div>
  );
}
