import React from 'react';
import { ShowSchedule } from '../../src/components';
import { render, screen } from '@testing-library/react';

const SCHEDULE = {
  title: 'Show Title',
  startDate: new Date(),
  endDate: new Date(),
}

describe('Show Schedule', (): void => {
  test('should show event schedule all the time', (): void => {
    render(<ShowSchedule endDate={SCHEDULE.endDate} startDate={SCHEDULE.startDate} title={SCHEDULE.title} />);
    expect(screen.getByText(SCHEDULE.title)).toBeDefined();
  });
});