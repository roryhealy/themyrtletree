'use client';

import React, { useState } from 'react';

import Footer from '@/components/footer';
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
    <>
      <section className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <div hidden={!showStartButton}>
          <BeginButton onclick={begin} toShow={showStartButton} />
        </div>

        <div hidden={!showHeadphones}>
          <Headphones toShow={showHeadphones} />
        </div>

        <div hidden={!showPanels}>
          <Panel toShow={showPanels} />
        </div>
      </section>

      <div>
        <Footer showControls={showControls} />
      </div>
    </>
  );
}
