import { RightCode } from "../constants.js";
import type { Right } from "../index.js";

export const RIGHT__JOB__LIST__VIEW: Right = {
    id: 1000000,
    code: RightCode.JOB__LIST__VIEW,
    name: "View Jobs List",
};

export const RIGHT__JOB__ITEM__VIEW: Right = {
    id: 1001000,
    code: RightCode.JOB__ITEM__VIEW,
    name: "View Job",
};

export const RIGHT__JOB__ITEM__CREATE: Right = {
    id: 1001001,
    code: RightCode.JOB__ITEM__CREATE,
    name: "Create Job",
};

export const RIGHT__JOB__ITEM__EDIT: Right = {
    id: 1001002,
    code: RightCode.JOB__ITEM__EDIT,
    name: "Edit Job",
};

export const RIGHT__JOB__ITEM__DELETE: Right = {
    id: 1001003,
    code: RightCode.JOB__ITEM__DELETE,
    name: "Delete Job",
};

export const RIGHT__JOB__FAVORITE__EDIT: Right = {
    id: 1001102,
    code: RightCode.JOB__FAVORITE__EDIT,
    name: "Edit Job Favorite Status",
};

export const RIGHT__JOB__KANBAN__VIEW: Right = {
    id: 1001200,
    code: RightCode.JOB__KANBAN__VIEW,
    name: "View Job Kanban",
};

export const RIGHT__JOB_APPLICATION__LIST__VIEW: Right = {
    id: 1100000,
    code: RightCode.JOB_APPLICATION__LIST__VIEW,
    name: "View Job Applications List",
};

export const RIGHT__JOB_APPLICATION__ITEM__REQUEST: Right = {
    id: 1101001,
    code: RightCode.JOB_APPLICATION__ITEM__REQUEST,
    name: "Request Job Application Approval",
};

export const RIGHT__JOB_APPLICATION__ITEM__APPROVE: Right = {
    id: 1101002,
    code: RightCode.JOB_APPLICATION__ITEM__APPROVE,
    name: "Approve Job Application",
};

export const RIGHT__JOB_APPLICATION__ITEM__AUTOAPPROVE: Right = {
    id: 1101003,
    code: RightCode.JOB_APPLICATION__ITEM__AUTOAPPROVE,
    name: "Auto Approve Job Application",
};

export const RIGHT__JOB_APPLICATION__ITEM__REJECT: Right = {
    id: 1101004,
    code: RightCode.JOB_APPLICATION__ITEM__REJECT,
    name: "Reject Job Application",
};

export const RIGHT__JOB_APPLICATION__ITEM__WITHDRAW: Right = {
    id: 1101005,
    code: RightCode.JOB_APPLICATION__ITEM__WITHDRAW,
    name: "Withdraw Job Application",
};

export const RIGHT__JOB_APPLICATION__RECRUITER_LIST__VIEW: Right = {
    id: 1102000,
    code: RightCode.JOB_APPLICATION__RECRUITER_LIST__VIEW,
    name: "View Recruiters List for Job Application",
};

export const RIGHT__JOB_APPLICATION__CANDIDATE_LIST__VIEW: Right = {
    id: 1103000,
    code: RightCode.JOB_APPLICATION__CANDIDATE_LIST__VIEW,
    name: "View Candidates List for Job Application",
};

export const RIGHT__JOB_APPLICATION__CANDIDATE__ADD: Right = {
    id: 1103101,
    code: RightCode.JOB_APPLICATION__CANDIDATE__ADD,
    name: "Add Candidate to Job Application",
};

export const RIGHT__JOB_APPLICATION__CANDIDATE__EDIT: Right = {
    id: 1103102,
    code: RightCode.JOB_APPLICATION__CANDIDATE__EDIT,
    name: "Edit Candidate Job Application Stage",
};

export const RIGHT__JOB_APPLICATION__CANDIDATE__DELETE: Right = {
    id: 1103103,
    code: RightCode.JOB_APPLICATION__CANDIDATE__DELETE,
    name: "Delete Candidate from Job Application",
};

