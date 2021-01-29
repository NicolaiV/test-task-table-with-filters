import 'react-nice-dates/build/style.css';
import styled from 'styled-components';
import NameFilter from './NameFilter';
import DatesFilter from './DatesFilter';

const FilterBlock = styled.div`
  display: flex,
  direction: row
`;

const Filters = () => {
  return (
    <FilterBlock>
      <p>Filter:</p>
      <NameFilter />
      {/*<DatesFilter />*/}
    </FilterBlock>
  );
};

export default Filters;
