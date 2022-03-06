import React from 'react';
import { AircraftsContainer, CardsContainer, Card } from './styles';

interface AircraftsProps {
  ident: string,
  type: string,
  economySeats: number,
  base: string
}

interface AircraftsContainerProps {
  aircrafts: AircraftsProps[];
}

const AircraftsContainerComponent: React.FC<AircraftsContainerProps> = ({
  aircrafts,
}) => {
  return (
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
  );
}

export default AircraftsContainerComponent;
