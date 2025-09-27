import { TagTypeCode } from "./../constants.js";
import type { TagType } from "./../index.js";

export const TAG_TYPE_TAG: TagType = {
    id: 1,
    code: TagTypeCode.TAG,
    name: "Tag",
};

export const TAG_TYPE_SKILL: TagType = {
    id: 2,
    code: TagTypeCode.SKILL,
    name: "Skill",
};

export const TAG_TYPES: TagType[] = [
    TAG_TYPE_TAG,
    TAG_TYPE_SKILL,
];