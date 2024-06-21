import { AxiosError } from 'axios';

import { ErrorResponse } from '~src/types/error-response';
import { stringifyIfNeeded } from '~src/utils/helpers';

export class GameEngineRoomCreationException extends Error {
  constructor(message: string) {
    super(`Failed to create a game room: ${message}`);
  }
}

export const toAxiosError = (error: any) => error as AxiosError<ErrorResponse>;

export const extractErrorMessage = (error: AxiosError<ErrorResponse>) => {
  const responseMessage = error.response?.data?.message;
  return responseMessage ? stringifyIfNeeded(responseMessage) : error.message;
};
