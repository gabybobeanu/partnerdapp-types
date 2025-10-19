import { CandidateJobApplicationStatusCode, type CandidateJobApplicationStatus } from "../index.js";

export const CANDIDATE_JOB_APPLICATION_STATUS_SHORTLIST: CandidateJobApplicationStatus = {
    id: 1,
    code: CandidateJobApplicationStatusCode.SHORTLIST,
    name: "Shortlist",
};
export const CANDIDATE_JOB_APPLICATION_STATUS_INBOX: CandidateJobApplicationStatus = {
    id: 2,
    code: CandidateJobApplicationStatusCode.INBOX,
    name: "Inbox",
};
export const CANDIDATE_JOB_APPLICATION_STATUS_INTERVIEW: CandidateJobApplicationStatus = {
    id: 3,
    code: CandidateJobApplicationStatusCode.INTERVIEW,
    name: "Interview",
};
export const CANDIDATE_JOB_APPLICATION_STATUS_TECH_INTERVIEW: CandidateJobApplicationStatus = {
    id: 4,
    code: CandidateJobApplicationStatusCode.TECH_INTERVIEW,
    name: "Technical Interview",
};
export const CANDIDATE_JOB_APPLICATION_STATUS_OFFERED: CandidateJobApplicationStatus = {
    id: 5,
    code: CandidateJobApplicationStatusCode.OFFERED,
    name: "Offered",
};
export const CANDIDATE_JOB_APPLICATION_STATUS_HIRED: CandidateJobApplicationStatus = {
    id: 6,
    code: CandidateJobApplicationStatusCode.HIRED,
    name: "Hired",
};
export const CANDIDATE_JOB_APPLICATION_STATUS_REJECTED: CandidateJobApplicationStatus = {
    id: 7,
    code: CandidateJobApplicationStatusCode.REJECTED,
    name: "Rejected",
};

export const CANDIDATE_JOB_APPLICATION_STATUSES: CandidateJobApplicationStatus[] = [
    CANDIDATE_JOB_APPLICATION_STATUS_SHORTLIST,
    CANDIDATE_JOB_APPLICATION_STATUS_INBOX,
    CANDIDATE_JOB_APPLICATION_STATUS_INTERVIEW,
    CANDIDATE_JOB_APPLICATION_STATUS_TECH_INTERVIEW,
    CANDIDATE_JOB_APPLICATION_STATUS_OFFERED,
    CANDIDATE_JOB_APPLICATION_STATUS_HIRED,
    CANDIDATE_JOB_APPLICATION_STATUS_REJECTED,
];