import styled from 'styled-components';
import { shade } from 'polished';

export const AircraftsContainer = styled.div`
  background: #fff;
  margin: 0;
  width: 25%;
  height: 745px;
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

  p + p {
    margin-bottom: 0;
  }

  .aircraft-card-div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
`;

