import { RightCode } from "../constants.js";
import type { Right } from "../index.js";

export const RIGHT_VIEW_JOBS_LIST: Right = {
    id: 1000000,
    code: RightCode.JOB__LIST__VIEW,
    name: "View Jobs List",
};

export const RIGHT_VIEW_JOB: Right = {
    id: 1001000,
    code: RightCode.JOB__ITEM__VIEW,
    name: "View Job",
};

export const RIGHT_CREATE_JOB: Right = {
    id: 1001001,
    code: RightCode.JOB__ITEM__CREATE,
    name: "Create Job",
};

export const RIGHT_EDIT_JOB: Right = {
    id: 1001002,
    code: RightCode.JOB__ITEM__EDIT,
    name: "Edit Job",
};

export const RIGHT_DELETE_JOB: Right = {
    id: 1001003,
    code: RightCode.JOB__ITEM__DELETE,
    name: "Delete Job",
};

export const RIGHT_EDIT_JOB_FAVORITE: Right = {
    id: 1001102,
    code: RightCode.JOB__FAVORITE__EDIT,
    name: "Edit Job Favorite Status",
};

export const RIGHT_VIEW_JOB_KANBAN: Right = {
    id: 1001200,
    code: RightCode.JOB__KANBAN__VIEW,
    name: "View Job Kanban",
};

export const RIGHT_VIEW_JOB_APPLICATIONS_LIST: Right = {
    id: 1100000,
    code: RightCode.JOB_APPLICATION__LIST__VIEW,
    name: "View Job Applications List",
};

export const RIGHT_REQUEST_JOB_APPLICATION: Right = {
    id: 1101001,
    code: RightCode.JOB_APPLICATION__ITEM__REQUEST,
    name: "Request Job Application Approval",
};

export const RIGHT_APPROVE_JOB_APPLICATION: Right = {
    id: 1101002,
    code: RightCode.JOB_APPLICATION__ITEM__APPROVE,
    name: "Approve Job Application",
};

export const RIGHT_AUTOAPPROVE_JOB_APPLICATION: Right = {
    id: 1101003,
    code: RightCode.JOB_APPLICATION__ITEM__AUTOAPPROVE,
    name: "Auto Approve Job Application",
};

export const RIGHT_REJECT_JOB_APPLICATION: Right = {
    id: 1101004,
    code: RightCode.JOB_APPLICATION__ITEM__REJECT,
    name: "Reject Job Application",
};

export const RIGHT_WITHDRAW_JOB_APPLICATION: Right = {
    id: 1101005,
    code: RightCode.JOB_APPLICATION__ITEM__WITHDRAW,
    name: "Withdraw Job Application",
};

export const RIGHT_VIEW_RECRUITERS_LIST_FOR_JOB_APPLICATION: Right = {
    id: 1102000,
    code: RightCode.JOB_APPLICATION__RECRUITER_LIST__VIEW,
    name: "View Recruiters List for Job Application",
};

export const RIGHT_VIEW_CANDIDATES_LIST_FOR_JOB_APPLICATION: Right = {
    id: 1103000,
    code: RightCode.JOB_APPLICATION__CANDIDATE_LIST__VIEW,
    name: "View Candidates List for Job Application",
};

export const RIGHT_ADD_CANDIDATE_TO_JOB_APPLICATION: Right = {
    id: 1103101,
    code: RightCode.JOB_APPLICATION__CANDIDATE__ADD,
    name: "Add Candidate to Job Application",
};

export const RIGHT_EDIT_CANDIDATE_JOB_APPLICATION_STAGE: Right = {
    id: 1103102,
    code: RightCode.JOB_APPLICATION__CANDIDATE__EDIT,
    name: "Edit Candidate Job Application Stage",
};

export const RIGHT_DELETE_CANDIDATE_FROM_JOB_APPLICATION: Right = {
    id: 1103103,
    code: RightCode.JOB_APPLICATION__CANDIDATE__DELETE,
    name: "Delete Candidate from Job Application",
};

