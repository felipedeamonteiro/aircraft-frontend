import React from 'react';
import { scheduled } from '../../utils/status';
import calculateTimeline from '../../utils/calculateTimeline';
import { Slider, Item, TimelineWrapper, TotalPercentage } from './styles';
import TimelineHourList from '../TimelineHourList';
import {FlightAndTimeProps} from '../../utils/getPosition';

interface TimelineProps {
  flights: FlightAndTimeProps[];
  setTotalScheduled: (total: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({
  flights,
  setTotalScheduled,
}) => {
  const timeline = calculateTimeline(flights)
  const totalScheduledCalculated = Array.isArray(timeline) ? timeline.reduce((acc: number, current: [string, number]) => {
      const [status, percent] = current
      const value = (status === scheduled ? percent : 0)
      return acc + value
  }, 0) : 0;
  const totalScheduled = `${totalScheduledCalculated.toFixed(2)}%`;

  setTotalScheduled(totalScheduled);

  return (
    <TimelineWrapper>
        <TimelineHourList />
        <Slider>
            {timeline && timeline.map((elem: [any, any], index: number) => {
                const [status, percent] = elem;
                return <Item key={index} status={status} width={percent}>{percent}%</Item>
            })}
        </Slider>
        Total scheduled: <TotalPercentage>{totalScheduledCalculated.toFixed(2)}%</TotalPercentage>
    </TimelineWrapper>
  );
}

export default Timeline;
