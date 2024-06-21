import { RoomMode } from '~src/constants/room-mode.enum';
import { SeatShortName } from '~src/types/seats';
import { VulnerableSide } from '~src/types/vulnerability';

export interface CreateRoomProfileMetadataPayload {
  fullName?: string;
  rating?: number;
  streak?: number;
}

export interface CreateRoomMetadataPayload {
  profile?: CreateRoomProfileMetadataPayload;
}

export interface CreateRoomDealAuctionPayload {
  value: SeatShortName;
  bids: string[];
}

export interface CreateRoomDealPayload {
  name: string;
  board?: number;
  deal: string;
  auction: CreateRoomDealAuctionPayload;
  contract: string;
  actions: string[];
  vulnerable: VulnerableSide;
}

export interface CreateRoomPayload {
  mode: RoomMode;
  metadata?: CreateRoomMetadataPayload;
  deals: CreateRoomDealPayload[];
}
