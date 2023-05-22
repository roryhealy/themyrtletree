import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import nextImage from '../public/images/white/next.svg';
import previousImage from '../public/images/white/previous.svg';
import playImage from '../public/images/white/play.svg';
import pauseImage from '../public/images/white/pause.svg';
import stopImage from '../public/images/white/stop.svg';

export interface AudioPlayerProps {
  hidden: boolean;
}

export default function AudioPlayer({ hidden }: AudioPlayerProps) {
  const tracks = ['roli', 'lumatome'];
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const togglePlaying = () => {
    setIsPlaying((previous) => !previous);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const previousTrack = () => {
    togglePlaying();
    if (trackIndex == 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex((previous) => previous - 1);
    }
  };

  const nextTrack = () => {
    togglePlaying();
    if (trackIndex == tracks.length - 1) {
      setTrackIndex(0);
    } else {
      setTrackIndex((previous) => previous + 1);
    }
  };

  // When isPlaying changes, either pause or play the music.
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const promise = audioRef.current.play();
        // If autoplay is blocked, don't play any music on page load.
        promise.then().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  // Play the track when the track is changed
  useEffect(() => {
    setIsPlaying(true);
  }, [trackIndex]);

  const buttonStyle =
    'border-0 rounded-lg active:bg-neutral-700 hover:bg-neutral-900 transition-colors ease-in duration-100';

  return (
    <div className='grid grid-rows-2 justify-items-center items-baseline gap-y-5 my-2 sm:mb-0' hidden={hidden}>
      <div className='grid grid-cols-4 gap-x-5'>
        <button className={buttonStyle} onClick={previousTrack}>
          <Image src={previousImage} alt='Previous song' />
        </button>

        <button className={buttonStyle} onClick={togglePlaying}>
          <Image src={isPlaying ? pauseImage : playImage} alt={isPlaying ? 'Pause music' : 'Play music'} />
        </button>

        <button className={buttonStyle} onClick={stopPlaying}>
          <Image src={stopImage} alt='Stop audio' />
        </button>

        <button className={buttonStyle} onClick={nextTrack}>
          <Image src={nextImage} alt='Next song' />
        </button>
      </div>

      <div>
        <p>Now playing: {tracks[trackIndex]}</p>
        <audio src={`audio/${tracks[trackIndex]}.weba`} ref={audioRef} loop />
      </div>
    </div>
  );
}
