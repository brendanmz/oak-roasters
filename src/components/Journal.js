import React from 'react';
import forestImage from '../images/forest-image.jpg';
import numbersImage from '../images/numbers.jpg';
import yellowCoffeeImage from '../images/yellow-coffee-cup.jpg';
import { Link } from '../styles/components';



function Journal() {
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
  return (
    <div >
      <h2 >Journal</h2>
      <div >
        <Card title={posts.one.title} image={posts.one.image} />
        <Card title={posts.two.title} image={posts.two.image} />
        <Card title={posts.three.title} image={posts.three.image} />
      </div>
      <button type='button'>See more</button>
    </div>

  );
}



function Card(props) {
  return (
    <Link href='/' >
      <img src={props.image} alt='Blog post' style={{ maxWidth: 350 }} />
      <h3 >{props.title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
    </Link>
  )
}

export default Journal;
