import React, { useEffect, useState } from 'react';
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
  RotationCards
} from './styles';
import { ImArrowRight } from 'react-icons/im';
import Timeline from '../Timeline';
import { FlightAndTimeProps } from '../../utils/getPosition';
import api from '../../services/api';

interface AircraftsProps {
  ident: string,
  type: string,
  economySeats: number,
  base: string
}


const PlannerPage: React.FC = () => {
  const [flights, setFlights] = useState<FlightAndTimeProps[]>([]);
  const [aircrafts, setAircrafts] = useState<AircraftsProps[]>([]);

  useEffect(() => {
    api.get('/flights').then(response => setFlights(response.data.data)).catch(err => console.log(err));
    api.get('/aircrafts').then(response => setAircrafts(response.data.data)).catch(err => console.log(err));
  }, []);

  function getDate() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    return tomorrow.toDateString();
}

  console.log('Planner Page flights', flights);

  return (
    <Container>
      <DateContainer>
        <h3>{`Aircraft scheduling < ${getDate()} >`}</h3>
      </DateContainer>
      <TitleContainer>
        <h4 className='aircraft-h4'>Aircrafts</h4>
        <h4 className='rotation-h4'>Rotation ABCDE</h4>
        <h4 className='flights-h4'>Flights</h4>
      </TitleContainer>
      <DashboardContainer>
        <AircraftsContainer>
          <CardsContainer>
            {Array.isArray(aircrafts) && aircrafts.map((aircraft: AircraftsProps, index: number) => {
              return <Card key={index}>
                <div className='aircraft-card-div'>
                  <p>{aircraft.ident}</p>
                  <p>{'(58 %)'}</p>
                </div>
              </Card>
            })}
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
          <Timeline flights={flights} />
        </RotationContainer>
        <FlightsContainer>
          <CardsContainer>
              {Array.isArray(flights) && flights.map((flight: FlightAndTimeProps, index: number) => {
                return (
                  <Card key={index}>
                    <div className='flights-card-div-upper'>
                      <p>{flight.id}</p>
                    </div>
                    <div className='flights-card-div-bottom'>
                      <div className='flights-bottom-div-1'>
                        <p>{flight.origin}</p>
                        <p>{flight.readable_departure}</p>
                      </div>
                      <div className='flights-bottom-div-2'>
                        <p>{flight.destination}</p>
                        <p>{flight.readable_arrival}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
          </CardsContainer>
        </FlightsContainer>
      </DashboardContainer>
    </Container>
  );
};

export default PlannerPage;
