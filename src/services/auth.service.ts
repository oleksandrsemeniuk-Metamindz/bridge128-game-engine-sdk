import jwt from 'jsonwebtoken';

import { AccessTokenPayload } from '~src/types/access-token-payload';
import { AxiosManager } from '~src/utils/axios-manager';

export class AuthService {
  authenticate(clientName: string, secretKey: string) {
    const accessToken = this.createAccessToken(clientName, secretKey);
    AxiosManager.setAccessToken(accessToken);
  }

  private createAccessToken(platform: string, secret: string) {
    const payload: AccessTokenPayload = { platform };
    return jwt.sign(payload, secret);
  }
}
