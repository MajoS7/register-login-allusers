import './App.css';

import { Register } from './Components/Pages/Register/Register';
import { Login } from './Components/Pages/Login/Login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Register" element={<Register />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
