import React from 'react';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { ImArrowRight } from 'react-icons/im';
import { FlightAndTimeProps } from '../../utils/getPosition';
import Timeline from '../Timeline';
import { RotationContainer, RotationCards, Card, CustomButton  } from './styles';

interface RotationContainerProps {
  removeFromRotation: () => void;
  rotations: FlightAndTimeProps[];
}

const RotationContainerComponent: React.FC<RotationContainerProps> = ({
  removeFromRotation,
  rotations,
}) => {
  return (
    <RotationContainer>
      <RotationCards>
        <Card>
          <div className='rotation-card-div-upper'>
            <p>Flight: AS1001</p>
            <CustomButton
              type="button"
              title="Add this flight to the rotation"
              onClick={removeFromRotation}
            >
              <HiOutlineMinus size={20} color="#fff" />
            </CustomButton>
          </div>
          <hr />
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
        {Array.isArray(rotations) && rotations.map((rotation: FlightAndTimeProps, index: number) => {
          <Card key={index}>
            <div className='rotation-card-div-upper'>
              <p>{`Flight: ${rotation.id}`}</p>
              <CustomButton
                type="button"
                title="Add this flight to the rotation"
                onClick={HiOutlineMinus}
              >
                <HiOutlinePlus size={20} color="#fff" />
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
        })}
      </RotationCards>
      <Timeline flights={rotations} />
    </RotationContainer>
  );
}

export default RotationContainerComponent;
