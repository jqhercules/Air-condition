import styled from 'styled-components';

export default styled.header`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 2.4rem;

  .Summary {

    &__title {
      font-size: 4rem;
      font-weight: 500;
      margin: 0 0 2.4rem;

      @media ${({theme}) => theme.mediaQueries.below768} {
        font-size: 2.5rem;
      }
    }

    &__desc {
      font-size: 1.6rem;
      font-weight: 300;
      margin: 0 0 10px;
      line-height: 1.4;
    }

  }
`;