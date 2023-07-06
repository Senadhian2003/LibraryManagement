import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Cart from './components/cart';
import Login from './components/login';
import Signup from './components/signup';


function App() {
  return (
    <Router>
      <div className="App">
        
      </div>
      <Routes>

        <Route path='/login' Component={Login} />
        <Route path='/view/:id' Component={Signup} />


        <Route path='/' Component={Home} />
        <Route path='/cart' Component={Cart} />

      </Routes>

    </Router>
  );
}

export default App;
