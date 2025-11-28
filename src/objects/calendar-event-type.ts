import type { CalendarEventType } from "../index.js";

export const EVENT_TYPE_INTERVIEW: CalendarEventType = {
    id: 1,
    name: "Interview",
};
export const EVENT_TYPE_MEETING: CalendarEventType = {
    id: 2,
    name: "Meeting",
};
export const EVENT_TYPES: CalendarEventType[] = [
    EVENT_TYPE_INTERVIEW,
    EVENT_TYPE_MEETING,
];