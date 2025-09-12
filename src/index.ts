import type { JobApplicationStatusCode, JobTypeCode, PresenceStatusCode, ProfileCode, SkillTypeCode, TagTypeCode, UrgencyCode } from "./constants";
export * from "./constants";
export * from "./objects/job-application-status";
export * from "./objects/job-type";
export * from "./objects/presence-status";
export * from "./objects/profile";
export * from "./objects/skill-type";
export * from "./objects/tag-type";
export * from "./objects/urgency";

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

export interface Urgency {
	id: number;
	code: UrgencyCode;
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
	tag_type_id: number;
	tag_type: TagType;
}

export interface JobTag {
	job_id: number;
	job: Job;
	tag_id: number;
	tag: Tag;
}

export interface SkillType {
	id: number;
	code: SkillTypeCode;
	name: string;
}

export interface Skill {
	id: number;
	name: string;
	skill_type_id: number;
	skill_type: SkillType;
}

export interface JobSkill {
	job_id: number;
	job: Job;
	skill_id: number;
	skill: Skill;
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

	min_salary?: number;
	max_salary?: number;
	visible_salary?: boolean;
	currency_code?: string;

	presenceStatuses: OptionItem[];
	job_presence_statuses?: any[];
	languages?: OptionItem[];
	job_languages?: any[];
	job_tags?: JobTag[]; // includes free tags and skills
	job_skills?: JobSkill[]; // includes technical, other, bonus
	benefits?: OptionItem[];
	job_benefits?: any[];

	created_at: Date;
	updated_at?: Date;
	created_by: number;
	updated_by?: number;

	job_applications?: any[];
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

export interface Title {
	id: number;
	code: string;
	name: string;
}
export interface Gender {
	id: number;
	code: string;
	name: string;
}
export interface Pronoun {
	id: number;
	code: string;
	name: string;
}
export interface User {
	id: number;
	clerk_id: number;
	email: string;
	name: string;
	surname: string;
	phone: string;
	avatar?: number[] | undefined;

	gender_id?: number;
	gender?: Gender;
	title_id?: number;
	title?: Title;
	pronoun_id?: number;
	pronoun?: Pronoun;

	profile_id: number;
	profile: Profile;

	recruiter?: Recruiter;

	created_at: Date;
	updated_at?: Date;
}
export interface Recruiter {
	id: number;
	user: User;
	// company_id: number;
	// company: Company;
	public_email: boolean;
	public_phone: boolean;
	signature: string;
	invoice_agreement: boolean;
	job_applications: JobApplication[];
}

export interface Employer {
	id: number;
	user: User;
	// company_id: number;
	// company: Company;
	signature: string;

	created_jobs: Job[];
	updated_jobs: Job[];
}

export interface CompanyLocation {
	id: number;
	company_id: number;		
	company: Company
	city?: string
	country?: string
	country_code?: string;
	postal_code?: string;
	address_1?: string;
	address_2?: string;
}
export interface Company {
	id: number;
	name: string;
	vat_number?: string;
	registration_number?: string;

	iban?: string;
	bank_name?: string;
	swift_code?: string;
	currency_code?: string;
	phone?: string;
	logo?: number[] | undefined;
	description?: string;

	locations: CompanyLocation[];

	employers: Employer[];
	recruiters: Recruiter[];
}