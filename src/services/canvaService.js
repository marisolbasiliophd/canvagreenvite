import { CANVA_CONFIG } from '../config/canvaConfig';

class CanvaService {
  constructor() {
    this.config = CANVA_CONFIG;
  }

  getAuthUrl() {
    return `https://www.canva.com/oauth/authorize?` +
      `client_id=${this.config.clientId}&` +
      `redirect_uri=${this.config.redirectUri}&` +
      `response_type=code&` +
      `scope=${this.config.scope}`;
  }
}

export const canvaService = new CanvaService();