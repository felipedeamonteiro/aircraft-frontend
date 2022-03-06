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
  const [flights, setFlights] = useState<FlightAndTimeProps[]>([]);
  const [aircrafts, setAircrafts] = useState<AircraftsProps[]>([]);
  const [rotations, setRotations] = useState<FlightAndTimeProps[]>([]);

  useEffect(() => {
    api.get('/flights').then(response => setFlights(response.data.data)).catch(err => console.log(err));
    api.get('/aircrafts').then(response => setAircrafts(response.data.data)).catch(err => console.log(err));
  }, []);

  const getMyDate = () => {
    const today = new Date();
    return today.toDateString();
  }

  const removeFromRotation = () => {
    console.log('removeFromRotation');
  }

  const addToRotation = () => {
    console.log('addToRotation');
  }

  console.log('Planner Page flights', flights);

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
        <AircraftsContainerComponent aircrafts={aircrafts} />
        <RotationContainerComponent rotations={rotations} removeFromRotation={removeFromRotation} />
        <FlightsContainerComponent flights={flights} addToRotation={addToRotation} />

      </DashboardContainer>
    </Container>
  );
};

export default PlannerPage;
