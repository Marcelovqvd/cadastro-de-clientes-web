import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#f4ede8')};
      }
    }

    a {
      color: #ff9000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      display: flex;
      align-items: 16px;

      svg {
        margin-right: 16px;
      }
      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;

export const Background = styled.div`
  background-color: #312e38;
  height: 100vh;
  width: 100vw;
`;
