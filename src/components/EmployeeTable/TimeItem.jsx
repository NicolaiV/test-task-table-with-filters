import moment from 'moment';

const TimeItem = ({ value }) => {
  const tempTime = moment.duration(value);
  const days = tempTime.asDays().toFixed(0);
  return `${
    days > 0 ? `${days}:` : ''
  }${tempTime.hours()}:${tempTime.minutes()}:${tempTime.seconds()}`;
};

export default TimeItem;
