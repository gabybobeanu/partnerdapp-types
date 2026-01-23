import { NotificationGroupCode } from "../constants.js";
import { NOTIF_CATEG__GENERAL, NOTIF_CATEG__HIRING_PROCESS, PROFILE_CANDIDATE, PROFILE_EMPLOYER, PROFILE_RECRUITER, type NotificationGroup } from "../index.js";

export const NOTIF_GROUP__EMPLOYER_RECRUITER_REQUESTS: NotificationGroup = {
    id: 110200,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_EMPLOYER.id,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationGroupCode.EMPLOYER_RECRUITER_REQUESTS,
    name: "Recruiter requests updates",
    description: 'Notifications about recruiter requests'
};
export const NOTIF_GROUP__EMPLOYER_TEAM_UPDATES: NotificationGroup = {
    id: 110400,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_EMPLOYER.id,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationGroupCode.EMPLOYER_TEAM_UPDATES,
    name: 'Updates from your team members',
    description: 'Notifications about team member activities'
};
export const NOTIF_GROUP__EMPLOYER_REVIEWS: NotificationGroup = {
    id: 110500,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_EMPLOYER.id,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationGroupCode.EMPLOYER_REVIEWS,
    name: 'New Reviews Received',
    description: 'Notifications about new reviews'
};
export const NOTIF_GROUP__EMPLOYER_MEETINGS: NotificationGroup = {
    id: 110710,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_EMPLOYER.id,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationGroupCode.EMPLOYER_MEETINGS,
    name: 'Activity on Calendar with Recruiters',
    description: 'Notifications about meetings with recruiters'
};
export const NOTIF_GROUP__EMPLOYER_MESSAGES: NotificationGroup = {
    id: 110800,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_EMPLOYER.id,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationGroupCode.EMPLOYER_MESSAGES,
    name: 'New Messages Received',
    description: 'Notifications about new messages'
};
export const NOTIF_GROUP__EMPLOYER_CANDIDATE_UPDATES: NotificationGroup = {
    id: 120300,
    notif_categ_id: NOTIF_CATEG__HIRING_PROCESS.id,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: PROFILE_EMPLOYER.id,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationGroupCode.EMPLOYER_CANDIDATE_UPDATES,
    name: 'New Candidate Proposed by Recruiter',
    description: 'Notifications about new candidates proposed'
};
export const NOTIF_GROUP__EMPLOYER_STAGE_UPDATES: NotificationGroup = {
    id: 120200,
    notif_categ_id: NOTIF_CATEG__HIRING_PROCESS.id,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: PROFILE_EMPLOYER.id,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationGroupCode.EMPLOYER_STAGE_UPDATES,
    name: 'Updates on Hiring process stages',
    description: 'Notifications about hiring process stage updates'
};
export const NOTIF_GROUP__EMPLOYER_INTERVIEWS: NotificationGroup = {
    id: 120700,
    notif_categ_id: NOTIF_CATEG__HIRING_PROCESS.id,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: PROFILE_EMPLOYER.id,
    receiver_profile: PROFILE_EMPLOYER,
    code: NotificationGroupCode.EMPLOYER_INTERVIEWS,
    name: 'Activity on Calendar with Candidates',
    description: 'Notifications about candidate interviews'
};

