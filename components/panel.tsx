import React from 'react';

export interface PanelProps {
  toShow: boolean;
}

export default function Panel({ toShow }: PanelProps) {
  const text =
    'The Myrtle Tree is a narrative game about a young Australian woman reconnecting with the sounds in her life through her memories. The character you play is a young musician named Clara. She has experienced a significant loss of hearing, which has greatly impacted her life. Waiting for her cochlear implants, she relives some of her memories and the sounds that she can still remember, and forms new memories once she has partially restored her hearing.';
  return (
    <section>
      <p>{text}</p>
    </section>
  );
}
