import { CalendarEventTypeName } from "../constants.js";
import type { CalendarEventType } from "../index.js";

export const EVENT_TYPE_INTERVIEW: CalendarEventType = {
    id: 1,
    name: CalendarEventTypeName.INTERVIEW,
};
export const EVENT_TYPE_MEETING: CalendarEventType = {
    id: 2,
    name: CalendarEventTypeName.MEETING,
};
export const EVENT_TYPES: CalendarEventType[] = [
    EVENT_TYPE_INTERVIEW,
    EVENT_TYPE_MEETING,
];