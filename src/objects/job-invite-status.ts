import { JobInviteStatusCode } from "../constants.js";
import type { JobInviteStatus } from "../index.js";

export const JOB_INVITE_STATUS_PENDING: JobInviteStatus = {
    id: 1,
    code: JobInviteStatusCode.PENDING,
    name: "Pending",
};
export const JOB_INVITE_STATUS_CONSUMED: JobInviteStatus = {
    id: 2,
    code: JobInviteStatusCode.CONSUMED,
    name: "Consumed",
};
export const JOB_INVITE_STATUS_EXPIRED: JobInviteStatus = {
    id: 3,
    code: JobInviteStatusCode.EXPIRED,
    name: "Expired",
};

export const JOB_INVITE_STATUSES: JobInviteStatus[] = [
    JOB_INVITE_STATUS_PENDING,
    JOB_INVITE_STATUS_CONSUMED,
    JOB_INVITE_STATUS_EXPIRED,
];