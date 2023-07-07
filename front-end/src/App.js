import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Cart from './components/cart';
import Login from './components/login';
import Signup from './components/signup';
import Password from './components/Password';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import preloder from './components/preloder';

function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer position='top-center' />
      </div>
      <Routes>

        <Route index path='/' Component={Login} />
        <Route path='/signup' Component={Signup} />
        <Route path='/password' Component={Password} />


        <Route path='/home/:id' Component={Home} />
        <Route path='/cart/:id' Component={Cart} />
        <Route path='/loader' Component={preloder}/>

      </Routes>

    </Router>
  );
}

export default App;
