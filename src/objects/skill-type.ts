import { SkillTypeCode } from "../constants.js";
import type { SkillType } from "../index.js";

export const SKILL_TYPE_TECHNICAL: SkillType = {
    id: 1,
    code: SkillTypeCode.TECHNICAL,
    name: "Technical",
};

export const SKILL_TYPE_OTHER: SkillType = {
    id: 2,
    code: SkillTypeCode.OTHER,
    name: "Other",
};

export const SKILL_TYPE_BONUS: SkillType = {
    id: 3,
    code: SkillTypeCode.BONUS,
    name: "Bonus",
};

export const SKILL_TYPES: SkillType[] = [
    SKILL_TYPE_TECHNICAL,
    SKILL_TYPE_OTHER,
    SKILL_TYPE_BONUS,
];