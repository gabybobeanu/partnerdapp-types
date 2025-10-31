import { StageCategoryName } from "../constants.js";
import type { StageCategory } from "../index.js";

export const STAGE_CATEGORY_MANDATORY: StageCategory = {
    id: 1,
    name: StageCategoryName.MANDATORY,
};
export const STAGE_CATEGORY_DEFAULT: StageCategory = {
    id: 2,
    name: StageCategoryName.DEFAULT,
};
export const STAGE_CATEGORY_CUSTOM: StageCategory = {
    id: 3,
    name: StageCategoryName.CUSTOM,
};

export const STAGE_CATEGORIES: StageCategory[] = [
    STAGE_CATEGORY_MANDATORY,
    STAGE_CATEGORY_DEFAULT,
    STAGE_CATEGORY_CUSTOM,
];