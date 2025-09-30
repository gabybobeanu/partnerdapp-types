import { ProfileCode } from "../constants.js";
import type { Profile } from "../index.js";


export const PROFILE_EMPLOYER: Profile = {
    id: 1,
    code: ProfileCode.EMPLOYER,
    name: "Employer",
};
export const PROFILE_RECRUITER: Profile = {
    id: 2,
    code: ProfileCode.RECRUITER,
    name: "Recruiter",
};
export const PROFILE_CANDIDATE: Profile = {
    id: 3,
    code: ProfileCode.CANDIDATE,
    name: "Candidate",
};
export const PROFILES: Profile[] = [
    PROFILE_RECRUITER,
    PROFILE_EMPLOYER,
    PROFILE_CANDIDATE,
];