export const RIGHT__JOB_APPLICATION__CANDIDATE__REJECT: Right = {
    id: 1103104,
    code: RightCode.JOB_APPLICATION__CANDIDATE__REJECT,
    name: "Reject Candidate from Job Application",
};

export const RIGHT__STAGE__LIST__VIEW: Right = {
    id: 1200000,
    code: RightCode.STAGE__LIST__VIEW,
    name: "View Stages List",
};

export const RIGHT__STAGE__ITEM__CREATE: Right = {
    id: 1201001,
    code: RightCode.STAGE__ITEM__CREATE,
    name: "Add Kanban Stage",
};

export const RIGHT__STAGE__ITEM__EDIT: Right = {
    id: 1201002,
    code: RightCode.STAGE__ITEM__EDIT,
    name: "Edit Kanban Stage",
};

export const RIGHT__STAGE__ITEM__DELETE: Right = {
    id: 1201003,
    code: RightCode.STAGE__ITEM__DELETE,
    name: "Delete Kanban Stage",
};

export const RIGHT__JOB_HIRES__LIST__VIEW: Right = {
    id: 1300000,
    code: RightCode.JOB_HIRES__LIST__VIEW,
    name: "View Job Hires List",
};

export const RIGHT__JOB_HIRES__ITEM__VIEW: Right = {
    id: 1301000,
    code: RightCode.JOB_HIRES__ITEM__VIEW,
    name: "Reject Candidate",
};

export const RIGHT__JOB_HIRES__ITEM__CREATE: Right = {
    id: 1301001,
    code: RightCode.JOB_HIRES__ITEM__CREATE,
    name: "Hire Candidate",
};

export const RIGHT__JOB_HIRES__ITEM__DELETE: Right = {
    id: 1301003,
    code: RightCode.JOB_HIRES__ITEM__DELETE,
    name: "Reject Candidate",
};

export const RIGHT__EVENT__LIST__VIEW: Right = {
    id: 3000000,
    code: RightCode.EVENT__LIST__VIEW,
    name: "View Events List",
};

export const RIGHT__EVENT__ITEM__VIEW: Right = {
    id: 3001000,
    code: RightCode.EVENT__ITEM__VIEW,
    name: "View Event",
};

export const RIGHT__EVENT__ITEM__CREATE: Right = {
    id: 3001001,
    code: RightCode.EVENT__ITEM__CREATE,
    name: "Create Event",
};

export const RIGHT__EVENT__ITEM__EDIT__OWN: Right = {
    id: 3001020,
    code: RightCode.EVENT__ITEM__EDIT__OWN,
    name: "Edit Own Event",
};

export const RIGHT__EVENT__ITEM__EDIT__TARGET: Right = {
    id: 3001021,
    code: RightCode.EVENT__ITEM__EDIT__TARGET,
    name: "Edit Target Event",
};

export const RIGHT__EVENT__ITEM__EDIT__OTHER: Right = {
    id: 3001022,
    code: RightCode.EVENT__ITEM__EDIT__OTHER,
    name: "Edit Other Event",
};

export const RIGHT__EVENT__ITEM__CONFIRM__OWN: Right = {
    id: 3001030,
    code: RightCode.EVENT__ITEM__CONFIRM__OWN,
    name: "Confirm Own Event",
};

export const RIGHT__EVENT__ITEM__CONFIRM__TARGET: Right = {
    id: 3001031,
    code: RightCode.EVENT__ITEM__CONFIRM__TARGET,
    name: "Confirm Target Event",
};

export const RIGHT__EVENT__ITEM__CONFIRM__OTHER: Right = {
    id: 3001032,
    code: RightCode.EVENT__ITEM__CONFIRM__OTHER,
    name: "Confirm Other Event",
};

