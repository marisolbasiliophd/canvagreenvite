export const CANVA_CONFIG = {
  clientId: import.meta.env.VITE_CANVA_CLIENT_ID,
  clientSecret: import.meta.env.VITE_CANVA_CLIENT_SECRET,
  redirectUri: import.meta.env.VITE_CANVA_REDIRECT_URI || 'https://greenvite-m6ljv678n4uobgk8.builder-preview.com/callback',
  scope: 'design:content:read design:meta:read design:content:write design:permission:read design:permission:write folder:permission:read folder:permission:write brandtemplate:content:read'
};