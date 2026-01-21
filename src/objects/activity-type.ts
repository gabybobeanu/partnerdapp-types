import { ActivityTypeCode } from "../constants.js";
import type { ActivityType } from "../index.js";

export const ACTIVITY_TYPE__JOB_CREATED: ActivityType = {
    id: 100001,
    code: ActivityTypeCode.JOB_CREATED,
    name: 'Job Created',
};

export const ACTIVITY_TYPE__JOB_UPDATED: ActivityType = {
    id: 100002,
    code: ActivityTypeCode.JOB_UPDATED,
    name: 'Job Updated',
};
export const ACTIVITY_TYPE__JOB_DELETED: ActivityType = {
    id: 100003,
    code: ActivityTypeCode.JOB_DELETED,
    name: 'Job Deleted',
};

export const ACTIVITY_TYPE__RECRUITER_APPLIED: ActivityType = {
    id: 200001,
    code: ActivityTypeCode.RECRUITER_APPLIED,
    name: 'Recruiter Applied',
};
export const ACTIVITY_TYPE__RECRUITER_WITHDREW: ActivityType = {
    id: 200002,
    code: ActivityTypeCode.RECRUITER_WITHDREW,
    name: 'Recruiter Withdrew',
};
export const ACTIVITY_TYPE__RECRUITER_APPROVED: ActivityType = {
    id: 200003,
    code: ActivityTypeCode.RECRUITER_APPROVED,
    name: 'Recruiter Approved',
};
export const ACTIVITY_TYPE__RECRUITER_AUTOAPPROVED_ON: ActivityType = {
    id: 200004,
    code: ActivityTypeCode.RECRUITER_AUTOAPPROVED_ON,
    name: 'Recruiter Autoapproved On',
};
export const ACTIVITY_TYPE__RECRUITER_AUTOAPPROVED_OFF: ActivityType = {
    id: 200005,
    code: ActivityTypeCode.RECRUITER_AUTOAPPROVED_OFF,
    name: 'Recruiter Autoapproved Off',
};
export const ACTIVITY_TYPE__RECRUITER_REJECTED: ActivityType = {
    id: 200006,
    code: ActivityTypeCode.RECRUITER_REJECTED,
    name: 'Recruiter Rejected',
};

export const ACTIVITY_TYPE__CANDIDATE_PROPOSED: ActivityType = {
    id: 300001,
    code: ActivityTypeCode.CANDIDATE_PROPOSED,
    name: 'Candidate Proposed',
};
export const ACTIVITY_TYPE__CANDIDATE_STAGE_UPDATED: ActivityType = {
    id: 300002,
    code: ActivityTypeCode.CANDIDATE_STAGE_UPDATED,
    name: 'Candidate Stage Updated',
};
export const ACTIVITY_TYPE__CANDIDATE_HIRED: ActivityType = {
    id: 300003,
    code: ActivityTypeCode.CANDIDATE_HIRED,
    name: 'Candidate Hired',
};
export const ACTIVITY_TYPE__CANDIDATE_REJECTED: ActivityType = {
    id: 300004,
    code: ActivityTypeCode.CANDIDATE_REJECTED,
    name: 'Candidate Rejected',
};
export const ACTIVITY_TYPE__CANDIDATE_TERMINATED: ActivityType = {
    id: 300005,
    code: ActivityTypeCode.CANDIDATE_TERMINATED,
    name: 'Candidate Terminated',
};

export const ACTIVITY_TYPE__MEMBER_INVITED: ActivityType = {
    id: 400001,
    code: ActivityTypeCode.MEMBER_INVITED,
    name: 'Member Invited',
};
export const ACTIVITY_TYPE__MEMBER_JOINED: ActivityType = {
    id: 400002,
    code: ActivityTypeCode.MEMBER_JOINED,
    name: 'Member Joined',
};
export const ACTIVITY_TYPE__MEMBER_REMOVED: ActivityType = {
    id: 400003,
    code: ActivityTypeCode.MEMBER_REMOVED,
    name: 'Member Removed',
};
export const ACTIVITY_TYPE__MEMBER_UPDATED: ActivityType = {
    id: 400004,
    code: ActivityTypeCode.MEMBER_UPDATED,
    name: 'Member Updated',
};

export const ACTIVITY_TYPE__REVIEW_POSTED: ActivityType = {
    id: 500001,
    code: ActivityTypeCode.REVIEW_POSTED,
    name: 'Review Posted',
};

export const ACTIVITY_TYPE__STAGE_CREATED: ActivityType = {
    id: 500001,
    code: ActivityTypeCode.STAGE_CREATED,
    name: 'Stage Created',
};
export const ACTIVITY_TYPE__STAGE_UPDATED: ActivityType = {
    id: 500002,
    code: ActivityTypeCode.STAGE_UPDATED,
    name: 'Stage Updated',
};
export const ACTIVITY_TYPE__STAGE_DELETED: ActivityType = {
    id: 500003,
    code: ActivityTypeCode.STAGE_DELETED,
    name: 'Stage Deleted',
};

