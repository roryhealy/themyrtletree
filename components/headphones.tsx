import React from 'react';
import Image from 'next/image';

export default function Headphones() {
  return (
    <div>
      <Image
        src="images/headphones.svg"
        alt="Headphones image"
        width={100}
        height={100}
      />
      <p>Headphones recommended</p>
    </div>
  );
}
