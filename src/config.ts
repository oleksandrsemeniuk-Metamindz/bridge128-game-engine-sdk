import { configDotenv } from 'dotenv';

configDotenv();

export const GAME_ENGINE_API_URL =
  process.env.BRIDGE128_GAME_ENGINE_API_URL ||
  'https://game-engine-backend-staging-ccf7883531bc.herokuapp.com/api';
