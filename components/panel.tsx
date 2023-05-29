import React, { useState } from 'react';
import Image from 'next/image';

import leftArrowImage from '../public/images/white/arrow-left.svg';
import rightArrowImage from '../public/images/white/arrow-right.svg';

export interface PanelProps {
  hidden: boolean;
}

export default function Panel({ hidden }: PanelProps) {
  const [index, setIndex] = useState(0);
  const [leftArrowVisible, setLeftArrowVisible] = useState(false);
  const [rightArrowVisible, setRightArrowVisible] = useState(true);
  const maxPanels = 6;

  const getInner = () => {
    if (index == 0) {
      return (
        <>
          <h1 className='text-3xl'>Overview</h1>
          <br />
          <p>
            <em>The Myrtle Tree</em> is a narrative game about a young Australian woman reconnecting with the sounds in
            her life through her memories. The character you play is a young musician named Clara. She has experienced a
            significant loss of hearing, which has greatly impacted her life. Waiting for her cochlear implants, she
            relives some of her memories and the sounds that she can still remember, and forms new memories once she has
            partially restored her hearing.
          </p>
          <br />
          <p>
            <em>The Myrtle Tree</em> focuses on listening to sounds in different contexts, and noticing intricate
            details within those soundscapes to piece together the world around them. The player is taken through a
            series of environments, including real-world and abstract environments, and are tasked with observing the
            world around them through sound only. The primary goal is to relive memories and create new ones, using
            sound as the mode of exploration, as well as learning to cherish their ability to hear and experience the
            world around them.
          </p>
        </>
      );
    } else if (index == 1) {
      return (
        <>
          <h1 className='text-3xl'>Objectives</h1>
          <br />
          <p>
            The objective of the game is to progress through each stage by completing the quests in each area. These
            stages can be completed in any order, and are mostly optional, though the player is encouraged to explore
            all the stages. The quests in each stage are simple and easy, and range from identifying small details
            hidden in a soundscape, to building your own soundscapes. The objective is for players to gain insight into
            the character’s memories and to rebuild the environments in these memories through sound only. For some of
            these stages, the world is created around them as they pick up on all the sounds.
          </p>
          <br />
          <p>
            Once the bionic ears have been made available, the player unlocks new scenarios to explore. The focus of
            these stages is to demonstrate the unique benefits and challenges of bionic ears, such as needing to replace
            batteries in an important situation, or being unable to hear people due to distortion or malfunctioning
            hardware. The loss of hearing is devastating, and the player is challenged with trying to explore and
            participate in the world whilst only being able to hear a fraction of it.
          </p>
        </>
      );
    } else if (index == 2) {
      return (
        <>
          <h1 className='text-3xl'>How the game is played</h1>
          <br />
          <p>
            Using current technology, a VR headset and high-quality headphones would be recommended in order to produce
            the best user experience. These would not be required, but the ideal experience would fully engage the
            senses of the player. If more advanced technology were developed and used instead, a full haptic suit would
            completely immerse the player, similar to the V-Suit described in Cixin Liu’s{' '}
            <em>The Three-Body Problem</em>, or the OASIS from <em>Ready Player One</em>. Whilst the technology{' '}
            <a href='https://www.digitaltrends.com/gaming/ces-2021-haptic-feedback-vest-vr-virtual-reality-bhaptics/'>
              does exist
            </a>{' '}
            today, it is only in its infancy, and isn&apos;t able to fully cover the body. Being able to fully isolate
            the player from the outside world would greatly enhance the degree to which the player is able to tune
            themselves into the soundscapes and environments.
          </p>
          <br />
          <p>
            Additional senses could also be explored through full-body immersion, such as smell. Odour-evoked memories
            have been studied extensively, and these odours can be used to{' '}
            <a href='https://www.tandfonline.com/doi/abs/10.1080/09658211.2013.876048'>evoke nostalgia</a>, and{' '}
            <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5039451/'>
              and improve psychological and physiological health
            </a>
            . A possible extension to this game using that advanced technology could be to explore the how the
            character’s memories are linked to smells, as well as allowing the player to explore their own memories in
            the game through smell and sound.
          </p>
        </>
      );
    } else if (index == 3) {
      return (
        <>
          <h1 className='text-3xl'>Visual and audial styles</h1>
          <br />
          <p>
            The style of the game will vary depending on the stages selected. When focusing on complex soundscapes to
            pick out particular sounds, the display would initially be barren and empty – a white room similar to what
            is seen in <em>The Unfinished Swan</em>. Generally, a low poly art style would be used throughout the game
            in order to shift the focus away from the graphics and towards the audio, though some areas would require a
            bit more detail.
          </p>
          <br />
          <p>
            A few different level types would be explored. Some are as above, a blank canvas that fills in as the player
            picks up on new sounds. During the levels that involve memories that are a bit hazy, visual distortions
            should accompany the audial distortions. Objects should appear out of proportion, discoloured, or misplaced.
            Some levels would focus on music that Clara has played. During these levels, rather than creating the world
            around the player, the player is taken through a journey of abstract shapes and objects, following the music
            as Clara would see it in her mind. These would require little to no interaction from the player, just
            observation.
          </p>
          <br />
          <p>
            During the second half of the game, when the player has the bionic ears, the level selection area becomes
            much more immersive. Sounds play as players hover over the stages when selecting a new stage to explore when
            they previously didn’t, and soft ambient music begins to play in the background. This transforms the space
            into almost a meditative area, where players are free to sit and be still as they become absorbed into the
            ambiance.
          </p>
          <br />
          <p>
            Finally, after completing any stage, a new entry in the ‘Memories’ book is written, with the character’s
            thoughts and reflections of those memories written as journal entries.
          </p>
        </>
      );
    } else if (index == 4) {
      return (
        <>
          <h1 className='text-3xl'>
            Why is it called <em>The Myrtle Tree</em>?
          </h1>
          <br />
          <p>
            Lemon myrtle trees (<em>Backhousia citriodora</em>) are native to Queensland, but do grow in Victoria. The
            flowers of these trees are beautiful, and a house near a school I went to grew them. I always loved the
            smell when I walked home from school, and I have fond memories of picking some and giving them to my mother.
            Whilst the smell is what I remember most, I also loved the rich colour of the leaves.
          </p>
          <br />
          <p>
            Reflecting on memories is at the very core of this game, but I wanted to use sound to explore these memories
            due to how sound is sometimes lost in memories. Reconnecting with our memories through sound is important as
            we often remember what things looked like or smelled like. It also provides a more flexible and immersive
            experience than focusing on sight alone, but sight is used to guide and aid the player throughout the game.
          </p>
        </>
      );
    } else if (index == 5) {
      return (
        <div className='ml-2 sm:m-0'>
          <h1 className='text-3xl'>References</h1>
          <br />
          <h3 className='text-xl'>Articles</h3>
          <ul className='list-disc sm:list-inside'>
            <li className='break-words'>
              Reid, C. A., Green, J., Wildschut, T., & Sedikides, C. (2015). Scent-evoked nostalgia. <em>Memory, 23</em>
              (2), 157–166.{' '}
              <a href='https://doi.org/10.1080/09658211.2013.876048' className='underline text-sky-300'>
                https://doi.org/10.1080/09658211.2013.876048
              </a>
            </li>
            <li className='break-words'>
              Herz, R. S. (2016). The Role of Odor-Evoked Memory in Psychological and Physiological Health.{' '}
              <em>Brain Sciences, 6</em>(3), 22.{' '}
              <a href='https://doi.org/10.3390/brainsci6030022' className='underline text-sky-300'>
                https://doi.org/10.3390/brainsci6030022
              </a>
            </li>
          </ul>
          <br />
          <h3 className='text-xl'>Music</h3>
          <ul className='list-disc sm:list-inside'>
            <li className='break-words'>
              Red Means Recording. (2018, April 2). <em>ROLI - Across the Equator</em> [Video]. YouTube.{' '}
              <a href='https://www.youtube.com/watch?v=lx3QfNQhAkQ' className='underline text-sky-300'>
                https://www.youtube.com/watch?v=lx3QfNQhAkQ
              </a>
            </li>
            <li className='break-words'>
              <a href='https://www.tiktok.com/@lumatone/video/7222680257843760390' className='underline text-sky-300'>
                https://www.tiktok.com/@lumatone/video/7222680257843760390
              </a>
            </li>
          </ul>
        </div>
      );
    }
    return null;
  };

  const previousPanel = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (index == 1) {
      setLeftArrowVisible(false);
    }
    setIndex((previous) => previous - 1);
    if (!rightArrowVisible) setRightArrowVisible(true);
  };

  const nextPanel = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (index == maxPanels - 2) {
      setRightArrowVisible(false);
    }
    setIndex((previous) => previous + 1);
    if (!leftArrowVisible) setLeftArrowVisible(true);
  };

  const buttonStyle =
    'sm:border-0 border border-neutral-700 rounded-lg sm:w-fit w-auto sm:px-20 py-1 active:bg-neutral-600 hover:bg-dark3 transition-colors ease-in duration-100 grid justify-items-center';

  return (
    <div hidden={hidden} className='h-full w-full'>
      <div className='flex flex-col items-center justify-between h-full w-full'>
        <div className='mb-4 w-full'>
          <div>{getInner()}</div>
        </div>

        <div className='grid grid-cols-2 gap-x-10 w-full sm:w-auto'>
          {leftArrowVisible ? (
            <button className={buttonStyle} onClick={previousPanel}>
              <Image src={leftArrowImage} alt='Previous slide' />
            </button>
          ) : (
            <div className='px-20 py-1'></div>
          )}

          {rightArrowVisible ? (
            <button className={buttonStyle} onClick={nextPanel}>
              <Image src={rightArrowImage} alt='Next slide' />
            </button>
          ) : (
            <div className='px-20 py-1'></div>
          )}
        </div>
      </div>
    </div>
  );
}
