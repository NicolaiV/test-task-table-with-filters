import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import GeneralSummary from './components/GeneralSummary';
import Filters from './components/Filters';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div>
      <header>test-task-table-with-filters</header>
      <GeneralSummary />
      <Filters />
      <EmployeeTable />
    </div>
  );
}

export default App;
