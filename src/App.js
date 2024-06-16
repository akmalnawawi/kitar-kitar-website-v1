// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../src/pages/MainPage/MainPage';
import ReadingPage from '../src/pages/ReadingPage/ReadingPage';
import NavigationBar from '../src/components/NavigationBar';
import BusinessPage from './pages/BusinessPage/BusinessPage';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ReadingPage" element={<ReadingPage />} />
          <Route path="/BusinessPage" element={<BusinessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
