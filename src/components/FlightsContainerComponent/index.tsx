import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { FlightAndTimeProps } from '../../utils/getPosition';
import { FlightsContainer, CardsContainer, Card, CustomButton } from './styles';

interface FlightsContainerProps {
  addToRotation: () => void;
  flights: FlightAndTimeProps[];
}

const FlightsContainerComponent: React.FC<FlightsContainerProps> = ({
  flights,
  addToRotation
}) => {
  return (
    <FlightsContainer>
      <CardsContainer>
        {Array.isArray(flights) && flights.map((flight: FlightAndTimeProps, index: number) => {
          return (
            <Card key={index}>
              <div className='flights-card-div-upper'>
                <p>{flight.id}</p>
                <CustomButton
                  type="button"
                  title="Add this flight to the rotation"
                  onClick={addToRotation}
                >
                  <HiOutlinePlus size={20} color="#fff" />
                </CustomButton>
              </div>
              <hr />
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
  );
}

export default FlightsContainerComponent;
