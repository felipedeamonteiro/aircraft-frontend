import React from 'react';
import calculateTimeline from '../../utils/calculateTimeline';
import { Slider, Item, TimelineWrapper, TotalPercentage } from './styles';
import TimelineHourList from '../TimelineHourList';
import {FlightProps} from '../../utils/getPosition';

const Timeline = ({ flights }:{ flights: FlightProps[] }) => {
  const idle = 'idle';
  const scheduled = 'scheduled';
  const turnaround = 'turnaround';

  const timeline = calculateTimeline(flights)
  const totalScheduled = Array.isArray(timeline) ? timeline.reduce((acc: number, current: [string, number]) => {
      const [status, percent] = current
      const value = (status === scheduled ? percent : 0)
      return acc + value
  }, 0) : 0;

  return (
    <TimelineWrapper>
        <TimelineHourList />
        <Slider>
            {timeline && timeline.map((elem: [any, any], index: React.Key | null | undefined) => {
                const [status, percent] = elem;
                return <Item key={index} status={status} width={percent}>{percent}%</Item>
            })}
        </Slider>
        Total scheduled: <TotalPercentage>{totalScheduled.toFixed(2)}%</TotalPercentage>
    </TimelineWrapper>
  );
}

export default Timeline;
