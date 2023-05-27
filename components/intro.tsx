import React, { useEffect, useRef } from 'react';

export interface IntroProps {
  hidden: boolean;
  isPlaying: boolean;
}

export default function Intro({ hidden, isPlaying }: IntroProps) {
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (isPlaying == true) {
      audioRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div hidden={hidden}>
      <p>Playing intro</p>
      <audio src='audio/intro.mp3' ref={audioRef} />
    </div>
  );
}
