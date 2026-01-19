import { NotificationTypeCode } from "../constants.js";
import { NOTIF_CATEG__GENERAL, NOTIF_CATEG__HIRING_PROCESS, PROFILE_EMPLOYER, PROFILE_RECRUITER, type NotificationType } from "../index.js";

export const NOTIF_TYPE__EMPLOYER_RECRUITER_REQUESTS: NotificationType = {
    id: 110100,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 1,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationTypeCode.EMPLOYER_RECRUITER_REQUESTS,
    description: "Recruiter requests updates",
};
export const NOTIF_TYPE__EMPLOYER_TEAM_UPDATES: NotificationType = {
    id: 110200,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 1,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationTypeCode.EMPLOYER_TEAM_UPDATES,
    description: "Updates from your team members",
};
export const NOTIF_TYPE__EMPLOYER_RECRUITER_CALENDAR: NotificationType = {
    id: 110600,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 1,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationTypeCode.EMPLOYER_RECRUITER_CALENDAR,
    description: "Activity on Calendar with Recruiters",
};
export const NOTIF_TYPE__EMPLOYER_REVIEWS: NotificationType = {
    id: 110700,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 1,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationTypeCode.EMPLOYER_REVIEWS,
    description: "New Reviews Received",
};
export const NOTIF_TYPE__EMPLOYER_MESSAGES: NotificationType = {
    id: 110800,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 1,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationTypeCode.EMPLOYER_MESSAGES,
    description: "New Messages Received",
};
export const NOTIF_TYPE__EMPLOYER_CANDIDATE_PROPOSED: NotificationType = {
    id: 120100,
    notif_categ_id: 20,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: 1,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationTypeCode.EMPLOYER_CANDIDATE_PROPOSED,
    description: "New Candidate Proposed by Recruiter",
};
export const NOTIF_TYPE__EMPLOYER_STAGE_UPDATES: NotificationType = {
    id: 120200,
    notif_categ_id: 20,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: 1,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationTypeCode.EMPLOYER_STAGE_UPDATES,
    description: "Updates on Hiring process stages",
};
export const NOTIF_TYPE__EMPLOYER_CANDIDATE_CALENDAR: NotificationType = {
    id: 120500,
    notif_categ_id: 20,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: 1,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationTypeCode.EMPLOYER_CANDIDATE_CALENDAR,
    description: "Activity on Calendar with Candidates",
};

export const NOTIF_TYPE__RECRUITER_JOB_UPDATES: NotificationType = {
    id: 210100,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 2,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationTypeCode.RECRUITER_JOB_UPDATES,
    description: "Updates on Jobs from Employers",
};
export const NOTIF_TYPE__RECRUITER_REQUESTS_UPDATES: NotificationType = {
    id: 210200,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 2,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationTypeCode.RECRUITER_REQUESTS_UPDATES,
    description: "Updates on your Requests to Employers",
};
export const NOTIF_TYPE__RECRUITER_CANDIDATE_CONNECTS: NotificationType = {
    id: 210300,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 2,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationTypeCode.RECRUITER_CANDIDATE_CONNECTS,
    description: "New Candidate Connections",
};
export const NOTIF_TYPE__RECRUITER_EMPLOYER_CALENDAR: NotificationType = {
    id: 210600,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 2,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationTypeCode.RECRUITER_EMPLOYER_CALENDAR,
    description: "Activity on Calendar with Employers",
};
export const NOTIF_TYPE__RECRUITER_REVIEWS: NotificationType = {
    id: 210700,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 2,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationTypeCode.RECRUITER_REVIEWS,
    description: "New Reviews Received",
};
export const NOTIF_TYPE__RECRUITER_MESSAGES: NotificationType = {
    id: 210800,
    notif_categ_id: 10,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: 2,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationTypeCode.RECRUITER_MESSAGES,
    description: "New Messages Received",
};
export const NOTIF_TYPE__RECRUITER_CANDIDATE_UPDATES: NotificationType = {
    id: 220100,
    notif_categ_id: 20,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: 2,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationTypeCode.RECRUITER_CANDIDATE_UPDATES,
    description: "Updates on Candidates from Employers",
};
export const NOTIF_TYPE__RECRUITER_STAGE_UPDATES: NotificationType = {
    id: 220200,
    notif_categ_id: 20,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: 2,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationTypeCode.RECRUITER_STAGE_UPDATES,
    description: "Updates on Hiring process stages",
};
export const NOTIF_TYPE__RECRUITER_CANDIDATE_CALENDAR: NotificationType = {
    id: 220500,
    notif_categ_id: 20,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: 2,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationTypeCode.RECRUITER_CANDIDATE_CALENDAR,
    description: "Activity on Calendar with Candidates",
};

export const NOTIF_TYPES: NotificationType[] = [
    NOTIF_TYPE__EMPLOYER_RECRUITER_REQUESTS,
    NOTIF_TYPE__EMPLOYER_TEAM_UPDATES,
    NOTIF_TYPE__EMPLOYER_RECRUITER_CALENDAR,
    NOTIF_TYPE__EMPLOYER_REVIEWS,
    NOTIF_TYPE__EMPLOYER_MESSAGES,
    NOTIF_TYPE__EMPLOYER_CANDIDATE_PROPOSED,
    NOTIF_TYPE__EMPLOYER_STAGE_UPDATES,
    NOTIF_TYPE__EMPLOYER_CANDIDATE_CALENDAR,

    NOTIF_TYPE__RECRUITER_JOB_UPDATES,
    NOTIF_TYPE__RECRUITER_REQUESTS_UPDATES,
    NOTIF_TYPE__RECRUITER_CANDIDATE_CONNECTS,
    NOTIF_TYPE__RECRUITER_EMPLOYER_CALENDAR,
    NOTIF_TYPE__RECRUITER_REVIEWS,
    NOTIF_TYPE__RECRUITER_MESSAGES,
    NOTIF_TYPE__RECRUITER_CANDIDATE_UPDATES,
    NOTIF_TYPE__RECRUITER_STAGE_UPDATES,
    NOTIF_TYPE__RECRUITER_CANDIDATE_CALENDAR,
];