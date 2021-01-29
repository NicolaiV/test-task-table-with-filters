import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import GeneralSummary from './components/GeneralSummary';
import Filters from './components/Filters';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div>
      <header>
        <h1>Employee table</h1>
      </header>
      {/*<GeneralSummary />*/}
      <Filters />
      <EmployeeTable />
    </div>
  );
}

export default App;
