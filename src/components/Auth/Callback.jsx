import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const code = searchParams.get('code');
        const returnedState = searchParams.get('state');
        const originalState = sessionStorage.getItem('state');
        const codeVerifier = sessionStorage.getItem('code_verifier');

        // Verify state to prevent CSRF attacks
        if (returnedState !== originalState) {
          console.error('State mismatch');
          navigate('/');
          return;
        }

        console.log('Authorization successful');
        console.log('Code:', code);

        // Store the code for later use
        sessionStorage.setItem('canva_auth_code', code);

        // Clear the state and verifier
        sessionStorage.removeItem('state');
        sessionStorage.removeItem('code_verifier');

        // Navigate to success page or dashboard
        navigate('/');
      } catch (error) {
        console.error('Error handling callback:', error);
        navigate('/');
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return (
    <div>
      <h2>Processing your Canva authorization...</h2>
    </div>
  );
}

export default Callback;