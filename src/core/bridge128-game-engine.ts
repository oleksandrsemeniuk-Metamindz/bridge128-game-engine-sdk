import { AuthService } from '~src/services/auth.service';
import { RoomsService } from '~src/services/rooms.service';
import { CreateRoomPayload } from '~src/types/create-room-payload';
import { GameEngineClientOptions } from '~src/types/game-engine-client-options';

export class Bridge128GameEngine {
  private readonly authService = new AuthService();
  private readonly roomsService = new RoomsService();

  constructor({ clientName, secretKey }: GameEngineClientOptions) {
    this.authService.authenticate(clientName, secretKey);
  }

  async createRoom(payload: CreateRoomPayload) {
    return this.roomsService.createRoom(payload);
  }
}
