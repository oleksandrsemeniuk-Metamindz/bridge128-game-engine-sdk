import { SEAT_FULL_NAMES, SEAT_SHORT_NAMES } from '~src/constants/seats';

export type SeatFullName = (typeof SEAT_FULL_NAMES)[number];

export type SeatShortName = (typeof SEAT_SHORT_NAMES)[number];
