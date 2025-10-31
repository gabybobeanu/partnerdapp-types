import { JobTypeCode, StageTypeName } from "../constants.js";
import type { JobType, StageType } from "../index.js";

export const STAGE_TYPE_SCREENING: StageType = {
    id: 1,
    name: StageTypeName.SCREENING,
};
export const STAGE_TYPE_INTERVIEW: StageType = {
    id: 2,
    name: StageTypeName.INTERVIEW,
};
export const STAGE_TYPE_OFFER: StageType = {
    id: 3,
    name: StageTypeName.OFFER,
};

export const STAGE_TYPES: StageType[] = [
    STAGE_TYPE_SCREENING,
    STAGE_TYPE_INTERVIEW,
    STAGE_TYPE_OFFER,
];