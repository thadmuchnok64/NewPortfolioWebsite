//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact/>
      </Switch>
    </Router>
    <div className='App'>
      <h1>Spaghetti</h1>
    </div>
    </>
  );
}

export default App;
