import { CreateRoomPayload } from '~src/types/create-room-payload';
import { CreatedRoomInfo } from '~src/types/created-room-info';
import { AxiosManager } from '~src/utils/axios-manager';
import {
  extractErrorMessage,
  GameEngineRoomCreationException,
  toAxiosError,
} from '~src/utils/exceptions';

export class RoomsService {
  private readonly axios = AxiosManager.getInstance();

  async createRoom(payload: CreateRoomPayload) {
    try {
      const { data } = await this.axios.post<CreatedRoomInfo>(
        '/rooms',
        payload,
      );
      return data;
    } catch (e) {
      throw new GameEngineRoomCreationException(
        extractErrorMessage(toAxiosError(e)),
      );
    }
  }
}
