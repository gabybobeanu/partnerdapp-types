import { PROFILE_EMPLOYER, RoleCode, type Role } from "../index.js";

export const ROLE_ADMINISTRATOR: Role = {
    id: 1,
    code: RoleCode.ADMINISTRATOR,
    name: "Administrator",
    profile_id: PROFILE_EMPLOYER.id,
    profile: PROFILE_EMPLOYER,
};

export const ROLE_HIRING_TEAM: Role = {
    id: 2,
    code: RoleCode.HIRING_TEAM,
    name: "Recruiter",
    profile_id: PROFILE_EMPLOYER.id,
    profile: PROFILE_EMPLOYER,
};
export const ROLE_CONTENT_MANAGER: Role = {
    id: 3,
    code: RoleCode.CONTENT_MANAGER,
    name: "Content Manager",
    profile_id: PROFILE_EMPLOYER.id,
    profile: PROFILE_EMPLOYER,
};
export const ROLE_NO_ACCESS: Role = {
    id: 4,
    code: RoleCode.NO_ACCESS,
    name: "No Access",
    profile_id: PROFILE_EMPLOYER.id,
    profile: PROFILE_EMPLOYER,
};
export const ROLE_RECRUITER: Role = {
    id: 5,
    code: RoleCode.RECRUITER,
    name: "Recruiter",
    profile_id: PROFILE_EMPLOYER.id,
    profile: PROFILE_EMPLOYER,
};
export const ROLE_CANDIDATE: Role = {
    id: 6,
    code: RoleCode.CANDIDATE,
    name: "Candidate",
    profile_id: PROFILE_EMPLOYER.id,
    profile: PROFILE_EMPLOYER,
};

export const ROLES: Role[] = [
    ROLE_ADMINISTRATOR,
    ROLE_HIRING_TEAM,
    ROLE_CONTENT_MANAGER,
    ROLE_NO_ACCESS,
    ROLE_RECRUITER,
    ROLE_CANDIDATE,
];