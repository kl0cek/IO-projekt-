import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Repertoire from './pages/Repertoire';
import ScreeningDetails from './pages/ScreeningDetails';

const App = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Repertoire />}/>
          <Route path="/ScreeningDetails/:id" element={<ScreeningDetails />} />
        </Routes>
      </>
  );
}

export default App;
