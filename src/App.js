import { Button } from 'react-bootstrap';
import './App.css';
import SignupDetails from './components/signup';
import { Switch,Route } from 'react-router-dom';
import LoginDetails from './components/login';

function App() {
  return (
    <div className="App">
      
     
      <Switch>
        <Route exact path="/login">
             <LoginDetails /> 
          </Route>
      <Route exact path="/sigup">
     <SignupDetails />
     </Route>
     </Switch>
    </div>
  );
};

export default App;