export const RIGHT__EVENT__ITEM__RESCHEDULE__OWN: Right = {
    id: 3001040,
    code: RightCode.EVENT__ITEM__RESCHEDULE__OWN,
    name: "Reschedule Own Event",
};

export const RIGHT__EVENT__ITEM__RESCHEDULE__TARGET: Right = {
    id: 3001041,
    code: RightCode.EVENT__ITEM__RESCHEDULE__TARGET,
    name: "Reschedule Target Event",
};

export const RIGHT__EVENT__ITEM__RESCHEDULE__OTHER: Right = {
    id: 3001042,
    code: RightCode.EVENT__ITEM__RESCHEDULE__OTHER,
    name: "Reschedule Other Event",
};

export const RIGHT__EVENT__ITEM__REFUSE__OWN: Right = {
    id: 3001050,
    code: RightCode.EVENT__ITEM__REFUSE__OWN,
    name: "Refuse Own Event",
};

export const RIGHT__EVENT__ITEM__REFUSE__TARGET: Right = {
    id: 3001051,
    code: RightCode.EVENT__ITEM__REFUSE__TARGET,
    name: "Refuse Target Event",
};

export const RIGHT__EVENT__ITEM__REFUSE__OTHER: Right = {
    id: 3001052,
    code: RightCode.EVENT__ITEM__REFUSE__OTHER,
    name: "Refuse Other Event",
};

export const RIGHT__EVENT__ITEM__DELETE__OWN: Right = {
    id: 3001060,
    code: RightCode.EVENT__ITEM__DELETE__OWN,
    name: "Delete Own Event",
};

export const RIGHT__EVENT__ITEM__DELETE__TARGET: Right = {
    id: 3001061,
    code: RightCode.EVENT__ITEM__DELETE__TARGET,
    name: "Delete Target Event",
};

export const RIGHT__EVENT__ITEM__DELETE__OTHER: Right = {
    id: 3001062,
    code: RightCode.EVENT__ITEM__DELETE__OTHER,
    name: "Delete Other Event",
};

export const RIGHT__MESSAGE__LIST__VIEW: Right = {
    id: 3100000,
    code: RightCode.MESSAGE__LIST__VIEW,
    name: "View Messages",
};

export const RIGHT__MESSAGE__ITEM__CREATE: Right = {
    id: 3101001,
    code: RightCode.MESSAGE__ITEM__CREATE,
    name: "Send Message",
};

export const RIGHT__REVIEW__LIST__VIEW: Right = {
    id: 3200000,
    code: RightCode.REVIEW__LIST__VIEW,
    name: "View Reviews",
};

export const RIGHT__REVIEW__ITEM__CREATE: Right = {
    id: 3201001,
    code: RightCode.REVIEW__ITEM__CREATE,
    name: "Create Review",
};

export const RIGHT__TODO__LIST__VIEW: Right = {
    id: 3300000,
    code: RightCode.TODO__LIST__VIEW,
    name: "View Todos",
};

export const RIGHT__TODO__ITEM__VIEW: Right = {
    id: 3301000,
    code: RightCode.TODO__ITEM__VIEW,
    name: "View Todo",
};

export const RIGHT__TODO__ITEM__CREATE: Right = {
    id: 3301001,
    code: RightCode.TODO__ITEM__CREATE,
    name: "Add Todo",
};

export const RIGHT__TODO__ITEM__EDIT: Right = {
    id: 3301002,
    code: RightCode.TODO__ITEM__EDIT,
    name: "Edit Todo",
};

export const RIGHT__TODO__ITEM__DELETE: Right = {
    id: 3301003,
    code: RightCode.TODO__ITEM__DELETE,
    name: "Delete Todo",
};

export const RIGHT__USER__LIST__VIEW: Right = {
    id: 5000000,
    code: RightCode.USER__LIST__VIEW,
    name: "View Users",
};

export const RIGHT__USER__ITEM__VIEW: Right = {
    id: 5001000,
    code: RightCode.USER__ITEM__VIEW,
    name: "View User",
};

