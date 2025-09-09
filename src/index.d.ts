export interface OptionItem {
    id: number;
    name: string;
}
export interface CategoryOptionItem {
    id: number;
    level?: number;
    name: string;
    subcategories: OptionItem[];
}
export interface GroupedOptionItem extends OptionItem {
    categoryName: string;
}
export interface TagType {
    id: number;
    name: string;
}
export interface Tag {
    id: number;
    name: string;
    type: TagType;
}
export interface SkillType {
    id: number;
    name: string;
}
export interface Skill {
    id: number;
    name: string;
    type: SkillType;
    position: number;
}
export interface Job {
    id: number;
    title: string;
    seniority: OptionItem;
    department: OptionItem;
    location: OptionItem;
    job_type: OptionItem;
    description: string;
    urgency: OptionItem;
    positions: number;
    minSalary?: number;
    maxSalary?: number;
    visibleSalary?: boolean;
    currencyCode?: string;
    currencySymbol?: string;
    presenceStatuses: OptionItem[];
    job_presence_statuses?: any[];
    languages?: OptionItem[];
    job_languages?: any[];
    tags?: Tag[];
    job_tags?: any[];
    skills?: Skill[];
    job_skills?: any[];
    benefits?: OptionItem[];
    job_benefits?: any[];
    createdAt: Date;
    updatedAt?: Date;
    createdBy: number;
    updatedBy?: number;
}
//# sourceMappingURL=index.d.ts.map