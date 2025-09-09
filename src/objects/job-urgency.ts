import { JobUrgencyCode } from "../constants";
import type { JobUrgency } from "../index";

export const JOB_URGENCY_REGULAR: JobUrgency = {
    id: 1,
    code: JobUrgencyCode.REGULAR,
    name: "Regular",
};
export const JOB_URGENCY_URGENT: JobUrgency = {
    id: 2,
    code: JobUrgencyCode.URGENT,
    name: "Urgent",
};
export const JOB_URGENCIES: JobUrgency[] = [
    JOB_URGENCY_REGULAR,
    JOB_URGENCY_URGENT,
];