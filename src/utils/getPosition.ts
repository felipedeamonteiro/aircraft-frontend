import { dayLength, turnaroundTime } from '../utils/time';

export interface FlightProps {
  ident: string,
  departuretime: number,
  arrivaltime: number,
  readable_departure: string,
  readable_arrival: string,
  origin: string,
  destination: string
}

interface TimeProps {
  departuretime: number,
  arrivaltime: number,
  destination: string,
  origin: string
}

const canTurnAround = (start: number, end: number) => end - start >= turnaroundTime

const canPrepend = (flight: FlightProps, time: TimeProps) => flight.origin === time.destination
    && canTurnAround(time.arrivaltime, flight.departuretime)

const canAppend = (flight: FlightProps, time: TimeProps) => flight.destination === time.origin
    && canTurnAround(flight.arrivaltime, time.departuretime)
    && time.arrivaltime < dayLength

const getPosition = (flights:FlightProps[], time: TimeProps) => {
    if(!flights.length) {
        return null
    }
    if(canPrepend(flights[0], time)) {
        return 0;
    }
    if(canAppend(flights[flights.length - 1], time)) {
        return flights.length;
    }

    const canPrependIndex = flights.findIndex(flight => canPrepend(flight, time))
    if(canPrependIndex !== -1 && canAppend(flights[canPrependIndex-1], time)) {
        return canPrependIndex
    }

    return null
}

export default getPosition
