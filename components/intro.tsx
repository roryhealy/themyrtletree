'use client';

import React, { LegacyRef, useEffect, useRef } from 'react';

import Circle from '@/components/circle';

export interface IntroProps {
  hidden: boolean;
  isPlaying: boolean;
}

export default function Intro({ hidden, isPlaying }: IntroProps) {
  const audioRef: LegacyRef<HTMLAudioElement> = useRef(null);

  useEffect(() => {
    if (isPlaying == true) {
      audioRef.current?.play();
    }
  }, [isPlaying]);

  return (
    <div hidden={hidden}>
      <div className='w-full h-full'>
        <Circle color='bg-red-400' position={{ x: 0, y: 0 }} />
        <Circle color='bg-sky-400' position={{ x: 0, y: 0 }} />
      </div>
      <audio src='audio/intro.mp3' ref={audioRef} />
    </div>
  );
}
