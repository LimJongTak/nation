import React from 'react';
import './assets/styles/global.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notices from './pages/Notices';
import Application from './pages/Application';
import Board from './pages/Board';
import Schedule from './pages/Schedule';
import Petition from './pages/Petition';
import Support from './pages/Support';
import Companies from './pages/Companies';
import Persona from './pages/Persona';
import NeedForMed from './pages/NeedForMed';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <div>
        <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/application" element={<Application />} />
      <Route path="/board" element={<Board />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/petition" element={<Petition />} />
      <Route path="/support" element={<Support />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/persona" element={<Persona />} />
      <Route path="/needformed" element={<NeedForMed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>
  </div>
    
  );
}

export default App;