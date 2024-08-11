import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home'; // นำเข้า Home

const App: React.FC = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} /> {/* หน้าเริ่มต้น */}
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              {/* Optional: เส้นทางสำหรับกรณีเส้นทางไม่ตรง */}
              <Route path="*" element={<Login />} />
          </Routes>
      </Router>
  );
};

export default App;