export const ACTIVITY_TYPE__INTERVIEW_CREATED: ActivityType = {
    id: 700001,
    code: ActivityTypeCode.INTERVIEW_CREATED,
    name: 'Interview Created',
};
export const ACTIVITY_TYPE__INTERVIEW_CONFIRMED: ActivityType = {
    id: 700002,
    code: ActivityTypeCode.INTERVIEW_CONFIRMED,
    name: 'Interview Confirmed',
};
export const ACTIVITY_TYPE__INTERVIEW_RESCHEDULED: ActivityType = {
    id: 700003,
    code: ActivityTypeCode.INTERVIEW_RESCHEDULED,
    name: 'Interview Rescheduled',
};
export const ACTIVITY_TYPE__INTERVIEW_UPDATED: ActivityType = {
    id: 700004,
    code: ActivityTypeCode.INTERVIEW_UPDATED,
    name: 'Interview Updated',
};
export const ACTIVITY_TYPE__INTERVIEW_REFUSED: ActivityType = {
    id: 700005,
    code: ActivityTypeCode.INTERVIEW_REFUSED,
    name: 'Interview Refused',
};
export const ACTIVITY_TYPE__INTERVIEW_DELETED: ActivityType = {
    id: 700006,
    code: ActivityTypeCode.INTERVIEW_DELETED,
    name: 'Interview Deleted',
};

export const ACTIVITY_TYPE__MEETING_CREATED: ActivityType = {
    id: 710001,
    code: ActivityTypeCode.MEETING_CREATED,
    name: 'Meeting Created',
};
export const ACTIVITY_TYPE__MEETING_CONFIRMED: ActivityType = {
    id: 710002,
    code: ActivityTypeCode.MEETING_CONFIRMED,
    name: 'Meeting Confirmed',
};
export const ACTIVITY_TYPE__MEETING_RESCHEDULED: ActivityType = {
    id: 710003,
    code: ActivityTypeCode.MEETING_RESCHEDULED,
    name: 'Meeting Rescheduled',
};
export const ACTIVITY_TYPE__MEETING_UPDATED: ActivityType = {
    id: 710004,
    code: ActivityTypeCode.MEETING_UPDATED,
    name: 'Meeting Updated',
};
export const ACTIVITY_TYPE__MEETING_REFUSED: ActivityType = {
    id: 710005,
    code: ActivityTypeCode.MEETING_REFUSED,
    name: 'Meeting Refused',
};
export const ACTIVITY_TYPE__MEETING_DELETED: ActivityType = {
    id: 710006,
    code: ActivityTypeCode.MEETING_DELETED,
    name: 'Meeting Deleted',
};

export const ACTIVITY_TYPES: ActivityType[] = [
    ACTIVITY_TYPE__JOB_CREATED,
    ACTIVITY_TYPE__JOB_UPDATED,
    ACTIVITY_TYPE__JOB_DELETED,
    ACTIVITY_TYPE__RECRUITER_APPLIED,
    ACTIVITY_TYPE__RECRUITER_WITHDREW,
    ACTIVITY_TYPE__RECRUITER_APPROVED,
    ACTIVITY_TYPE__RECRUITER_AUTOAPPROVED_ON,
    ACTIVITY_TYPE__RECRUITER_AUTOAPPROVED_OFF,
    ACTIVITY_TYPE__RECRUITER_REJECTED,
    ACTIVITY_TYPE__CANDIDATE_PROPOSED,
    ACTIVITY_TYPE__CANDIDATE_STAGE_UPDATED,
    ACTIVITY_TYPE__CANDIDATE_HIRED,
    ACTIVITY_TYPE__CANDIDATE_REJECTED,
    ACTIVITY_TYPE__CANDIDATE_TERMINATED,
    ACTIVITY_TYPE__MEMBER_INVITED,
    ACTIVITY_TYPE__MEMBER_JOINED,
    ACTIVITY_TYPE__MEMBER_UPDATED,
    ACTIVITY_TYPE__MEMBER_REMOVED,
    ACTIVITY_TYPE__REVIEW_POSTED,
    ACTIVITY_TYPE__STAGE_CREATED,
    ACTIVITY_TYPE__STAGE_UPDATED,
    ACTIVITY_TYPE__STAGE_DELETED,
    ACTIVITY_TYPE__INTERVIEW_CREATED,
    ACTIVITY_TYPE__INTERVIEW_CONFIRMED,
    ACTIVITY_TYPE__INTERVIEW_RESCHEDULED,
    ACTIVITY_TYPE__INTERVIEW_UPDATED,
    ACTIVITY_TYPE__INTERVIEW_REFUSED,
    ACTIVITY_TYPE__INTERVIEW_DELETED,
    ACTIVITY_TYPE__MEETING_CREATED,
    ACTIVITY_TYPE__MEETING_CONFIRMED,
    ACTIVITY_TYPE__MEETING_RESCHEDULED,
    ACTIVITY_TYPE__MEETING_UPDATED,
    ACTIVITY_TYPE__MEETING_REFUSED,
    ACTIVITY_TYPE__MEETING_DELETED,
];