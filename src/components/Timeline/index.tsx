import React from 'react';
import { scheduled } from '../../utils/status';
import calculateTimeline from '../../utils/calculateTimeline';
import { Slider, Item, TimelineWrapper, TotalPercentage } from './styles';
import TimelineHourList from '../TimelineHourList';
import {FlightAndTimeProps} from '../../utils/getPosition';

const Timeline = ({ flights }:{ flights: FlightAndTimeProps[] }) => {
  console.log('Timeline flights', flights);
  const timeline = calculateTimeline(flights)
  const totalScheduled = Array.isArray(timeline) ? timeline.reduce((acc: number, current: [string, number]) => {
      const [status, percent] = current
      const value = (status === scheduled ? percent : 0)
      return acc + value
  }, 0) : 0;
  console.log('timeline', timeline);

  return (
    <TimelineWrapper>
        <TimelineHourList />
        <Slider>
            {timeline && timeline.map((elem: [any, any], index: number) => {
                const [status, percent] = elem;
                return <Item key={index} status={status} width={percent}>{percent}%</Item>
            })}
        </Slider>
        Total scheduled: <TotalPercentage>{totalScheduled.toFixed(2)}%</TotalPercentage>
    </TimelineWrapper>
  );
}

export default Timeline;