export const RIGHT_VIEW_STAGES_LIST: Right = {
    id: 1200000,
    code: RightCode.STAGE__LIST__VIEW,
    name: "View Stages List",
};

export const RIGHT_CREATE_STAGE: Right = {
    id: 1201001,
    code: RightCode.STAGE__ITEM__CREATE,
    name: "Add Kanban Stage",
};

export const RIGHT_EDIT_STAGE: Right = {
    id: 1201002,
    code: RightCode.STAGE__ITEM__EDIT,
    name: "Edit Kanban Stage",
};

export const RIGHT_DELETE_STAGE: Right = {
    id: 1201003,
    code: RightCode.STAGE__ITEM__DELETE,
    name: "Delete Kanban Stage",
};

export const RIGHT_VIEW_JOB_HIRES_LIST: Right = {
    id: 1300000,
    code: RightCode.JOB_HIRES__LIST__VIEW,
    name: "View Job Hires List",
};

export const RIGHT_VIEW_JOB_HIRE: Right = {
    id: 1301000,
    code: RightCode.JOB_HIRES__ITEM__VIEW,
    name: "Reject Candidate",
};

export const RIGHT_CREATE_JOB_HIRE: Right = {
    id: 1301001,
    code: RightCode.JOB_HIRES__ITEM__CREATE,
    name: "Hire Candidate",
};

export const RIGHT_DELETE_JOB_HIRE: Right = {
    id: 1301003,
    code: RightCode.JOB_HIRES__ITEM__DELETE,
    name: "Reject Candidate",
};

export const RIGHT_VIEW_EVENTS_LIST: Right = {
    id: 3000000,
    code: RightCode.EVENT__LIST__VIEW,
    name: "View Events List",
};

export const RIGHT_VIEW_EVENT: Right = {
    id: 3001000,
    code: RightCode.EVENT__ITEM__VIEW,
    name: "View Event",
};

export const RIGHT_CREATE_EVENT: Right = {
    id: 3001001,
    code: RightCode.EVENT__ITEM__CREATE,
    name: "Create Event",
};

export const RIGHT_EDIT_OWN_EVENT: Right = {
    id: 3001020,
    code: RightCode.EVENT__ITEM__EDIT__OWN,
    name: "Edit Own Event",
};

export const RIGHT_EDIT_TARGET_EVENT: Right = {
    id: 3001021,
    code: RightCode.EVENT__ITEM__EDIT__TARGET,
    name: "Edit Target Event",
};

export const RIGHT_EDIT_OTHER_EVENT: Right = {
    id: 3001022,
    code: RightCode.EVENT__ITEM__EDIT__OTHER,
    name: "Edit Other Event",
};

export const RIGHT_CONFIRM_OWN_EVENT: Right = {
    id: 3001030,
    code: RightCode.EVENT__ITEM__CONFIRM__OWN,
    name: "Confirm Own Event",
};

export const RIGHT_CONFIRM_TARGET_EVENT: Right = {
    id: 3001031,
    code: RightCode.EVENT__ITEM__CONFIRM__TARGET,
    name: "Confirm Target Event",
};

export const RIGHT_CONFIRM_OTHER_EVENT: Right = {
    id: 3001032,
    code: RightCode.EVENT__ITEM__CONFIRM__OTHER,
    name: "Confirm Other Event",
};

export const RIGHT_RESCHEDULE_OWN_EVENT: Right = {
    id: 3001040,
    code: RightCode.EVENT__ITEM__RESCHEDULE__OWN,
    name: "Reschedule Own Event",
};

export const RIGHT_RESCHEDULE_TARGET_EVENT: Right = {
    id: 3001041,
    code: RightCode.EVENT__ITEM__RESCHEDULE__TARGET,
    name: "Reschedule Target Event",
};

export const RIGHT_RESCHEDULE_OTHER_EVENT: Right = {
    id: 3001042,
    code: RightCode.EVENT__ITEM__RESCHEDULE__OTHER,
    name: "Reschedule Other Event",
};

export const RIGHT_REFUSE_OWN_EVENT: Right = {
    id: 3001050,
    code: RightCode.EVENT__ITEM__REFUSE__OWN,
    name: "Refuse Own Event",
};

