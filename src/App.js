import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>


    </div>
  );
}

export default App;
