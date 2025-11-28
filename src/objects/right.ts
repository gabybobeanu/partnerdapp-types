import { RightCode } from "../constants.js";
import type { Right } from "../index.js";

export const RIGHT_VIEW_JOBS_LIST: Right = {
    id: 1,
    code: RightCode.VIEW_JOBS_LIST,
    name: "View Jobs List",
};
export const RIGHT_VIEW_JOB: Right = {
    id: 2,
    code: RightCode.VIEW_JOB,
    name: "View Job",
};
export const RIGHT_CREATE_JOB: Right = {
    id: 3,
    code: RightCode.CREATE_JOB,
    name: "Create Job",
};
export const RIGHT_EDIT_JOB: Right = {
    id: 4,
    code: RightCode.EDIT_JOB,
    name: "Edit Job",
};
export const RIGHT_DELETE_JOB: Right = {
    id: 5,
    code: RightCode.DELETE_JOB,
    name: "Delete Job",
};

export const RIGHT_VIEW_SETTINGS: Right = {
    id: 6,
    code: RightCode.VIEW_SETTINGS,
    name: "View Settings",
};
export const RIGHT_EDIT_SETTINGS: Right = {
    id: 7,
    code: RightCode.EDIT_SETTINGS,
    name: "Edit Settings",
};
export const RIGHT_VIEW_PROFILE: Right = {
    id: 8,
    code: RightCode.VIEW_PROFILE,
    name: "View Profile",
};
export const RIGHT_EDIT_PROFILE: Right = {
    id: 9,
    code: RightCode.EDIT_PROFILE,
    name: "Edit Profile",
};
export const RIGHT_VIEW_COMPANY: Right = {
    id: 10,
    code: RightCode.VIEW_COMPANY,
    name: "View Company",
};
export const RIGHT_EDIT_COMPANY: Right = {
    id: 11,
    code: RightCode.EDIT_COMPANY,
    name: "Edit Company",
};
export const RIGHT_VIEW_TEAM: Right = {
    id: 12,
    code: RightCode.VIEW_TEAM,
    name: "View Team",
};
export const RIGHT_INVITE_MEMBER: Right = {
    id: 13,
    code: RightCode.INVITE_MEMBER,
    name: "Invite Member",
};
export const RIGHT_EDIT_MEMBER: Right = {
    id: 14,
    code: RightCode.EDIT_MEMBER,
    name: "Edit Member",
};
export const RIGHT_DELETE_MEMBER: Right = {
    id: 15,
    code: RightCode.DELETE_MEMBER,
    name: "Delete Member",
};
export const RIGHT_VIEW_RECRUITERS_LIST: Right = {
    id: 16,
    code: RightCode.VIEW_RECRUITERS_LIST,
    name: "View Recruiters List",
};
export const RIGHT_VIEW_RECRUITER: Right = {
    id: 17,
    code: RightCode.VIEW_RECRUITER,
    name: "View Recruiter",
};
export const RIGHT_APPROVE_RECRUITER: Right = {
    id: 18,
    code: RightCode.APPROVE_RECRUITER,
    name: "Approve Recruiter",
};
export const RIGHT_REJECT_RECRUITER: Right = {
    id: 19,
    code: RightCode.REJECT_RECRUITER,
    name: "Reject Recruiter",
};
export const RIGHT_AUTOAPPROVE_RECRUITER: Right = {
    id: 20,
    code: RightCode.AUTOAPPROVE_RECRUITER,
    name: "Auto-approve Recruiter",
};
export const RIGHT_VIEW_JOB_KANBAN: Right = {
    id: 21,
    code: RightCode.VIEW_JOB_KANBAN,
    name: "View Job Kanban",
};
export const MOVE_CANDIDATE_TO_STAGE: Right = {
    id: 22,
    code: RightCode.MOVE_CANDIDATE_TO_STAGE,
    name: "Move Candidate to Stage",
};
export const ADD_KANBAN_STAGE: Right = {
    id: 23,
    code: RightCode.ADD_KANBAN_STAGE,
    name: "Add Kanban Stage",
};
export const EDIT_KANBAN_STAGE_NAME: Right = {
    id: 24,
    code: RightCode.EDIT_KANBAN_STAGE_NAME,
    name: "Edit Kanban Stage Name",
};
// export const EDIT_KANBAN_STAGE_TYPE: Right = {
//     id: 25,
//     code: RightCode.EDIT_KANBAN_STAGE_TYPE,
//     name: "Edit Kanban Stage Type",
// };
export const DELETE_KANBAN_STAGE: Right = {
    id: 26,
    code: RightCode.DELETE_KANBAN_STAGE,
    name: "Delete Kanban Stage",
};
export const HIRE_CANDIDATE: Right = {
    id: 27,
    code: RightCode.HIRE_CANDIDATE,
    name: "Hire Candidate",
};
export const REJECT_CANDIDATE: Right = {
    id: 28,
    code: RightCode.REJECT_CANDIDATE,
    name: "Reject Candidate",
};
export const ADD_KANBAN_STAGE_TRIGGER: Right = {
    id: 29,
    code: RightCode.ADD_KANBAN_STAGE_TRIGGER,
    name: "Add Kanban Stage Trigger",
};
export const EDIT_KANBAN_STAGE_ORDER: Right = {
    id: 30,
    code: RightCode.EDIT_KANBAN_STAGE_ORDER,
    name: "Edit Kanban Stage Order",
};
export const VIEW_REVIEWS: Right = {
    id: 31,
    code: RightCode.VIEW_REVIEWS,
    name: "View Reviews",
};
export const CREATE_REVIEW: Right = {
    id: 32,
    code: RightCode.CREATE_REVIEW,
    name: "Create Review",
};
export const VIEW_MESSAGES: Right = {
    id: 33,
    code: RightCode.VIEW_MESSAGES,
    name: "View Messages",
};
export const SEND_MESSAGE: Right = {
    id: 34,
    code: RightCode.SEND_MESSAGE,
    name: "Send Message",
};
export const VIEW_NOTES: Right = {
    id: 35,
    code: RightCode.VIEW_NOTES,
    name: "View Notes",
};
export const ADD_NOTE: Right = {
    id: 36,
    code: RightCode.ADD_NOTE,
    name: "Add Note",
};
export const VIEW_TODOS: Right = {
    id: 37,
    code: RightCode.VIEW_TODOS,
    name: "View Todos",
};
export const ADD_TODO: Right = {
    id: 38,
    code: RightCode.ADD_TODO,
    name: "Add Todo",
};
export const VIEW_INTERVIEWS: Right = {
    id: 39,
    code: RightCode.VIEW_INTERVIEWS,
    name: "View Interviews",
};
export const SCHEDULE_INTERVIEW: Right = {
    id: 40,
    code: RightCode.SCHEDULE_INTERVIEW,
    name: "Schedule Interview",
};
export const EDIT_INTERVIEW: Right = {
    id: 41,
    code: RightCode.EDIT_INTERVIEW,
    name: "Edit Interview",
};
export const CANCEL_INTERVIEW: Right = {
    id: 42,
    code: RightCode.CANCEL_INTERVIEW,
    name: "Cancel Interview",
};
export const EDIT_TODO: Right = {
    id: 43,
    code: RightCode.EDIT_TODO,
    name: "Edit Todo",
};
export const DELETE_TODO: Right = {
    id: 44,
    code: RightCode.DELETE_TODO,
    name: "Delete Todo",
};

