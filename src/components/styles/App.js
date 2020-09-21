import styled, { css } from 'styled-components';
// import { FadeIn } from '../theme/Animations'


export const GlobalStyles = styled.div`

  color: #fff;
  min-height: 100vh;
  margin: 0 auto;
  max-width: ${({width}) => width || '800px' };

  @media ${({theme}) => theme.mediaQueries.below768} {
    margin-left: 20px;
    margin-right: 20px;
  }

  /* background: ${({theme}) => theme.color.dark}; */
  /* ${({primary}) =>
    primary &&
    css`
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    `
  } */
`;
