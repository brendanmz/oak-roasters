import React from 'react';
import coffeeBag from '../images/patch-roast-bag-transparent.png';
import { Wrapper, Button, SectionHeading, Image } from '../styles/components';



function Coffee() {
  return (
    <Wrapper padded className=''>
      <SectionHeading className=''>Our Coffee</SectionHeading>
      <Image className='' src={coffeeBag} alt='Our coffee' style={{ maxHeight: 400 }} />
      <p className=''>We roast our beans with love and care from some of the most experienced roasters in the industry.</p>
      <Button primary className='' type='button'>Shop</Button>
    </Wrapper>
  );
}

export default Coffee;
