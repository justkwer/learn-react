import React, { Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Forms from './pages/Forms/Forms';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="forms" element={<Forms />} />
            <Route path="404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="404" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
