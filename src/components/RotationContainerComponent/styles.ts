import styled from 'styled-components';
import { shade } from 'polished';

export const RotationContainer = styled.div`
background: #fff;
padding: 0 10px;
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

export const Card = styled.div`
  padding: 10px 20px 20px 20px;
  width: 100%;
  min-height: 150px;
  height: 150px;
  margin: 15px;
  border: 2px solid #000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  p + p {
    margin-bottom: 0;
  }

  .rotation-card-div-upper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 20px;
      margin: 0;
    }
  }

  .rotation-card-div-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;

    .bottom-div-1, .bottom-div-3 {
      display: flex;
      flex-direction: column;
      p {
        margin: 0;
      }
    }

    .bottom-div-2 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;


export const RotationCards = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 0.5px solid #ccc;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${shade(0.1, '#ccc')};
  }
`;

export const CustomButton = styled.button`
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 10px;
  border: 1px solid #9aa7db;
  background: linear-gradient(to bottom, #9aa7db, #70008c);
  box-shadow: 0 0px 7px 0px #70008c;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${shade(0.2, '#9aa7db')};
  }
`;