export const VIEW_EVENTS_LIST: Right = {
    id: 45,
    code: RightCode.VIEW_EVENTS_LIST,
    name: "View Events List",
};
export const VIEW_EVENT: Right = {
    id: 46,
    code: RightCode.VIEW_EVENT,
    name: "View Event",
};
export const CREATE_EVENT: Right = {
    id: 47,
    code: RightCode.CREATE_EVENT,
    name: "Create Event",
};
export const EDIT_EVENT: Right = {
    id: 48,
    code: RightCode.EDIT_EVENT,
    name: "Edit Event",
};
export const DELETE_EVENT: Right = {
    id: 49,
    code: RightCode.DELETE_EVENT,
    name: "Delete Event",
};

export const RIGHTS: Right[] = [
    RIGHT_VIEW_JOBS_LIST,
    RIGHT_VIEW_JOB,
    RIGHT_CREATE_JOB,
    RIGHT_EDIT_JOB,
    RIGHT_DELETE_JOB,
    RIGHT_VIEW_SETTINGS,
    RIGHT_EDIT_SETTINGS,
    RIGHT_VIEW_PROFILE,
    RIGHT_EDIT_PROFILE,
    RIGHT_VIEW_COMPANY,
    RIGHT_EDIT_COMPANY,
    RIGHT_VIEW_TEAM,
    RIGHT_INVITE_MEMBER,
    RIGHT_EDIT_MEMBER,
    RIGHT_DELETE_MEMBER,
    RIGHT_VIEW_RECRUITERS_LIST,
    RIGHT_VIEW_RECRUITER,
    RIGHT_APPROVE_RECRUITER,
    RIGHT_REJECT_RECRUITER,
    RIGHT_AUTOAPPROVE_RECRUITER,
];