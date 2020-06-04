import React from 'react';
import coffeeBag from '../images/patch-roast-bag-transparent.png';

function Coffee() {
  return (
    <div className=''>
      <h2 className=''>Our Coffee</h2>
      <img className='' src={coffeeBag} alt='Our coffee' style={{ height: 450 }} />
      <p className=''>We roast our beans with love and care from some of the most experienced roasters in the industry.</p>
      <button className='' type='button'>Shop</button>
    </div>
  );
}

export default Coffee;