export const RIGHT__USER__ITEM__CREATE: Right = {
    id: 5001001,
    code: RightCode.USER__ITEM__CREATE,
    name: "Create User",
};

export const RIGHT__USER__ITEM__EDIT: Right = {
    id: 5001002,
    code: RightCode.USER__ITEM__EDIT,
    name: "Edit User",
};

export const RIGHT__USER__ITEM__DELETE: Right = {
    id: 5001003,
    code: RightCode.USER__ITEM__DELETE,
    name: "Delete User",
};

export const RIGHT__USER__PROFILE__VIEW: Right = {
    id: 5002000,
    code: RightCode.USER__PROFILE__VIEW,
    name: "View Profile",
};

export const RIGHT__USER__PROFILE__EDIT: Right = {
    id: 5002002,
    code: RightCode.USER__PROFILE__EDIT,
    name: "Edit Profile",
};

export const RIGHT__USER__SETTINGS__VIEW: Right = {
    id: 5003000,
    code: RightCode.USER__SETTINGS__VIEW,
    name: "View Settings",
};

export const RIGHT__USER__SETTINGS__EDIT: Right = {
    id: 5003002,
    code: RightCode.USER__SETTINGS__EDIT,
    name: "Edit Settings",
};

export const RIGHT__EMPLOYER__LIST__VIEW: Right = {
    id: 5100000,
    code: RightCode.EMPLOYER__LIST__VIEW,
    name: "View Employers List",
};

export const RIGHT__EMPLOYER__ITEM__VIEW: Right = {
    id: 5101000,
    code: RightCode.EMPLOYER__ITEM__VIEW,
    name: "View Employer",
};

export const RIGHT__EMPLOYER__TEAM_LIST__VIEW: Right = {
    id: 5102000,
    code: RightCode.EMPLOYER__TEAM_LIST__VIEW,
    name: "View Employer Teams List",
};

export const RIGHT__EMPLOYER__TEAM_MEMBER__EDIT: Right = {
    id: 5102102,
    code: RightCode.EMPLOYER__TEAM_MEMBER__EDIT,
    name: "Edit Member",
};

export const RIGHT__EMPLOYER__TEAM_MEMBER__DELETE: Right = {
    id: 5102103,
    code: RightCode.EMPLOYER__TEAM_MEMBER__DELETE,
    name: "Delete Member",
};

export const RIGHT__EMPLOYER__INVITE__CREATE: Right = {
    id: 5103001,
    code: RightCode.EMPLOYER__INVITE__CREATE,
    name: "Invite Member",
};

export const RIGHT__EMPLOYER__INVITE__DELETE: Right = {
    id: 5103003,
    code: RightCode.EMPLOYER__INVITE__DELETE,
    name: "Invite Member",
};

export const RIGHT__RECRUITER__LIST__VIEW: Right = {
    id: 5300000,
    code: RightCode.RECRUITER__LIST__VIEW,
    name: "View Recruiters List",
};

export const RIGHT__RECRUITER__ITEM__VIEW: Right = {
    id: 5301000,
    code: RightCode.RECRUITER__ITEM__VIEW,
    name: "View Recruiter",
};

export const RIGHT__CANDIDATE__LIST__VIEW: Right = {
    id: 5600000,
    code: RightCode.CANDIDATE__LIST__VIEW,
    name: "View Candidates List",
};

export const RIGHT__CANDIDATE__ITEM__VIEW: Right = {
    id: 5601000,
    code: RightCode.CANDIDATE__ITEM__VIEW,
    name: "View Candidate",
};

export const RIGHT__CANDIDATE__INVITE__CREATE: Right = {
    id: 5602001,
    code: RightCode.CANDIDATE__INVITE__CREATE,
    name: "Invite Candidate",
};

export const RIGHT__CANDIDATE__IDEAL_JOB__VIEW: Right = {
    id: 5603001,
    code: RightCode.CANDIDATE__IDEAL_JOB__VIEW,
    name: "View Ideal Job",
};

