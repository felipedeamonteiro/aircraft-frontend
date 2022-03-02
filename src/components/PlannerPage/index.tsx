import React, { useRef, useEffect, useState } from 'react';
import {
  Container,
  DateContainer,
  TitleContainer,
  DashboardContainer,
  AircraftsContainer,
  RotationContainer,
  FlightsContainer,
  CardsContainer,
  Card,
  RotationCards,
  Timeline
} from './styles';
import { ImArrowRight } from 'react-icons/im';
import Barchart from '../Barchart';
import {useWindowSize} from '../../hooks/useDeviceScreenSize';

const PlannerPage: React.FC = () => {
  const targetRef = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const windowSize = useWindowSize();

  useEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, [windowSize]);

  // dimensions state will be used to set the barchart width

  return (
    <Container>
      <DateContainer>
        <h3>{"< 4th January 2018 >"}</h3>
      </DateContainer>
      <TitleContainer>
        <h4 className='aircraft-h4'>Aircrafts</h4>
        <h4 className='rotation-h4'>Rotation ABCDE</h4>
        <h4 className='flights-h4'>Flights</h4>
      </TitleContainer>
      <DashboardContainer>
        <AircraftsContainer>
          <CardsContainer>
            <Card>
              <div className='aircraft-card-div'>
                <p>ABCDE</p>
                <p>{'(58 %)'}</p>
              </div>
            </Card>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardsContainer>
        </AircraftsContainer>
        <RotationContainer>
          <RotationCards>
            <Card>
              <div className='rotation-card-div-upper'>
                <p>Flight: AS1001</p>
              </div>
              <div className='rotation-card-div-bottom'>
                <div className='bottom-div-1'>
                  <p>LDN</p>
                  <p>14:45</p>
                </div>
                <div className='bottom-div-2'>
                  <h2><ImArrowRight size={45} /></h2>
                </div>
                <div className='bottom-div-3'>
                  <p>CDG</p>
                  <p>16:00</p>
                </div>
              </div>
            </Card>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </RotationCards>
          <Timeline ref={targetRef}>
            <Barchart />
          </Timeline>
        </RotationContainer>
        <FlightsContainer>
          <CardsContainer>
            <Card>
              <div className='flights-card-div-upper'>
                <p>AS1000</p>
              </div>
              <div className='flights-card-div-bottom'>
                <div className='flights-bottom-div-1'>
                  <p>LDN</p>
                  <p>8:43</p>
                </div>
                <div className='flights-bottom-div-2'>
                  <p>CDG</p>
                  <p>9:45</p>
                </div>
              </div>
            </Card>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardsContainer>
        </FlightsContainer>
      </DashboardContainer>
    </Container>
  );
};

export default PlannerPage;
