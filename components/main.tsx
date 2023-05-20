'use client';

import React, { useState } from 'react';

import AudioPlayer from '@/components/audioplayer';
import Panel from '@/components/panel';
import BeginButton from '@/components/beginbutton';
import Headphones from '@/components/headphones';

export default function Main() {
  const [showStartButton, setShowStartButton] = useState(true);
  const [showHeadphones, setShowHeadphones] = useState(false);
  const [showPanels, setShowPanels] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const begin = () => {
    setShowStartButton(false);
    setTimeout(() => {
      setShowHeadphones(true);
    }, 2500);
    setTimeout(() => {
      setShowHeadphones(false);
      setShowPanels(true);
      setShowControls(true);
    }, 5000);
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <section className='flex flex-1 justify-center items-center w-3/5'>
        <BeginButton onclick={begin} hidden={!showStartButton} />
        <Headphones hidden={!showHeadphones} />
        <div className='h-full'>
          <Panel hidden={!showPanels} />
        </div>
      </section>

      {showControls ? (
        <footer className='flex justify-center h-24'>
          <AudioPlayer />
        </footer>
      ) : (
        <footer className='flex justify-around items-center h-24 w-full'>
          <p>The Myrtle Tree - A pitch for a game about sound and reliving memories.</p>
          <p>By Rory Healy.</p>
        </footer>
      )}
    </div>
  );
}
