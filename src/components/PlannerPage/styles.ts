import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DateContainer = styled.div`
   margin: 30px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .aircraft-h4 {
    width: 25%;
    text-align: center;
  }
  .rotation-h4 {
    width: 40%;
    text-align: center
  }
  .flights-h4 {
    width: 25%;
    text-align: center
  }
`;

export const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const AircraftsContainer = styled.div`
  margin: 0;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const RotationContainer = styled.div`
  margin: 0;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlightsContainer = styled.div`
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const CardsContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 700px;
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

  .rotation-card-div-upper {
    p {
      font-size: 20px;
    }
  }

  .rotation-card-div-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;

    .bottom-div-1, .bottom-div-3 {
      display: flex;
      flex-direction: column;
    }

    .bottom-div-2 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .flights-card-div-upper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .flights-card-div-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .flights-bottom-div-1, .flights-bottom-div-2 {
      display: flex;
      flex-direction: column;
      font-size: 20px;
    }
  }
`;

export const RotationCards = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

export const Timeline = styled.div`
  display: flex;
`;