export const NOTIF_GROUP__RECRUITER_JOB_UPDATES: NotificationGroup = {
    id: 210100,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_RECRUITER.id,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationGroupCode.RECRUITER_JOB_UPDATES,
    name: 'Updates on Jobs from Employers',
    description: 'Notifications about job updates from employers'
};
export const NOTIF_GROUP__RECRUITER_REQUESTS_UPDATES: NotificationGroup = {
    id: 210200,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_RECRUITER.id,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationGroupCode.RECRUITER_REQUESTS_UPDATES,
    name: 'Updates on your Requests to Employers',
    description: 'Notifications about your requests to employers'
};
export const NOTIF_GROUP__RECRUITER_CANDIDATE_CONNECTIONS: NotificationGroup = {
    id: 210300,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_RECRUITER.id,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationGroupCode.RECRUITER_CANDIDATE_CONNECTIONS,
    name: 'New Candidate Connections',
    description: 'Notifications about new candidate connections'
};
export const NOTIF_GROUP__RECRUITER_REVIEWS: NotificationGroup = {
    id: 210500,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_RECRUITER.id,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationGroupCode.RECRUITER_REVIEWS,
    name: 'New Reviews Received',
    description: 'Notifications about new reviews received'
};
export const NOTIF_GROUP__RECRUITER_MEETINGS: NotificationGroup = {
    id: 210710,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_RECRUITER.id,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationGroupCode.RECRUITER_MEETINGS,
    name: 'Activity on Calendar with Employers',
    description: 'Notifications about meetings with employers'
};
export const NOTIF_GROUP__RECRUITER_MESSAGES: NotificationGroup = {
    id: 210800,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    receiver_profile_id: PROFILE_RECRUITER.id,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationGroupCode.RECRUITER_MESSAGES,
    name: 'New Messages Received',
    description: 'Notifications about new messages received'
};
export const NOTIF_GROUP__RECRUITER_CANDIDATE_UPDATES: NotificationGroup = {
    id: 220300,
    notif_categ_id: NOTIF_CATEG__HIRING_PROCESS.id,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: PROFILE_RECRUITER.id,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationGroupCode.RECRUITER_CANDIDATE_UPDATES,
    name: 'Updates on Candidates from Employers',
    description: 'Notifications about candidate updates from employers'
};
export const NOTIF_GROUP__RECRUITER_STAGE_UPDATES: NotificationGroup = {
    id: 220200,
    notif_categ_id: NOTIF_CATEG__HIRING_PROCESS.id,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: PROFILE_RECRUITER.id,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationGroupCode.RECRUITER_STAGE_UPDATES,
    name: 'Updates on Hiring process stages',
    description: 'Notifications about hiring process stage updates'
};
export const NOTIF_GROUP__RECRUITER_INTERVIEWS: NotificationGroup = {
    id: 220700,
    notif_categ_id: NOTIF_CATEG__HIRING_PROCESS.id,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    receiver_profile_id: PROFILE_RECRUITER.id,
    receiver_profile: PROFILE_RECRUITER,
    code: NotificationGroupCode.RECRUITER_INTERVIEWS,
    name: 'Activity on Calendar with Candidates',
    description: 'Notifications about candidate interviews'
};

export const NOTIF_GROUP__CANDIDATE_REVIEWS: NotificationGroup = {
    id: 310500,
    receiver_profile_id: PROFILE_CANDIDATE.id,
    receiver_profile: PROFILE_CANDIDATE,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    code: NotificationGroupCode.CANDIDATE_REVIEWS,
    name: 'New Reviews Received',
    description: 'Notifications about new reviews received',
    default_enabled: true
};
export const NOTIF_GROUP__CANDIDATE_MESSAGES: NotificationGroup = {
    id: 310800,
    receiver_profile_id: PROFILE_CANDIDATE.id,
    receiver_profile: PROFILE_CANDIDATE,
    notif_categ_id: NOTIF_CATEG__GENERAL.id,
    notif_categ: NOTIF_CATEG__GENERAL,
    code: NotificationGroupCode.CANDIDATE_MESSAGES,
    name: 'New Messages Received',
    description: 'Notifications about new messages received',
    default_enabled: true
};

export const NOTIF_GROUP__CANDIDATE_STAGE_UPDATES: NotificationGroup = {
    id: 320200,
    receiver_profile_id: PROFILE_CANDIDATE.id,
    receiver_profile: PROFILE_CANDIDATE,
    notif_categ_id: NOTIF_CATEG__HIRING_PROCESS.id,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    code: NotificationGroupCode.CANDIDATE_STAGE_UPDATES,
    name: 'Updates on Hiring process stages',
    description: 'Notifications about updates on hiring process stages',
    default_enabled: false
};
export const NOTIF_GROUP__CANDIDATE_STATUS_UPDATES: NotificationGroup = {
    id: 320300,
    receiver_profile_id: PROFILE_CANDIDATE.id,
    receiver_profile: PROFILE_CANDIDATE,
    notif_categ_id: NOTIF_CATEG__HIRING_PROCESS.id,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    code: NotificationGroupCode.CANDIDATE_STATUS_UPDATES,
    name: 'Updates on Candidates Application Stages',
    description: 'Notifications about updates on candidates application stages',
    default_enabled: true
};
export const NOTIF_GROUP__CANDIDATE_INTERVIEWS: NotificationGroup = {
    id: 320700,
    receiver_profile_id: PROFILE_CANDIDATE.id,
    receiver_profile: PROFILE_CANDIDATE,
    notif_categ_id: NOTIF_CATEG__HIRING_PROCESS.id,
    notif_categ: NOTIF_CATEG__HIRING_PROCESS,
    code: NotificationGroupCode.CANDIDATE_INTERVIEWS,
    name: 'Activity on Calendar',
    description: 'Notifications about interviews scheduled',
    default_enabled: true
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

    NOTIF_GROUP__CANDIDATE_REVIEWS,
    NOTIF_GROUP__CANDIDATE_MESSAGES,
    NOTIF_GROUP__CANDIDATE_STAGE_UPDATES,
    NOTIF_GROUP__CANDIDATE_STATUS_UPDATES,
    NOTIF_GROUP__CANDIDATE_INTERVIEWS
];