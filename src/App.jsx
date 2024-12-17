import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { generateCodes } from './utils/pkce';
import { CANVA_CONFIG } from './config/canvaConfig';
import Callback from './components/Auth/Callback';

function App() {
  const handleButtonClick = async () => {
    try {
      const { codeVerifier, codeChallenge, state } = await generateCodes();

      // Store these for later verification
      sessionStorage.setItem('code_verifier', codeVerifier);
      sessionStorage.setItem('state', state);

      const authUrl = `https://www.canva.com/api/oauth/authorize?` +
        `code_challenge=${encodeURIComponent(codeChallenge)}&` +
        `code_challenge_method=s256&` +
        `scope=${encodeURIComponent(CANVA_CONFIG.scope)}&` +
        `response_type=code&` +
        `client_id=${CANVA_CONFIG.clientId}&` +
        `state=${encodeURIComponent(state)}&` +
        `redirect_uri=${encodeURIComponent(CANVA_CONFIG.redirectUri)}`;

      console.log('Redirecting to:', authUrl);
      window.location.href = authUrl;
    } catch (error) {
      console.error('Error starting authorization:', error);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <h1>GreenVite App</h1>
        <button onClick={handleButtonClick}>Connect with Canva</button>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;