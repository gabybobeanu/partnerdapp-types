import { NotificationGroupCode } from "../constants.js";
import type { NotificationGroup } from "../index.js";

export const NOTIF_GROUP__EMPLOYER_RECRUITER_REQUESTS: NotificationGroup = {
    id: 110200,
    code: NotificationGroupCode.EMPLOYER_RECRUITER_REQUESTS,
    name: "Recruiter requests updates",
    description: 'Notifications about recruiter requests'
};
export const NOTIF_GROUP__EMPLOYER_TEAM_UPDATES: NotificationGroup = {
    id: 110400,
    code: 'EMPLOYER_TEAM_UPDATES',
    name: 'Updates from your team members',
    description: 'Notifications about team member activities'
};
export const NOTIF_GROUP__EMPLOYER_REVIEWS: NotificationGroup = {
    id: 110500,
    code: 'EMPLOYER_REVIEWS',
    name: 'New Reviews Received',
    description: 'Notifications about new reviews'
};
export const NOTIF_GROUP__EMPLOYER_MEETINGS: NotificationGroup = {
    id: 110710,
    code: 'EMPLOYER_MEETINGS',
    name: 'Activity on Calendar with Recruiters',
    description: 'Notifications about meetings with recruiters'
};
export const NOTIF_GROUP__EMPLOYER_MESSAGES: NotificationGroup = {
    id: 110800,
    code: 'EMPLOYER_MESSAGES',
    name: 'New Messages Received',
    description: 'Notifications about new messages'
};
export const NOTIF_GROUP__EMPLOYER_CANDIDATE_UPDATES: NotificationGroup = {
    id: 120300,
    code: 'EMPLOYER_CANDIDATE_UPDATES',
    name: 'New Candidate Proposed by Recruiter',
    description: 'Notifications about new candidates proposed'
};
export const NOTIF_GROUP__EMPLOYER_STAGE_UPDATES: NotificationGroup = {
    id: 120200,
    code: 'EMPLOYER_STAGE_UPDATES',
    name: 'Updates on Hiring process stages',
    description: 'Notifications about hiring process stage updates'
};
export const NOTIF_GROUP__EMPLOYER_INTERVIEWS: NotificationGroup = {
    id: 120700,
    code: 'EMPLOYER_INTERVIEWS',
    name: 'Activity on Calendar with Candidates',
    description: 'Notifications about candidate interviews'
};

export const NOTIF_GROUP__RECRUITER_JOB_UPDATES: NotificationGroup = {
    id: 210100,
    code: 'RECRUITER_JOB_UPDATES',
    name: 'Updates on Jobs from Employers',
    description: 'Notifications about job updates from employers'
};
export const NOTIF_GROUP__RECRUITER_REQUESTS_UPDATES: NotificationGroup = {
    id: 210200,
    code: 'RECRUITER_REQUESTS_UPDATES',
    name: 'Updates on your Requests to Employers',
    description: 'Notifications about your requests to employers'
};
export const NOTIF_GROUP__RECRUITER_CANDIDATE_CONNECTIONS: NotificationGroup = {
    id: 210300,
    code: 'RECRUITER_CANDIDATE_CONNECTIONS',
    name: 'New Candidate Connections',
    description: 'Notifications about new candidate connections'
};
export const NOTIF_GROUP__RECRUITER_REVIEWS: NotificationGroup = {
    id: 210500,
    code: 'RECRUITER_REVIEWS',
    name: 'New Reviews Received',
    description: 'Notifications about new reviews received'
};
export const NOTIF_GROUP__RECRUITER_MEETINGS: NotificationGroup = {
    id: 210710,
    code: 'RECRUITER_MEETINGS',
    name: 'Activity on Calendar with Employers',
    description: 'Notifications about meetings with employers'
};
export const NOTIF_GROUP__RECRUITER_MESSAGES: NotificationGroup = {
    id: 210800,
    code: 'RECRUITER_MESSAGES',
    name: 'New Messages Received',
    description: 'Notifications about new messages received'
};
export const NOTIF_GROUP__RECRUITER_CANDIDATE_UPDATES: NotificationGroup = {
    id: 220300,
    code: 'RECRUITER_CANDIDATE_UPDATES',
    name: 'Updates on Candidates from Employers',
    description: 'Notifications about candidate updates from employers'
};
export const NOTIF_GROUP__RECRUITER_STAGE_UPDATES: NotificationGroup = {
    id: 220200,
    code: 'RECRUITER_STAGE_UPDATES',
    name: 'Updates on Hiring process stages',
    description: 'Notifications about hiring process stage updates'
};
export const NOTIF_GROUP__RECRUITER_INTERVIEWS: NotificationGroup = {
    id: 220700,
    code: 'RECRUITER_INTERVIEWS',
    name: 'Activity on Calendar with Candidates',
    description: 'Notifications about candidate interviews'
};

export const NOTIF_GROUPS: NotificationGroup[] = [
    NOTIF_GROUP__EMPLOYER_RECRUITER_REQUESTS,
    NOTIF_GROUP__EMPLOYER_TEAM_UPDATES,
    NOTIF_GROUP__EMPLOYER_MEETINGS,
    NOTIF_GROUP__EMPLOYER_REVIEWS,
    NOTIF_GROUP__EMPLOYER_MESSAGES,
    NOTIF_GROUP__EMPLOYER_CANDIDATE_UPDATES,
    NOTIF_GROUP__EMPLOYER_STAGE_UPDATES,
    NOTIF_GROUP__EMPLOYER_INTERVIEWS,

    NOTIF_GROUP__RECRUITER_JOB_UPDATES,
    NOTIF_GROUP__RECRUITER_REQUESTS_UPDATES,
    NOTIF_GROUP__RECRUITER_CANDIDATE_UPDATES,
    NOTIF_GROUP__RECRUITER_MEETINGS,
    NOTIF_GROUP__RECRUITER_REVIEWS,
    NOTIF_GROUP__RECRUITER_MESSAGES,
    NOTIF_GROUP__RECRUITER_CANDIDATE_UPDATES,
    NOTIF_GROUP__RECRUITER_STAGE_UPDATES,
    NOTIF_GROUP__RECRUITER_INTERVIEWS,
];