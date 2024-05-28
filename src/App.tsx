import { Routes, Route } from 'react-router-dom';
import { VehicleList } from './components/vehicleList';
import { VehicleForm } from './components/vehicleForm';
import './App.css';


function App() {


  return (
    <>
      <Routes>
        <Route path = '/' element = {<VehicleList />}/>
        <Route path = '/add-vehicle' element = {<VehicleForm />}/>
      </Routes>
    </>
  )
}

export default App
