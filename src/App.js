import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Clients from './pages/Clients';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <div className="content">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/sales" exact={true} component={Sales}/>
          <Route path="/clients" exact={true} component={Clients}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
