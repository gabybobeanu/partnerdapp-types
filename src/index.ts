import type { JobApplicationStatusCode, JobTypeCode, PresenceStatusCode, ProfileCode, RightCode, RoleCode, SkillTypeCode, TagTypeCode, UrgencyCode } from "./constants.js";
export * from "./constants.js";
export * from "./objects/stage.js";
export * from "./objects/job-application-status.js";
export * from "./objects/job-type.js";
export * from "./objects/presence-status.js";
export * from "./objects/profile.js";
export * from "./objects/right.js";
export * from "./objects/role.js";
export * from "./objects/skill-type.js";
export * from "./objects/tag-type.js";
export * from "./objects/urgency.js";
export * from "./objects/stage-category.js";
export * from "./objects/stage-owner-type.js";
export * from "./objects/stage-type.js";

export interface Profile {
	id: number;
	code: ProfileCode;
	name: string;
}

export interface OptionItem {
	id: number;
	name: string;
}

export interface OptionItemLvl2 {
	id: number;
	name: string;
	nameCorrespondence: string;
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
	languages?: OptionItemLvl2[];
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
	stages?: Stage[];
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
	rating?: number;
	linkedin?: string;

	profile_id: number;
	profile: Profile;
	role_id: number;
	role: Role;

	stages?: Stage[];

	recruiter?: Recruiter;

	created_at: Date;
	updated_at?: Date;
}
export interface Recruiter {
	id: number;
	user: User;
	company_id: number;
	company: Company;
	public_email: boolean;
	public_phone: boolean;
	signature: string;
	summary?: string;
	invoice_agreement: boolean;
	job_applications: JobApplication[];

	autoApprovals: AutoApproval[];
}

export interface Employer {
	id: number;
	user: User;
	// company_id: number;
	// company: Company;
	signature: string;

	created_jobs: Job[];
	updated_jobs: Job[];

	autoApprovals: AutoApproval[];
}

export interface AutoApproval {
	employer_id: number;
	employer: Employer;
	recruiter_id: number;
	recruiter: Recruiter;
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

export interface Role {
	id: number;
	code: RoleCode;
	name: string;
	description?: string;
	profile_id: number;
	profile: Profile;
	users?: User[];
	invites?: EmployerInvite[];
	roleRights?: RoleRight[];
}

export interface EmployerInvite {
	id: number;
	token: string;
	inviter_user_id: number;
	company_id: number | null;
	company: Company | null;
	role_id: number;
	role: Role | null;
	email: string;
	name: string | null;
	surname: string | null;
	expires_at: Date | null;
	consumed_at: Date | null;
	new_user_id: number | null;
}

export interface JobInvite {
	id: number;
	token: string;
	job_id: number;
	job: Job;
	recruiter_id: number;
	recruiter: Recruiter;
	candidate_email: string;
	candidate_name: string;
	status_id: number;
	created_at: Date;
	consumed_at?: Date;
	expires_at?: Date;
	candidate_id?: number;
	candidate?: Candidate;
}

export interface Right {
	id: number;
	code: RightCode;
	name: string;
	description?: string;
	roleRights?: RoleRight[];
}

export interface RoleRight {
	role_id: number;
	role: Role;
	right_id: number;
	right: Right;
}

export interface Candidate {
	id: number;
	description?: string;
	city?: string;
	country?: string;
	country_code?: string;
	user: User;
	resumes: any[];
	applications: CandidateJobApplication[];
	ideal_jobs: IdealJob[];
	pool: CandidatePool[];
}

export interface CandidatePool {
	recruiter_id: number;
	recruiter: Recruiter;
	candidate_id: number;
	candidate: Candidate;
}

export interface CandidateJobApplication {
	recruiter_id: number;
	job_id: number;
	jobApplication: JobApplication;
	candidate_id: number;
	candidate: Candidate;
	stage_id?: number;
	stage?: Stage;
	active?: boolean;
}

export interface IdealJob {
	id: number;
	candidate: Candidate;
	location?: string;
	currency_code?: string;
	salary?: number;
	vacation_days?: number;
	relocate?: boolean;
	departments?: OptionItem[];
	job_types?: OptionItem[];
	presence_statuses?: IdealJobPresenceStatus[];
	benefits?: OptionItem[];
}

export interface IdealJobPresenceStatus {
	ideal_job_id: number;
	ideal_job: IdealJob
	presence_status_id: number;
	presence_status: PresenceStatus[];
}

export interface StageType {
	id: number;
	name: string;
	stages?: Stage[];
}

export interface StageCategory {
	id: number;
	name: string;
	stages?: Stage[];
}

export interface StageOwnerType {
	id: number;
	name: string;
	stages?: Stage[];
}

export interface Stage {
	id?: number;
	name: string;
	job_id?: number;
	job?: Job;
	type_id: number;
	type: StageType;
	category_id: number;
	category: StageCategory;
	owner_type_id: number;
	owner_type: StageOwnerType;
	owner_id?: number;
	owner?: User;
	sequence?: number;

	applications?: CandidateJobApplication[];
}

export interface CalendarEvent {
	event_id: number;
	job_id: number;
  	job: Job;
	candidate_id: number;
	candidate: Candidate;
	employer_id: number;
	employer: Employer;
	publicDetails: string;
	privateDetails: string;
	created_at: Date;
}