export const RIGHT_REFUSE_TARGET_EVENT: Right = {
    id: 3001051,
    code: RightCode.EVENT__ITEM__REFUSE__TARGET,
    name: "Refuse Target Event",
};

export const RIGHT_REFUSE_OTHER_EVENT: Right = {
    id: 3001052,
    code: RightCode.EVENT__ITEM__REFUSE__OTHER,
    name: "Refuse Other Event",
};

export const RIGHT_DELETE_OWN_EVENT: Right = {
    id: 3001060,
    code: RightCode.EVENT__ITEM__DELETE__OWN,
    name: "Delete Own Event",
};

export const RIGHT_DELETE_TARGET_EVENT: Right = {
    id: 3001061,
    code: RightCode.EVENT__ITEM__DELETE__TARGET,
    name: "Delete Target Event",
};

export const RIGHT_DELETE_OTHER_EVENT: Right = {
    id: 3001062,
    code: RightCode.EVENT__ITEM__DELETE__OTHER,
    name: "Delete Other Event",
};

export const RIGHT_VIEW_MESSAGES: Right = {
    id: 3100000,
    code: RightCode.MESSAGE__LIST__VIEW,
    name: "View Messages",
};

export const RIGHT_SEND_MESSAGE: Right = {
    id: 3101001,
    code: RightCode.MESSAGE__ITEM__CREATE,
    name: "Send Message",
};

export const RIGHT_VIEW_REVIEWS: Right = {
    id: 3200000,
    code: RightCode.REVIEW__LIST__VIEW,
    name: "View Reviews",
};

export const RIGHT_CREATE_REVIEW: Right = {
    id: 3201001,
    code: RightCode.REVIEW__ITEM__CREATE,
    name: "Create Review",
};

export const RIGHT_VIEW_TODOS: Right = {
    id: 3300000,
    code: RightCode.TODO__LIST__VIEW,
    name: "View Todos",
};

export const RIGHT_CREATE_TODO: Right = {
    id: 3301001,
    code: RightCode.TODO__ITEM__CREATE,
    name: "Add Todo",
};

export const RIGHT_EDIT_TODO: Right = {
    id: 3301002,
    code: RightCode.TODO__ITEM__EDIT,
    name: "Edit Todo",
};

export const RIGHT_DELETE_TODO: Right = {
    id: 3301003,
    code: RightCode.TODO__ITEM__DELETE,
    name: "Delete Todo",
};

export const RIGHT_VIEW_USERS_LIST: Right = {
    id: 5000000,
    code: RightCode.USER__LIST__VIEW,
    name: "View Users",
};

export const RIGHT_VIEW_USER: Right = {
    id: 5001000,
    code: RightCode.USER__ITEM__VIEW,
    name: "View Users",
};

export const RIGHT_CREATE_USER: Right = {
    id: 5001001,
    code: RightCode.USER__ITEM__CREATE,
    name: "Create User",
};

export const RIGHT_DELETE_USER: Right = {
    id: 5001003,
    code: RightCode.USER__ITEM__DELETE,
    name: "Delete User",
};

export const RIGHT_VIEW_PROFILE: Right = {
    id: 5002000,
    code: RightCode.USER__PROFILE__VIEW,
    name: "View Profile",
};

export const RIGHT_EDIT_PROFILE: Right = {
    id: 5002002,
    code: RightCode.USER__PROFILE__EDIT,
    name: "Edit Profile",
};

export const RIGHT_VIEW_SETTINGS: Right = {
    id: 5003000,
    code: RightCode.USER__SETTINGS__VIEW,
    name: "View Settings",
};

export const RIGHT_EDIT_SETTINGS: Right = {
    id: 5003002,
    code: RightCode.USER__SETTINGS__EDIT,
    name: "Edit Settings",
};

export const RIGHT_VIEW_EMPLOYERS_LIST: Right = {
    id: 5100000,
    code: RightCode.EMPLOYER__LIST__VIEW,
    name: "View Employers List",
};

