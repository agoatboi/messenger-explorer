import React from 'react';
import moment from 'moment';
import { StyledTimestamp } from './styled';

// const moment = require('moment');

type objectOptions = {
  [key: string]: string;
};

export const TimestampTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type TimestampProps = {
  useTheme: string;
  timestamp: number;
  dateFormat: 'full' | 'time';
};

function Timestamp({ useTheme, timestamp, dateFormat }: TimestampProps) {
  const momentFormat = dateFormat === 'full' ? 'Do MMM YYYY - HH:mm' : 'HH:mm';
  return (
    <StyledTimestamp useTheme={useTheme}>{moment(timestamp).format(momentFormat)}</StyledTimestamp>
  );
}

Timestamp.defaultProps = {
  children: '',
  useTheme: TimestampTheme.DEFAULT,
};

export default Timestamp;
