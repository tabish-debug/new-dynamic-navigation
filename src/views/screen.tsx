import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../css/style.css';
import loginService from '../services/login.service';
import { notifyError } from '../components/toast';
import ScreenA from './screenA';
import ScreenB1 from './screenB1';
import ScreenB2 from './screenB2';
import ScreenB3 from './screenB3';
import ScreenC1 from './screenC1';
import ScreenC2 from './screenC2';
import ScreenD from './screenD';

function Screen() {
  const location = useLocation();

  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    async function login() {
      const res = await loginService.rLogin();

      if (res.status === 200) {
        setSessionId(res.data.sessionId);
        return;
      }

      notifyError('login failed');
    }
    location?.pathname !== '/screenA' && login();
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/screenA" replace />} />
        <Route path="/screenA" element={<ScreenA sessionId={sessionId} />} />
        <Route path="/screenB1" element={<ScreenB1 />} />
        <Route path="/screenB2" element={<ScreenB2 />} />
        <Route path="/screenB3" element={<ScreenB3 />} />
        <Route path="/screenC1" element={<ScreenC1 sessionId={sessionId} />} />
        <Route path="/screenC2" element={<ScreenC2 sessionId={sessionId} />} />
        <Route path="/screenD" element={<ScreenD />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default Screen;
