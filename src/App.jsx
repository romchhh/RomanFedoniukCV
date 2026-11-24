import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App min-h-screen overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pm" element={<Resume role="pm" />} />
          <Route path="/fullstack" element={<Resume role="fullstack" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
