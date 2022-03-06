import React from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { ImArrowRight } from 'react-icons/im';
import { FlightAndTimeProps } from '../../utils/getPosition';
import Timeline from '../Timeline';
import { RotationContainer, RotationCards, Card, CustomButton  } from './styles';

interface RotationContainerProps {
  removeFromRotation: (flight: FlightAndTimeProps) => void;
  rotations: FlightAndTimeProps[];
  setTotalScheduled: (total: string) => void;
}

const RotationContainerComponent: React.FC<RotationContainerProps> = ({
  removeFromRotation,
  rotations,
  setTotalScheduled,
}) => {
  console.log('****rotations', rotations);
  return (
    <RotationContainer>
      <RotationCards>
        {Array.isArray(rotations) && rotations.map((rotation: FlightAndTimeProps, index: number) => {
          return (
            <Card key={index}>
              <div className='rotation-card-div-upper'>
                <p>{`Flight: ${rotation.id}`}</p>
                <CustomButton
                  type="button"
                  title="Remove this flight to the rotation"
                  onClick={() => removeFromRotation(rotation)}
                >
                  <HiOutlineMinus size={20} color="#fff" />
                </CustomButton>
              </div>
              <hr />
              <div className='rotation-card-div-bottom'>
                <div className='bottom-div-1'>
                  <p>{rotation.origin}</p>
                  <p>{rotation.readable_departure}</p>
                </div>
                <div className='bottom-div-2'>
                  <h2><ImArrowRight size={45} /></h2>
                </div>
                <div className='bottom-div-3'>
                  <p>{rotation.destination}</p>
                  <p>{rotation.readable_arrival}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </RotationCards>
      <Timeline
        flights={rotations}
        setTotalScheduled={setTotalScheduled}
      />
    </RotationContainer>
  );
}

export default RotationContainerComponent;
