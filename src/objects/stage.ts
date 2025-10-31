import type { Stage } from "../index.js";
import { STAGE_CATEGORY_DEFAULT, STAGE_CATEGORY_MANDATORY } from "./stage-category.js";
import { STAGE_OWNER_TYPE_EMPLOYER, STAGE_OWNER_TYPE_RECRUITER } from "./stage-owner-type.js";
import { STAGE_TYPE_INTERVIEW, STAGE_TYPE_OFFER, STAGE_TYPE_SCREENING } from "./stage-type.js";

export const STAGE_SHORTLIST: Stage = {
    name: "Shortlist",
    type_id: STAGE_TYPE_SCREENING.id,
    type: STAGE_TYPE_SCREENING,
    category_id: STAGE_CATEGORY_MANDATORY.id,
    category: STAGE_CATEGORY_MANDATORY,
    owner_type_id: STAGE_OWNER_TYPE_RECRUITER.id,
    owner_type: STAGE_OWNER_TYPE_RECRUITER,
    sequence: 1
}

export const STAGE_INBOX: Stage = {
    name: "Inbox",
    type_id: STAGE_TYPE_SCREENING.id,
    type: STAGE_TYPE_SCREENING,
    category_id: STAGE_CATEGORY_MANDATORY.id,
    category: STAGE_CATEGORY_MANDATORY,
    owner_type_id: STAGE_OWNER_TYPE_EMPLOYER.id,
    owner_type: STAGE_OWNER_TYPE_EMPLOYER,
    sequence: 2
}

export const STAGE_REVIEW: Stage = {
    name: "Review",
    type_id: STAGE_TYPE_INTERVIEW.id,
    type: STAGE_TYPE_INTERVIEW,
    category_id: STAGE_CATEGORY_DEFAULT.id,
    category: STAGE_CATEGORY_DEFAULT,
    owner_type_id: STAGE_OWNER_TYPE_EMPLOYER.id,
    owner_type: STAGE_OWNER_TYPE_EMPLOYER,
    sequence: 3
}

export const STAGE_INTERVIEW: Stage = {
    name: "Interview",
    type_id: STAGE_TYPE_INTERVIEW.id,
    type: STAGE_TYPE_INTERVIEW,
    category_id: STAGE_CATEGORY_DEFAULT.id,
    category: STAGE_CATEGORY_DEFAULT,
    owner_type_id: STAGE_OWNER_TYPE_EMPLOYER.id,
    owner_type: STAGE_OWNER_TYPE_EMPLOYER,
    sequence: 4
}

export const STAGE_OFFERED: Stage = {
    name: "Offered",
    type_id: STAGE_TYPE_OFFER.id,
    type: STAGE_TYPE_OFFER,
    category_id: STAGE_CATEGORY_DEFAULT.id,
    category: STAGE_CATEGORY_DEFAULT,
    owner_type_id: STAGE_OWNER_TYPE_EMPLOYER.id,
    owner_type: STAGE_OWNER_TYPE_EMPLOYER,
    sequence: 5
}

export const STAGE_HIRED: Stage = {
    name: "Hired",
    type_id: STAGE_TYPE_OFFER.id,
    type: STAGE_TYPE_OFFER,
    category_id: STAGE_CATEGORY_MANDATORY.id,
    category: STAGE_CATEGORY_MANDATORY,
    owner_type_id: STAGE_OWNER_TYPE_EMPLOYER.id,
    owner_type: STAGE_OWNER_TYPE_EMPLOYER,
    sequence: 6
}

export const INITIAL_STAGES: Stage[] = [
    STAGE_SHORTLIST,
    STAGE_INBOX,
    STAGE_REVIEW,
    STAGE_INTERVIEW,
    STAGE_OFFERED,
    STAGE_HIRED,
];