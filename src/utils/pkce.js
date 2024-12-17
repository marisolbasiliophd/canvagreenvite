function generateCodes() {
  // Create a random buffer for code verifier
  const buffer = new Uint8Array(96);
  crypto.getRandomValues(buffer);

  // Convert to base64url
  const codeVerifier = btoa(String.fromCharCode(...buffer))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  // Generate code challenge using SHA-256
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);

  return crypto.subtle.digest('SHA-256', data)
    .then(hash => {
      const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(hash)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');

      // Generate state
      const stateBuffer = new Uint8Array(96);
      crypto.getRandomValues(stateBuffer);
      const state = btoa(String.fromCharCode(...stateBuffer))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');

      return { codeVerifier, codeChallenge, state };
    });
}

export { generateCodes };