export const RIGHT_VIEW_EMPLOYER: Right = {
    id: 5101000,
    code: RightCode.EMPLOYER__ITEM__VIEW,
    name: "View Employer",
};

export const RIGHT_VIEW_EMPLOYER_TEAMS_LIST: Right = {
    id: 5102000,
    code: RightCode.EMPLOYER__TEAM_LIST__VIEW,
    name: "View Employer Teams List",
};

export const RIGHT_DELETE_EMPLOYER_TEAM_MEMBER: Right = {
    id: 5102103,
    code: RightCode.EMPLOYER__TEAM_MEMBER__DELETE,
    name: "Delete Member",
};

export const RIGHT_CREATE_EMPLOYER_INVITE: Right = {
    id: 5103001,
    code: RightCode.EMPLOYER__INVITE__CREATE,
    name: "Invite Member",
};

export const RIGHT_DELETE_EMPLOYER_INVITE: Right = {
    id: 5103003,
    code: RightCode.EMPLOYER__INVITE__DELETE,
    name: "Invite Member",
};

export const RIGHT_VIEW_RECRUITERS_LIST: Right = {
    id: 5300000,
    code: RightCode.RECRUITER__LIST__VIEW,
    name: "View Recruiters List",
};

export const RIGHT_VIEW_RECRUITER: Right = {
    id: 5301000,
    code: RightCode.RECRUITER__ITEM__VIEW,
    name: "View Recruiter",
};

export const RIGHT_VIEW_CANDIDATES_LIST: Right = {
    id: 5600000,
    code: RightCode.CANDIDATE__LIST__VIEW,
    name: "View Candidates List",
};

export const RIGHT_VIEW_CANDIDATE: Right = {
    id: 5601000,
    code: RightCode.CANDIDATE__ITEM__VIEW,
    name: "View Candidate",
};

export const RIGHT_CREATE_CANDIDATE_INVITE: Right = {
    id: 5602001,
    code: RightCode.CANDIDATE__INVITE__CREATE,
    name: "Invite Candidate",
};

export const RIGHT_CREATE_CANDIDATE_IDEAL_JOB: Right = {
    id: 5603001,
    code: RightCode.CANDIDATE__IDEAL_JOB__CREATE,
    name: "Create Ideal Job",
};

export const RIGHT_EDIT_CANDIDATE_IDEAL_JOB: Right = {
    id: 5603002,
    code: RightCode.CANDIDATE__IDEAL_JOB__EDIT,
    name: "Edit Ideal Job",
};

export const RIGHT_VIEW_COMPANY: Right = {
    id: 5901000,
    code: RightCode.COMPANY__ITEM__VIEW,
    name: "View Company",
};

export const RIGHT_EDIT_COMPANY: Right = {
    id: 5901002,
    code: RightCode.COMPANY__ITEM__EDIT,
    name: "Edit Company",
};

export const RIGHT_VIEW_ADMIN_USERS_LIST: Right = {
    id: 9000000,
    code: RightCode.ADMIN__USER_LIST__VIEW,
    name: "View Users List",
};

export const RIGHT_ACTIVATE_ADMIN_USER: Right = {
    id: 9000104,
    code: RightCode.ADMIN__USER__ACTIVATE,
    name: "Activate User",
};

export const RIGHT_ACTIVATE_ADMIN_COMPANY: Right = {
    id: 9001004,
    code: RightCode.ADMIN__COMPANY_ACTIVATE,
    name: "Activate Company",
};

