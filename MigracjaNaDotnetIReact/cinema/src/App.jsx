import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import OrderSummary from './pages/OrderSummary';
import FinalPage from './pages/FinalPage';
import Repertoire from './pages/Repertoire';
import ScreeningDetails from './pages/ScreeningDetails';
import UserTickets from './pages/UserTickets';

const App = () => {
  return (
      <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Repertoire />}/>
          <Route path="/ScreeningDetails/:id" element={<ScreeningDetails />} />
          <Route path="/Summary" element={<OrderSummary/>} />
          <Route path="/Final" element={<FinalPage/>}/>
          <Route path="/UserTickets" element={<UserTickets/>}/>
        </Routes>
      </UserProvider>
      </>
  );
}

export default App;
