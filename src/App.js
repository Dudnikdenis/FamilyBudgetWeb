import './App.css';
import {
  BrowserRouter, Routes,
  Route,
} from 'react-router-dom'

import CreditContainer from './component/TableCredit/creditContainer';
import ExpensesContainer from './component/Expenses/expensesContainer';
import Main from './component/Main/Main';
import CreditReduxForm from './component/TableCredit/creditForm'

function App() {
  return (

    <Main/>
    // <div className="App">
    //   <BrowserRouter>
    //                 <Routes>
    //                     <Route path='/' element = {<Main/>  }/>
    //                     <Route path='/credit' element = {<CreditContainer/>  }/>
    //                     <Route path='/expenses' element = {<ExpensesContainer/>  }/> 
    //                     <Route path="/add/credit" element = {<CreditReduxForm /> }/>                         
    //                 </Routes>
    //         </BrowserRouter>
    // </div>
  );
}

export default App;
