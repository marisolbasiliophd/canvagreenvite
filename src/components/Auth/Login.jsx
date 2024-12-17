import React from 'react';
import { CANVA_CONFIG } from '../../config/canvaConfig';

function Login() {
  const handleLogin = () => {
    // Debug logs
    console.log('Config being used:', {
      clientId: CANVA_CONFIG.clientId,
      redirectUri: CANVA_CONFIG.redirectUri,
      scope: CANVA_CONFIG.scope
    });

    const authUrl = `https://www.canva.com/oauth/authorize?` +
      `client_id=${CANVA_CONFIG.clientId}&` +
      `redirect_uri=${CANVA_CONFIG.redirectUri}&` +
      `response_type=code&` +
      `scope=${CANVA_CONFIG.scope}`;

    console.log('Auth URL:', authUrl);
    window.location.href = authUrl;
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Connect with Canva</button>
    </div>
  );
}

export default Login;