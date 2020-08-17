import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

export const Title = styled.h1`
  margin: 20px 0;
  font-size: 26px;
`;

export const Form = styled.form`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  legend {
    font-size: 22px;
    margin: 10px 0;
  }

  label {
    margin: 20px 0 5px 0;
  }
`;
