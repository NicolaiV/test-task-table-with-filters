import 'bootstrap/dist/css/bootstrap.min.css';
import GeneralSummary from './components/GeneralSummary';
import Filters from './components/Filters';
import EmployeeTable from './components/EmployeeTable';
import styled from 'styled-components';

const Box = styled.div`
  margin: 10px;
`;

function App() {
  return (
    <Box>
      <header>
        <h1>Employee table</h1>
      </header>
      <GeneralSummary />
      <Filters />
      <EmployeeTable />
    </Box>
  );
}

export default App;
