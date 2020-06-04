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

