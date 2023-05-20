'use client';

import React from 'react';

import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

enum Mode {
  Light,
  Dark
}

interface DisplayMode {
  current: Mode;
  text: string;
  icon: string;
}

const darkDisplayMode: DisplayMode = {
  current: Mode.Dark,
  text: 'Switch to light mode',
  icon: 'images/white/sun.svg'
};

const lightDisplayMode: DisplayMode = {
  current: Mode.Light,
  text: 'Switch to dark mode',
  icon: 'images/black/moon.svg'
};

export default function Menu() {
  const [displayMode, setDisplayMode] = useState(darkDisplayMode);

  const modeSwitch = () => {
    if (displayMode.current === Mode.Dark) {
      setDisplayMode(lightDisplayMode);
    } else if (displayMode.current === Mode.Light) {
      setDisplayMode(darkDisplayMode);
    } else {
      // Might not be necessary
      throw new TypeError('Invalid displayMode set.');
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Image
          src='images/white/menu.svg'
          alt='Menu'
          width={40}
          height={40}
          className='opacity-25 hover:opacity-75 ease-linear transition-opacity'
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='p-1 mr-4 bg-neutral-950 w-60 -mt-6'>
          <DropdownMenu.Item
            className='flex outline-none justify-between px-2 py-1 bg-neutral-900 cursor-pointer hover:bg-neutral-800'
            onClick={modeSwitch}
          >
            <p className='text-lg text-white'>{displayMode.text}</p>
            <Image src={displayMode.icon} height={20} width={20} alt='Sun' />
          </DropdownMenu.Item>

          <DropdownMenu.Item className='outline-none px-2 py-1 bg-neutral-900 cursor-pointer hover:bg-neutral-800'>
            <a href='https://github.com/roryhealy/themyrtletree' className='flex justify-between'>
              <p className='text-lg text-white'>View source on GitHub</p>
              <Image src='images/white/github-logo.svg' height={20} width={20} alt='GitHub logo' />
            </a>
          </DropdownMenu.Item>

          <DropdownMenu.Item className='flex outline-none justify-between px-2 py-1 mt-2 bg-neutral-900 cursor-default hover:bg-neutral-800'>
            <p className='text-lg text-white'>Made by Rory Healy</p>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