export const RIGHT__CANDIDATE__IDEAL_JOB__EDIT: Right = {
    id: 5603002,
    code: RightCode.CANDIDATE__IDEAL_JOB__EDIT,
    name: "Edit Ideal Job",
};

export const RIGHT__COMPANY__ITEM__VIEW: Right = {
    id: 5901000,
    code: RightCode.COMPANY__ITEM__VIEW,
    name: "View Company",
};

export const RIGHT__COMPANY__ITEM__EDIT: Right = {
    id: 5901002,
    code: RightCode.COMPANY__ITEM__EDIT,
    name: "Edit Company",
};

export const RIGHT__ADMIN__USER_LIST__VIEW: Right = {
    id: 9000000,
    code: RightCode.ADMIN__USER_LIST__VIEW,
    name: "View Users List",
};

export const RIGHT__ADMIN__USER__ACTIVATE: Right = {
    id: 9000104,
    code: RightCode.ADMIN__USER__ACTIVATE,
    name: "Activate User",
};

export const RIGHT__ADMIN__COMPANY__ACTIVATE: Right = {
    id: 9001004,
    code: RightCode.ADMIN__COMPANY__ACTIVATE,
    name: "Activate Company",
};

export const RIGHT__RESUME__LIST__VIEW: Right = {
    id: 6000000,
    code: RightCode.RESUME__LIST__VIEW,
    name: "View Resumes List",
};
export const RIGHT__RESUME__ITEM__VIEW: Right = {
    id: 6001000,
    code: RightCode.RESUME__ITEM__VIEW,
    name: "View Resume",
};

export const RIGHT__RESUME__ITEM__CREATE: Right = {
    id: 6001001,
    code: RightCode.RESUME__ITEM__CREATE,
    name: "Create Resume",
};

export const RIGHT__RESUME__ITEM__EDIT: Right = {
    id: 6001002,
    code: RightCode.RESUME__ITEM__EDIT,
    name: "Edit Resume",
};

export const RIGHT__RESUME__ITEM__DELETE: Right = {
    id: 6001003,
    code: RightCode.RESUME__ITEM__DELETE,
    name: "Delete Resume",
};

