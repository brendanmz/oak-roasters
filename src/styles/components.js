import styled from 'styled-components';
import theme from './theme';


export const Link = styled.a`
  text-decoration: none;
  color: ${theme.colors.text};

  &:hover {
    opacity: 70%;
  }
  .Footer &:hover {
    text-decoration: underline;
  }

  .MenuBar>& {
    padding: 0.75rem 2rem;
  }
`
export const ListItem = styled.li`
  list-style: none;
`
export const Wrapper = styled.div`
  /* margin-bottom: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.lighter ? theme.colors.lightBackground : theme.colors.background};
  
  & * {
    padding-bottom: ${props => props.padded ? '1rem' : 0}
  }
`
export const Button = styled.button`
  padding: 0.5rem 1rem;
  min-width: 6rem;
  margin: 1rem 0;
  font-size: 0.9rem;
  border-radius:2rem;
  border: none;
  background: ${props => props.primary ? 'white' : theme.colors.yellow};
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${theme.colors.background};
    background-color: ${theme.colors.text};
    cursor: pointer;
  }
`

export const SectionHeading = styled.h2`
  padding-bottom: 1rem;
  padding-top: 1rem;
`
export const Image = styled.img`
  max-width: 100%;
  padding-bottom: ${props => props.card ? '0.5rem' : '1.5rem'};
`
