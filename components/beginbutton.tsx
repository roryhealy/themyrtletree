import React from 'react';

interface BeginButtonProps {
  onclick: () => void;
  hidden: boolean;
}

export default function BeginButton({ onclick, hidden }: BeginButtonProps) {
  return (
    <div className={`transition-all duration-[2500ms] ${hidden ? 'opacity-0' : 'opacity-100'}`} hidden={hidden}>
      <button
        className='text-white border rounded-lg p-4 bg-neutral-800 border-neutral-900 active:bg-neutral-600 hover:bg-neutral-700 transition-colors ease-in duration-100'
        onClick={onclick}
      >
        Click to begin
      </button>
    </div>
  );
}