export const RIGHTS: Right[] = [
    RIGHT__JOB__LIST__VIEW,
    RIGHT__JOB__ITEM__VIEW,
    RIGHT__JOB__ITEM__CREATE,
    RIGHT__JOB__ITEM__EDIT,
    RIGHT__JOB__ITEM__DELETE,
    RIGHT__JOB__FAVORITE__EDIT,
    RIGHT__JOB__KANBAN__VIEW,
    RIGHT__JOB_APPLICATION__LIST__VIEW,
    RIGHT__JOB_APPLICATION__ITEM__REQUEST,
    RIGHT__JOB_APPLICATION__ITEM__APPROVE,
    RIGHT__JOB_APPLICATION__ITEM__AUTOAPPROVE,
    RIGHT__JOB_APPLICATION__ITEM__REJECT,
    RIGHT__JOB_APPLICATION__ITEM__WITHDRAW,
    RIGHT__JOB_APPLICATION__RECRUITER_LIST__VIEW,
    RIGHT__JOB_APPLICATION__CANDIDATE_LIST__VIEW,
    RIGHT__JOB_APPLICATION__CANDIDATE__ADD,
    RIGHT__JOB_APPLICATION__CANDIDATE__EDIT,
    RIGHT__JOB_APPLICATION__CANDIDATE__DELETE,
    RIGHT__JOB_APPLICATION__CANDIDATE__REJECT,
    RIGHT__STAGE__LIST__VIEW,
    RIGHT__STAGE__ITEM__CREATE,
    RIGHT__STAGE__ITEM__EDIT,
    RIGHT__STAGE__ITEM__DELETE,
    RIGHT__JOB_HIRES__LIST__VIEW,
    RIGHT__JOB_HIRES__ITEM__VIEW,
    RIGHT__JOB_HIRES__ITEM__CREATE,
    RIGHT__JOB_HIRES__ITEM__DELETE,
    RIGHT__EVENT__LIST__VIEW,
    RIGHT__EVENT__ITEM__VIEW,
    RIGHT__EVENT__ITEM__CREATE,
    RIGHT__EVENT__ITEM__EDIT__OWN,
    RIGHT__EVENT__ITEM__EDIT__TARGET,
    RIGHT__EVENT__ITEM__EDIT__OTHER,
    RIGHT__EVENT__ITEM__CONFIRM__OWN,
    RIGHT__EVENT__ITEM__CONFIRM__TARGET,
    RIGHT__EVENT__ITEM__CONFIRM__OTHER,
    RIGHT__EVENT__ITEM__RESCHEDULE__OWN,
    RIGHT__EVENT__ITEM__RESCHEDULE__TARGET,
    RIGHT__EVENT__ITEM__RESCHEDULE__OTHER,
    RIGHT__EVENT__ITEM__REFUSE__OWN,
    RIGHT__EVENT__ITEM__REFUSE__TARGET,
    RIGHT__EVENT__ITEM__REFUSE__OTHER,
    RIGHT__EVENT__ITEM__DELETE__OWN,
    RIGHT__EVENT__ITEM__DELETE__TARGET,
    RIGHT__EVENT__ITEM__DELETE__OTHER,
    RIGHT__MESSAGE__LIST__VIEW,
    RIGHT__MESSAGE__ITEM__CREATE,
    RIGHT__REVIEW__LIST__VIEW,
    RIGHT__REVIEW__ITEM__CREATE,
    RIGHT__TODO__LIST__VIEW,
    RIGHT__TODO__ITEM__CREATE,
    RIGHT__TODO__ITEM__EDIT,
    RIGHT__TODO__ITEM__DELETE,
    RIGHT__USER__LIST__VIEW,
    RIGHT__USER__ITEM__VIEW,
    RIGHT__USER__ITEM__CREATE,
    RIGHT__USER__ITEM__EDIT,
    RIGHT__USER__ITEM__DELETE,
    RIGHT__USER__PROFILE__VIEW,
    RIGHT__USER__PROFILE__EDIT,
    RIGHT__USER__SETTINGS__VIEW,
    RIGHT__USER__SETTINGS__EDIT,
    RIGHT__EMPLOYER__LIST__VIEW,
    RIGHT__EMPLOYER__ITEM__VIEW,
    RIGHT__EMPLOYER__TEAM_LIST__VIEW,
    RIGHT__EMPLOYER__TEAM_MEMBER__DELETE,
    RIGHT__EMPLOYER__INVITE__CREATE,
    RIGHT__EMPLOYER__INVITE__DELETE,
    RIGHT__RECRUITER__LIST__VIEW,
    RIGHT__RECRUITER__ITEM__VIEW,
    RIGHT__CANDIDATE__LIST__VIEW,
    RIGHT__CANDIDATE__ITEM__VIEW,
    RIGHT__CANDIDATE__INVITE__CREATE,
    RIGHT__CANDIDATE__IDEAL_JOB__VIEW,
    RIGHT__CANDIDATE__IDEAL_JOB__EDIT,
    RIGHT__COMPANY__ITEM__VIEW,
    RIGHT__COMPANY__ITEM__EDIT,
    RIGHT__ADMIN__USER_LIST__VIEW,
    RIGHT__ADMIN__USER__ACTIVATE,
    RIGHT__ADMIN__COMPANY__ACTIVATE,
    RIGHT__RESUME__LIST__VIEW,
    RIGHT__RESUME__ITEM__VIEW,
    RIGHT__RESUME__ITEM__CREATE,
    RIGHT__RESUME__ITEM__EDIT,
    RIGHT__RESUME__ITEM__DELETE,
];