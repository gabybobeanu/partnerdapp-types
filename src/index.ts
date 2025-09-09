import type { JobApplicationStatusCode, JobTypeCode, JobUrgencyCode, PresenceStatusCode, ProfileCode, SkillTypeCode, TagTypeCode } from "./constants";

export interface Profile {
	id: number;
	code: ProfileCode;
	name: string;
}
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

export interface PresenceStatus {
	id: number;
	code: PresenceStatusCode;
	name: string;
}

export interface JobType {
	id: number;
	code: JobTypeCode;
	name: string;
}

export interface JobUrgency {
	id: number;
	code: JobUrgencyCode;
	name: string;
}
export interface TagType {
	id: number;
	code: TagTypeCode;
	name: string;
}

export interface Tag {
	id: number;
	name: string;
	type: TagType;
}

export interface SkillType {
	id: number;
	code: SkillTypeCode
	name: string;
}

export interface Skill {
	id: number;
	name: string;
	type: SkillType;
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

	min_salary?: number;
	max_salary?: number;
	visible_salary?: boolean;
	currency_code?: string;

	presenceStatuses: OptionItem[];
	job_presence_statuses?: any[];
	languages?: OptionItem[];
	job_languages?: any[];
	tags?: Tag[]; // includes free tags and skills
	job_tags?: any[];
	skills?: Skill[]; // includes technical, other, bonus
	job_skills?: any[]; // includes technical, other, bonus
	benefits?: OptionItem[];
	job_benefits?: any[];

	created_at: Date;
	updated_at?: Date;
	created_by: number;
	updated_by?: number;

	job_applications? : any[];
}

export interface JobApplicationStatus {
	id: number;
	code: JobApplicationStatusCode;
	name: string;
}

export interface JobApplication {
	recruiter_id: number;
	recruiter: any;
	job_id: number;
	job: Job;
	status_id: number;
	status: JobApplicationStatus;
	applied_at: Date;
}