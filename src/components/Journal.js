import React from 'react';
import '../App.css';
import forestImage from '../images/forest-image.jpg';
import numbersImage from '../images/numbers.jpg';
import yellowCoffeeImage from '../images/yellow-coffee-cup.jpg';


function Journal() {
  return (
    <div className="">
      <h2 className=''>Journal</h2>
      <div className=''>
        <Card title={posts.one.title} image={posts.one.image} />
        <Card title={posts.two.title} image={posts.two.image} />
        <Card title={posts.three.title} image={posts.three.image} />
      </div>
      <button className='' type='button'>See more</button>
    </div>

  );
}

const posts = {
  one: {
    title: "What're we up to",
    image: forestImage,
  },
  two: {
    title: "Weekly Summary",
    image: numbersImage,
  },
  three: {
    title: "New roast available!",
    image: yellowCoffeeImage,
  },
}

function Card(props) {
  return (
    // eslint-disable-next-line
    <a href='#' className=''>
      <img src={props.image} alt='Blog post' className='' />
      <h3 className=' '>{props.title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
    </a>
  )
}

export default Journal;