export const RIGHTS: Right[] = [
    RIGHT_VIEW_JOBS_LIST,
    RIGHT_VIEW_JOB,
    RIGHT_CREATE_JOB,
    RIGHT_EDIT_JOB,
    RIGHT_DELETE_JOB,
    RIGHT_EDIT_JOB_FAVORITE,
    RIGHT_VIEW_JOB_KANBAN,
    RIGHT_VIEW_JOB_APPLICATIONS_LIST,
    RIGHT_REQUEST_JOB_APPLICATION,
    RIGHT_APPROVE_JOB_APPLICATION,
    RIGHT_AUTOAPPROVE_JOB_APPLICATION,
    RIGHT_REJECT_JOB_APPLICATION,
    RIGHT_WITHDRAW_JOB_APPLICATION,
    RIGHT_VIEW_RECRUITERS_LIST_FOR_JOB_APPLICATION,
    RIGHT_VIEW_CANDIDATES_LIST_FOR_JOB_APPLICATION,
    RIGHT_ADD_CANDIDATE_TO_JOB_APPLICATION,
    RIGHT_EDIT_CANDIDATE_JOB_APPLICATION_STAGE,
    RIGHT_DELETE_CANDIDATE_FROM_JOB_APPLICATION,
    RIGHT_VIEW_STAGES_LIST,
    RIGHT_CREATE_STAGE,
    RIGHT_EDIT_STAGE,
    RIGHT_DELETE_STAGE,
    RIGHT_VIEW_JOB_HIRES_LIST,
    RIGHT_VIEW_JOB_HIRE,
    RIGHT_CREATE_JOB_HIRE,
    RIGHT_DELETE_JOB_HIRE,
    RIGHT_VIEW_EVENTS_LIST,
    RIGHT_VIEW_EVENT,
    RIGHT_CREATE_EVENT,
    RIGHT_EDIT_OWN_EVENT,
    RIGHT_EDIT_TARGET_EVENT,
    RIGHT_EDIT_OTHER_EVENT,
    RIGHT_CONFIRM_OWN_EVENT,
    RIGHT_CONFIRM_TARGET_EVENT,
    RIGHT_CONFIRM_OTHER_EVENT,
    RIGHT_RESCHEDULE_OWN_EVENT,
    RIGHT_RESCHEDULE_TARGET_EVENT,
    RIGHT_RESCHEDULE_OTHER_EVENT,
    RIGHT_REFUSE_OWN_EVENT,
    RIGHT_REFUSE_TARGET_EVENT,
    RIGHT_REFUSE_OTHER_EVENT,
    RIGHT_DELETE_OWN_EVENT,
    RIGHT_DELETE_TARGET_EVENT,
    RIGHT_DELETE_OTHER_EVENT,
    RIGHT_VIEW_MESSAGES,
    RIGHT_SEND_MESSAGE,
    RIGHT_VIEW_REVIEWS,
    RIGHT_CREATE_REVIEW,
    RIGHT_VIEW_TODOS,
    RIGHT_CREATE_TODO,
    RIGHT_EDIT_TODO,
    RIGHT_DELETE_TODO,
    RIGHT_VIEW_USERS_LIST,
    RIGHT_VIEW_USER,
    RIGHT_CREATE_USER,
    RIGHT_DELETE_USER,
    RIGHT_VIEW_PROFILE,
    RIGHT_EDIT_PROFILE,
    RIGHT_VIEW_SETTINGS,
    RIGHT_EDIT_SETTINGS,
    RIGHT_VIEW_EMPLOYERS_LIST,
    RIGHT_VIEW_EMPLOYER,
    RIGHT_VIEW_EMPLOYER_TEAMS_LIST,
    RIGHT_DELETE_EMPLOYER_TEAM_MEMBER,
    RIGHT_CREATE_EMPLOYER_INVITE,
    RIGHT_DELETE_EMPLOYER_INVITE,
    RIGHT_VIEW_RECRUITERS_LIST,
    RIGHT_VIEW_RECRUITER,
    RIGHT_VIEW_CANDIDATES_LIST,
    RIGHT_VIEW_CANDIDATE,
    RIGHT_CREATE_CANDIDATE_INVITE,
    RIGHT_CREATE_CANDIDATE_IDEAL_JOB,
    RIGHT_EDIT_CANDIDATE_IDEAL_JOB,
    RIGHT_VIEW_COMPANY,
    RIGHT_EDIT_COMPANY,
    RIGHT_VIEW_ADMIN_USERS_LIST,
    RIGHT_ACTIVATE_ADMIN_USER,
    RIGHT_ACTIVATE_ADMIN_COMPANY,
];