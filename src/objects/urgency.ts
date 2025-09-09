import { UrgencyCode } from "../constants";
import type { Urgency } from "../index";

export const JOB_URGENCY_REGULAR: Urgency = {
    id: 1,
    code: UrgencyCode.REGULAR,
    name: "Regular",
};
export const JOB_URGENCY_URGENT: Urgency = {
    id: 2,
    code: UrgencyCode.URGENT,
    name: "Urgent",
};
export const JOB_URGENCIES: Urgency[] = [
    JOB_URGENCY_REGULAR,
    JOB_URGENCY_URGENT,
];