import React from 'react';
import { ChannelLogo } from '../../src/components';
import { render, screen } from '@testing-library/react';

const LOGO = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
const CHANNEL_NUMBER = 3;

describe('ChannelLogo', (): void => {
  test('should show channel number all the time', (): void => {
    render(<ChannelLogo channnelNumber={CHANNEL_NUMBER} logo={LOGO} />);
    expect(screen.getByText(CHANNEL_NUMBER)).toBeDefined();
  });
});