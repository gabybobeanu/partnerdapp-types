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