import React from 'react';

interface BeginButtonProps {
  onclick: () => void;
  toShow: boolean;
}

export default function BeginButton({ onclick, toShow }: BeginButtonProps) {
  return (
    <>
      <div className={`transition-all duration-[2500ms] ${toShow ? 'opacity-100' : 'opacity-0'}`}>
        <button
          className='text-white border rounded-lg p-4 bg-neutral-800 border-neutral-900 active:bg-neutral-600 hover:bg-neutral-700 transition-colors ease-in duration-100'
          onClick={onclick}
        >
          Click to begin
        </button>
      </div>
    </>
  );
}
