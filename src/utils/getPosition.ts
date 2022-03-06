import { dayLength, turnaroundTime } from '../utils/time';

export interface FlightAndTimeProps {
  id: string,
  departuretime: number,
  arrivaltime: number,
  readable_departure: string,
  readable_arrival: string,
  origin: string,
  destination: string
}

const canTurnAround = (start: number, end: number) => end - start >= turnaroundTime

const canPrepend = (flight: FlightAndTimeProps, time: FlightAndTimeProps) => flight.origin === time.destination
    && canTurnAround(time.arrivaltime, flight.departuretime)

const canAppend = (flight: FlightAndTimeProps, time: FlightAndTimeProps) => flight.destination === time.origin
    && canTurnAround(flight.arrivaltime, time.departuretime)
    && time.arrivaltime < dayLength

const getPosition = (flights:FlightAndTimeProps[], time: FlightAndTimeProps) => {
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
