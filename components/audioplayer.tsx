import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AudioPlayer() {
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

  // Play music when the page loads
  useEffect(() => {
    setIsPlaying(true);
  }, []);

  // Play the track when the track is changed
  useEffect(() => {
    setIsPlaying(true);
  }, [trackIndex]);

  const buttonStyle =
    'border-0 rounded-lg active:bg-neutral-700 hover:bg-neutral-900 transition-colors ease-in duration-100';

  return (
    <div className='grid grid-rows-2 justify-items-center gap-y-5'>
      <div className='grid grid-cols-4 gap-x-5'>
        <button className={buttonStyle} onClick={previousTrack}>
          <Image src='images/white/previous.svg' alt='Previous song' width={50} height={50} />
        </button>

        <button className={buttonStyle} onClick={togglePlaying}>
          <Image
            src={isPlaying ? 'images/white/pause.svg' : 'images/white/play.svg'}
            alt={isPlaying ? 'Pause music' : 'Play music'}
            width={50}
            height={50}
          />
        </button>

        <button className={buttonStyle} onClick={stopPlaying}>
          <Image src='images/white/stop.svg' alt='Stop audio' width={50} height={50} />
        </button>

        <button className={buttonStyle} onClick={nextTrack}>
          <Image src='images/white/next.svg' alt='Next song' width={50} height={50} />
        </button>
      </div>

      <div>
        <p>Now playing: {tracks[trackIndex]}</p>
        <audio src={`audio/${tracks[trackIndex]}.weba`} ref={audioRef} loop />
      </div>
    </div>
  );
}
