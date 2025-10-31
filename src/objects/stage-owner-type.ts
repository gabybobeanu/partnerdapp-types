import { JobTypeCode, StageOwnerTypeName, StageTypeName } from "../constants.js";
import type { JobType, StageOwnerType, StageType } from "../index.js";

export const STAGE_OWNER_TYPE_EMPLOYER: StageOwnerType = {
    id: 1,
    name: StageOwnerTypeName.EMPLOYER,
};
export const STAGE_OWNER_TYPE_RECRUITER: StageOwnerType = {
    id: 2,
    name: StageOwnerTypeName.RECRUITER,
};

export const STAGE_OWNER_TYPES: StageOwnerType[] = [
    STAGE_OWNER_TYPE_EMPLOYER,
    STAGE_OWNER_TYPE_RECRUITER,
];