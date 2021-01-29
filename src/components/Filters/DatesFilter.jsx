import {
  DateRangePicker,
  START_DATE,
  END_DATE,
} from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import { enGB } from 'date-fns/locale';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setStartDate, setEndDate } from '../../actions/filter';

const Box = styled.div`
  margin-left: 16px;
`;

const DatesFilter = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => (
  <Box>
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumLength={1}
      format="dd MMM yyyy"
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className="date-range">
          <input
            className={
              'input' + (focus === START_DATE ? ' -focused' : '')
            }
            {...startDateInputProps}
            placeholder="Start date"
          />
          <span className="date-range_arrow" />
          <input
            className={
              'input' + (focus === END_DATE ? ' -focused' : '')
            }
            {...endDateInputProps}
            placeholder="End date"
          />
        </div>
      )}
    </DateRangePicker>
  </Box>
);

const mapState = (state) => ({
  startDate: state?.filter?.startDate,
  endDate: state?.filter?.endDate,
});

const mapDispatch = {
  setStartDate,
  setEndDate,
};

export default connect(mapState, mapDispatch)(DatesFilter);
