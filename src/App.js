import { Route, Routes } from 'react-router-dom';
import './App.css';
import Delivered from './pages/Delivered/Delivered';
import Home from './pages/Home/Home';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import Header from './pages/sharePages/Header/Header';
import Update from './pages/Update/Update';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/inventory/:inventoryId' element={<Update></Update>}></Route>
        <Route path='/delivered' element={<Delivered></Delivered>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
      </Routes>

    </div>
  );
}

export default App;
