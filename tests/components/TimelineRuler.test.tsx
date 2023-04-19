import React from 'react';
import { format, startOfHour, subDays } from 'date-fns';
import { TimelineRuler } from '../../src/components';
import { render, screen } from '@testing-library/react';

const TIMELINE = {
  startDate: subDays(new Date(), 1),
  endDate: new Date(),
}

const START_DATE_IN_HOURS = format(startOfHour(TIMELINE.startDate), 'HH:mm')

describe('Timeline Ruler', (): void => {
  test('should show TimeLine Ruler all the time', (): void => {
    render(<TimelineRuler endDate={TIMELINE.endDate} startDate={TIMELINE.startDate} />);
    expect(screen.getAllByText(START_DATE_IN_HOURS)).toBeDefined();
  });
});