import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  h3 {
    margin-bottom: 5px;
  }

  span {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    h3 {
      margin-bottom: 2px;
    } 

    span {
      font-size: 13px;
    }
  }
`;