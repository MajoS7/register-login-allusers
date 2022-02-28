import './App.css';

import { Register } from './Components/Pages/Register/Register';
import { Login } from './Components/Pages/Login/Login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AllUsers } from './Components/Pages/AllUsers/AllUsers';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Register" element={<Register />} />
        <Route path="/AllUsers" element={<AllUsers />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
