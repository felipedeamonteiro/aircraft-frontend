import React, { useEffect, useState } from 'react';
import {
  Container,
  DateContainer,
  TitleContainer,
  DashboardContainer
} from './styles';

import { FlightAndTimeProps } from '../../utils/getPosition';
import api from '../../services/api';

import RotationContainerComponent from '../RotationContainerComponent';
import AircraftsContainerComponent from '../AircraftsContainerComponent';
import FlightsContainerComponent from '../FlightsContainerComponent';

interface AircraftsProps {
  ident: string,
  type: string,
  economySeats: number,
  base: string
}

const PlannerPage: React.FC = () => {
  const [aircrafts, setAircrafts] = useState<AircraftsProps[]>([]);
  const [flights, setFlights] = useState<FlightAndTimeProps[]>([]);
  const [rotations, setRotations] = useState<FlightAndTimeProps[]>([]);
  const [totalScheduled, setTotalScheduled] = useState<string>('0');

  useEffect(() => {
    api.get('/aircrafts')
    .then(response => setAircrafts(response.data.data))
    .catch(err => console.log(err));
  }, []);

  const getMyDate = () => {
    const today = new Date();
    return today.toDateString();
  }

  const removeFromRotation = (flight: FlightAndTimeProps) => {
    setRotations(rotations.filter(rotation => rotation.id !== flight.id));
    setFlights([...flights, flight]);
  }

  const addToRotation = (flight: FlightAndTimeProps) => {
    setFlights(flights.filter(f => f.id !== flight.id));
    setRotations([...rotations, flight]);
  }

  console.log('rotations', rotations);

  return (
    <Container>
      <DateContainer>
        <h3>{`Aircraft scheduling < ${getMyDate()} >`}</h3>
      </DateContainer>
      <TitleContainer>
        <h4 className='aircraft-h4'>Aircrafts</h4>
        <h4 className='rotation-h4'>Rotation ABCDE</h4>
        <h4 className='flights-h4'>Flights</h4>
      </TitleContainer>
      <DashboardContainer>
        <AircraftsContainerComponent totalScheduled={totalScheduled}  aircrafts={aircrafts} />
        <RotationContainerComponent
          setTotalScheduled={setTotalScheduled}
          rotations={rotations}
          removeFromRotation={removeFromRotation}
        />
        <FlightsContainerComponent addToRotation={addToRotation} setFlights={setFlights} flights={flights} />

      </DashboardContainer>
    </Container>
  );
};

export default PlannerPage;
