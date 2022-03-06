import styled from 'styled-components';
import { shade } from 'polished';

export const FlightsContainer = styled.div`
  background: #fff;
  width: 25%;
  height: 745px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const CardsContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 2.5px solid #ccc;
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

export const Card = styled.div`
  padding: 10px 20px 20px 20px;
  width: 100%;
  min-height: 150px;
  height: 150px;
  margin: 15px;
  border: 2px solid #000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

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

  .flights-card-div-upper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    p {
      margin: 0;
    }
  }

  .flights-card-div-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .flights-bottom-div-1, .flights-bottom-div-2 {
      display: flex;
      flex-direction: column;
      font-size: 20px;

      p {
        margin: 0;
      }
    }
  }

  .flights-card-div-upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CustomButton = styled.button`
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 10px;
  border: 1px solid #de0039;
  background: linear-gradient(to bottom, #de0039, #70008c);
  box-shadow: 0 0px 7px 0px #a6006a;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${shade(0.2, '#de0039')};
  }
`;
