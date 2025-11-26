import { CalendarEventStatusName } from "../constants.js";
import type { CalendarEventStatus } from "../index.js";

export const EVENT_STATUS_PENDING: CalendarEventStatus = {
    id: 1,
    name: CalendarEventStatusName.PENDING,
};
export const EVENT_STATUS_CONFIRMED: CalendarEventStatus = {
    id: 2,
    name: CalendarEventStatusName.CONFIRMED,
};
export const EVENT_STATUS_REFUSED: CalendarEventStatus = {
    id: 3,
    name: CalendarEventStatusName.REFUSED,
};

export const EVENT_STATUSES: CalendarEventStatus[] = [
    EVENT_STATUS_PENDING,
    EVENT_STATUS_CONFIRMED,
    EVENT_STATUS_REFUSED,
];