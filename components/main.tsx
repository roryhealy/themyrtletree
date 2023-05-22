'use client';

import React, { useState } from 'react';

import AudioPlayer from '@/components/audioplayer';
import Panel from '@/components/panel';
import BeginButton from '@/components/beginbutton';
import Headphones from '@/components/headphones';

export default function Main() {
  // is___opaque is for controlling the opacity
  // is___hidden is for controlling the hidden flag
  const [isStartButtonOpaque, setStartButtonOpaque] = useState(true);
  const [isStartButtonHidden, setStartButtonHidden] = useState(false);

  const [isHeadphonesOpaque, setHeadphonesOpaque] = useState(false);
  const [isHeadphonesHidden, setHeadphonesHidden] = useState(true);

  const [isPanelsOpaque, setPanelsOpaque] = useState(false);
  const [isPanelsHidden, setPanelsHidden] = useState(true);

  const [isControlsOpaque, setControlsOpaque] = useState(false);
  const [isControlsHidden, setControlsHidden] = useState(true);

  const [isFooterOpaque, setFooterOpaque] = useState(true);

  const begin = () => {
    // Fade out the start button and footer
    setStartButtonOpaque(false);
    setFooterOpaque(false);

    setTimeout(() => {
      // Hide the start button, fade in the headphones
      setStartButtonHidden(true);
      setHeadphonesHidden(false);
      setHeadphonesOpaque(true);
    }, 2500);

    setTimeout(() => {
      // Fade out the headphones
      setHeadphonesOpaque(false);
    }, 5000);

    setTimeout(() => {
      // Hide the headphones, fade in the panels and controls in
      setHeadphonesHidden(true);
      setPanelsHidden(false);
      setPanelsOpaque(true);
      setControlsHidden(false);
      setControlsOpaque(true);
    }, 7500);
  };

  return (
    <div className='flex flex-col items-center w-full h-full'>
      <section className='flex flex-1 flex-col sm:flex-row justify-center items-center sm:w-3/5 w-[90%]'>
        <div hidden={isStartButtonHidden}>
          <div
            className={`sm:hidden transition-opacity duration-2500 mb-20 ${
              isStartButtonOpaque ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className='text-3xl text-center'>The Myrtle Tree</h2>
            <br />
            <p className='text-center'>A pitch for a game about reliving memories through sound.</p>
          </div>
        </div>

        <div className={`transition-opacity duration-2500 ${isStartButtonOpaque ? 'opacity-100' : 'opacity-0'}`}>
          <BeginButton onclick={begin} hidden={isStartButtonHidden} />
        </div>

        <div
          className={`fixed w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-opacity duration-2500 ${
            isHeadphonesOpaque ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Headphones hidden={isHeadphonesHidden} />
        </div>

        <div
          className={`sm:w-fit w-full h-full transition-all duration-2500 ${
            isPanelsOpaque ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Panel hidden={isPanelsHidden} />
        </div>
      </section>

      {isControlsOpaque ? (
        <footer
          className={`sticky bottom-0 bg-black w-screen flex justify-center sm:h-24 transition-opacity duration-2500 ${
            isPanelsOpaque ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <AudioPlayer hidden={isControlsHidden} />
        </footer>
      ) : (
        <footer
          className={`sm:flex fixed bottom-0 justify-around items-center h-24 w-full transition-opacity duration-2500 ${
            isFooterOpaque ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className='sm:opacity-100 opacity-0'>
            The Myrtle Tree - A pitch for a game about sound and reliving memories.
          </p>
          <p className='text-center'>By Rory Healy.</p>
        </footer>
      )}
    </div>
  );
}
