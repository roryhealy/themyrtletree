'use client';

import React from 'react';
import Image from 'next/image';
import DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

function Menu() {
  const darkMode = useState(true);
  const menuItems = ['Source code on GitHub', 'Made by Rory Healy'];
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Image
          src="images/menu.svg"
          alt="Menu"
          width={40}
          height={40}
          className="opacity-25 hover:opacity-75 ease-linear transition-opacity"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white w-64">
          {menuItems.map((text, i) => (
            <DropdownMenu.Item className="text-black" key={i}>
              {text}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default function Header() {
  return (
    <header className="flex flex-row-reverse mr-4 mt-2">
      <Menu />
      {/* <Image
        src='images/menu.svg'
        alt='Menu'
        width={40}
        height={40}
        className="opacity-25 hover:opacity-75 ease-linear transition-opacity"
      /> */}
    </header>
  );
}
