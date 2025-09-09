import { JobTypeCode } from "../constants";
import type { JobType } from "../index";

export const JOB_TYPE_FULL_TIME: JobType = {
    id: 1,
    code: JobTypeCode.FULL_TIME,
    name: "Full Time",
};
export const JOB_TYPE_PART_TIME: JobType = {
    id: 2,
    code: JobTypeCode.PART_TIME,
    name: "Part Time",
};
export const JOB_TYPE_CONTRACT: JobType = {
    id: 3,
    code: JobTypeCode.CONTRACT,
    name: "Contract",
};
export const JOB_TYPES: JobType[] = [
    JOB_TYPE_FULL_TIME,
    JOB_TYPE_PART_TIME,
    JOB_TYPE_CONTRACT,
];