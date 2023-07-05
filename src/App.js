import logo from './logo.svg';
import './App.css';
import store from './Redux/Redux-store';

import CreditContainer from './component/TableCredit/creditContainer';

function App() {
  return (
    <div className="App">
      <CreditContainer/>
    </div>
  );
}

export default App;
