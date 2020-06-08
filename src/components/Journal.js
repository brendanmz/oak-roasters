import React from 'react';
import forestImage from '../images/forest-image.jpg';
import numbersImage from '../images/numbers.jpg';
import yellowCoffeeImage from '../images/yellow-coffee-cup.jpg';
import { Link, Wrapper, Button, SectionHeading, Image } from '../styles/components';
import styled from 'styled-components';
import theme from '../styles/theme';

const CardsWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${theme.breakpoints.mobile}) {  
    flex-direction: row;
  }
`

const CardDiv = styled.div`
  margin: 0 2rem;
  @media (min-width: ${theme.breakpoints.mobile}) {  
    width: 33%;
  }
`
const JournalHeading = styled.h3`
  padding-bottom: 0.5rem;
`

const JournalP = styled.p`
  padding-bottom: 1rem;

`

function Journal() {
  const posts = {
    one: {
      title: "What're we up to?",
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
    <Wrapper lighter >
      <SectionHeading >Journal</SectionHeading>
      <CardsWrapper >
        <Card title={posts.one.title} image={posts.one.image} />
        <Card title={posts.two.title} image={posts.two.image} />
        <Card title={posts.three.title} image={posts.three.image} />
      </CardsWrapper>
      <Button type='button'>See more</Button>
    </Wrapper>

  );
}

function Card(props) {
  return (
    <CardDiv style={{ maxWidth: 500 }}>
      <div >
        <Image card src={props.image} alt='Blog post' />
      </div>
      <Link href='/' >
        <JournalHeading >{props.title}</JournalHeading>
        <JournalP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</JournalP>
      </Link>
    </CardDiv>
  )
}

export default Journal;
