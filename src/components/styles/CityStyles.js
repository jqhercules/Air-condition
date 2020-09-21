import styled from 'styled-components';

export default styled.section`

  .City-search {

    &__searchwrapper {
      width: 300px;
      margin: 0 auto;
      position: relative;

      .icon {
        width: 17px;
        height: 17px;
        background-image: url('../../assets/img/ico-magnifier.svg');
        background-size: cover;
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(0%, -50%);
        left: 8px;
        opacity: 0.3;
      }

      @media ${({theme}) => theme.mediaQueries.below768} {
        width: calc(100% - 40px);
      }
    }

    /* Search result */
    &__searchbox {
      border: 1px solid rgb(204 204 204);
      display: block;
      height: 40px;
      padding: 0 12px 0 30px;
      border-radius: 5px;
      width: 100%;
      z-index: 10;
      font-size: 1.4rem;
    }

    &__suggestions {
      margin: -5px 0 0;
      padding: 0;
      padding-top: 3px;
      background: rgb(255 255 255);
      border-radius: 5px;
      border: 1px solid rgb(204 204 204);
      border-top: 0;
      overflow: hidden;
      max-height: 190px;
      overflow-y: auto;
      position: absolute;
      width: 300px;
      z-index: 9;
      @media ${({theme}) => theme.mediaQueries.below768} {
        width:100%;
      }
    }

    &__suggest {
      padding: 12px;
      color: rgb(17 17 17);
      font-size: 1.2rem;
      transition: background 0.25s ease-in;
      cursor: pointer;

      &:hover {
        background: rgba(0, 0, 0, 0.08)
      }
    }

    /* Card */
    &__cities {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin: 6rem 0;

      @media ${({theme}) => theme.mediaQueries.below768} {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__city {
      background: #fff;
      border-radius: 5px;
      position: relative;
      padding: 25px;
    }

    &__lastupdated {
      color: rgb(17 17 17);
      font-style: normal;
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 5px;
      display: block;
      text-transform: uppercase;
    }

    &__town {
      color: rgb(100 66 148);
      font-size: 1.6rem;
      margin: 0 0 10px;
    }

    &__country {
      color: rgb(17 17 17);
      font-size: 1.2rem;
      margin: 0 0 8px;
    }

    &__info {
      color: rgb(17 17 17);
      font-weight: 500;
      font-size: 1.2rem;

      span {
        text-transform: uppercase;
      }
    }

    &__close {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 12px;
      cursor: pointer;

      &:hover img {
        opacity: 1;
      }

      img {
        transition: opacity 0.25s ease-in-out;
        opacity: 0.6;
        width: 12px;
      }
    }

    &__error {
      text-align: center;
      margin: 6.4rem 0;
      font-weight: 600;
      font-size: 3rem;
      color: rgb(255 255 255);
      text-transform: uppercase;
    }
  }
`;