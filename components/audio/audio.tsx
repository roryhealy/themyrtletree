'use client';

import React from 'react';
import styles from './audio.module.css';

type Display = 'text' | 'button';

export default function AudioButton({ file, text, type }: { file: string, text: string, type: Display }) {
  const audio: HTMLAudioElement = new Audio('/public/audio/1.ogg')
  if (audio === null) {
    console.log('uhoh')
  }
  const id = `audio-${new Date().getTime()}`

  function makeAudio() {
    if (type == 'text') {
      return (
        <div className={styles.all}>
          <div className={styles.text}>
            <a onClick={audio.play}>{text}</a>
            {/* <audio src={`/audio/${file}`} id={id} /> */}
          </div>
        </div>
      );
    } else if (type == 'button') {
      return (
        <div className={styles.all}>
          <button onClick={audio.play} className={styles.button}>{text}</button>
          {/* <audio src={`/audio/${file}`} id={id} /> */}
        </div>
      );
    }
  
    return null;
  }

  return makeAudio();
}