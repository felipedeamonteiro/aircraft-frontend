import React, {useEffect, useState} from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { FlightAndTimeProps } from '../../utils/getPosition';
import { FlightsContainer, CardsContainer, Card, CustomButton, PaginationWrapper } from './styles';
import ReactPaginate from 'react-paginate';
import api from '../../services/api';

interface FlightsContainerProps {
  addToRotation: (flight: FlightAndTimeProps) => void;
  setFlights: (flights: FlightAndTimeProps[]) => void;
  flights: FlightAndTimeProps[];
}

const FlightsContainerComponent: React.FC<FlightsContainerProps> = ({
  addToRotation,
  setFlights,
  flights
}) => {
  const [offset, setOffset] = useState<number>(0);
  const limit: number = 20;
  const [pageCount, setPageCount] = useState<number>(0);

  const loadFlightsByPages = () => {
    api.get(`/flights?offset=${offset}&limit=${limit}`)
    .then(response => {
      setFlights(response.data.data);
      setPageCount(Math.ceil(response.data.pagination.total / limit));
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    loadFlightsByPages();
  }, [offset]);

  const handlePageClick = (event: any) => {
    let selected = event.selected;
    console.log('selected', selected);
    let offset = Math.ceil(selected * limit);
    setOffset(offset);
};


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
                  onClick={() => addToRotation(flight)}
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
      <PaginationWrapper>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </PaginationWrapper>
    </FlightsContainer>
  );
}

export default FlightsContainerComponent;
