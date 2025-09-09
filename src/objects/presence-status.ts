import { PresenceStatusCode } from "../constants";
import type { PresenceStatus } from "../index";

export const PRESENCE_STATUS_ONSITE: PresenceStatus = {
    id: 1,
    code: PresenceStatusCode.ONSITE,
    name: "On-site",
};
export const PRESENCE_STATUS_REMOTE: PresenceStatus = {
    id: 2,
    code: PresenceStatusCode.REMOTE,
    name: "Remote",
};
export const PRESENCE_STATUS_HYBRID: PresenceStatus = {
    id: 3,
    code: PresenceStatusCode.HYBRID,
    name: "Hybrid",
};

export const PRESENCE_STATUSES: PresenceStatus[] = [
    PRESENCE_STATUS_ONSITE,
    PRESENCE_STATUS_REMOTE,
    PRESENCE_STATUS_HYBRID,
];