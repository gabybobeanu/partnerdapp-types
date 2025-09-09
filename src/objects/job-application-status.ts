import { JobApplicationStatusCode } from "../constants";
import type { JobApplicationStatus } from "../index";

export const JOB_APPLICATION_STATUS_AUTOAPPROVED: JobApplicationStatus = {
    id: 1,
    code: JobApplicationStatusCode.AUTOAPPROVED,
    name: "AutoApproved",
};
export const JOB_APPLICATION_STATUS_APPROVED: JobApplicationStatus = {
    id: 2,
    code: JobApplicationStatusCode.APPROVED,
    name: "Approved",
};
export const JOB_APPLICATION_STATUS_PENDING: JobApplicationStatus = {
    id: 3,
    code: JobApplicationStatusCode.PENDING,
    name: "Pending",
};
export const JOB_APPLICATION_STATUS_REJECTED: JobApplicationStatus = {
    id: 4,
    code: JobApplicationStatusCode.REJECTED,
    name: "Rejected",
};
export const JOB_APPLICATION_STATUS_WITHDRAWN: JobApplicationStatus = {
    id: 5,
    code: JobApplicationStatusCode.WITHDRAWN,
    name: "Withdrawn",
};

export const JOB_APPLICATION_STATUSES: JobApplicationStatus[] = [
    JOB_APPLICATION_STATUS_AUTOAPPROVED,
    JOB_APPLICATION_STATUS_APPROVED,
    JOB_APPLICATION_STATUS_PENDING,
    JOB_APPLICATION_STATUS_REJECTED,
    JOB_APPLICATION_STATUS_WITHDRAWN,
];