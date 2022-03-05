import { idle, scheduled, turnaround } from '../utils/status';
import { dayLength, turnaroundTime } from '../utils/time';
import {FlightProps} from './getPosition';

const getPercent = (time: number) => Number((time * 100 / dayLength).toFixed(2))

const calculateTimeline = (items: FlightProps[]) => {
    if (items.length === 0) {
        return [[idle, 100]]
    }
    return Array.isArray(items) && items.reduce((acc: any, current: any, currentIndex: any, itemsArray: any) => {
      const isLastElement = (currentIndex === itemsArray.length - 1)
      const { departuretime, arrivaltime } = current;
      const scheduledValue = [ scheduled, getPercent(arrivaltime - departuretime) ]
      const idleBefore = (currentIndex === 0 ? getPercent(departuretime) : false)
      const idleAfter = (isLastElement
          ? getPercent(dayLength - arrivaltime)
          : getPercent(itemsArray[currentIndex + 1].departuretime - arrivaltime - turnaroundTime))
      return [...acc,
          ...(idleBefore ? [[idle, idleBefore ]] : []),
          scheduledValue,
          ...(isLastElement ? [] : [[turnaround, getPercent(turnaroundTime)]]),
          ...(idleAfter ? [[idle, idleAfter ]] : [])]
    }, []);
}

export default calculateTimeline;
