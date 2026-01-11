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
export * from "./objects/calendar-event-status.js";
export * from "./objects/calendar-event-type.js";
export * from "./objects/activity-type.js";

export interface Profile {
	id: number;
	code: ProfileCode;
	name: string;
	roles?: Role[];
	users?: User[];
	notifTypes?: any[]; //TODO: define notification type
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
	job_presence_statuses?: JobPresenceStatus[];
	ideal_job_presence_statuses?: IdealJobPresenceStatus[];
}

export interface JobType {
	id: number;
	code: JobTypeCode;
	name: string;
	jobs?: Job[];
	ideal_job_types?: IdealJobType[];
}

export interface Urgency {
	id: number;
	code: UrgencyCode;
	name: string;
	jobs?: Job[];
}
export interface TagType {
	id: number;
	code: TagTypeCode;
	name: string;
	tags?: Tag[];
}

export interface Tag {
	id: number;
	name: string;
	tag_type_id: number;
	tag_type: TagType;
	job_tags?: JobTag[];
	candidate_tags?: CandidateTag[];
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
	skills?: Skill[];
}

export interface Skill {
	id: number;
	name: string;
	skill_type_id: number;
	skill_type: SkillType;

	job_skills?: JobSkill[];
	candidate_skills?: CandidateSkill[];
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
	job_benefits?: JobBenefit[];

	created_at: Date;
	updated_at?: Date;
	created_by: number;
	updated_by?: number;
	creator?: Employer;
	updater?: Employer;

	job_applications?: JobApplication[];
	invites?: CandidateInvite[];
	stages?: Stage[];
	calendar_events?: CalendarEvent[];
	favorite_for_users?: FavoriteJob[];
	job_hires?: JobHire[];
}

export interface JobPresenceStatus {
	job_id: number;
	job: Job;
	presence_status_id: number;
	presence_status: PresenceStatus;
}

export interface JobLanguage {
	job_id: number;
	job: Job;
	language: string;
	language_lvl: string;
}
export interface JobApplicationStatus {
	id: number;
	code: JobApplicationStatusCode;
	name: string;
	job_applications?: JobApplication[];
}

export interface JobApplication {
	recruiter_id: number;
	recruiter: any;
	job_id: number;
	job: Job;
	status_id: number;
	status: JobApplicationStatus;
	applied_at: Date;
	candidateApplications?: CandidateJobApplication[];
}

export interface Title {
	id: number;
	code: string;
	name: string;
	users?: User[];
}
export interface Gender {
	id: number;
	code: string;
	name: string;
	users?: User[];
}
export interface Pronoun {
	id: number;
	code: string;
	name: string;
	users?: User[];
}
export interface User {
	id: number;
	clerk_id: string;
	is_active?: boolean;
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
	employer?: Employer;
	candidate?: Candidate;

	received_reviews: Review[];
	given_reviews: Review[];

	sent_messages: Message[];
	received_messages: Message[];
	favorite_jobs: FavoriteJob[];

	owned_todos: ToDo[];
	related_todos: ToDo[];

	created_events: CalendarEvent[];
	target_events: CalendarEvent[];

	performed_activities: any[]; //TODO: define activity type
	targeted_activities: any[];

	notifications: any[]; //TODO: define notification type
	notifPreferences: any[]; //TODO: define notification preference type

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
	invites: CandidateInvite[];
	pool: CandidatePool[];
	job_hires?: JobHire[];
}

export interface Employer {
	id: number;
	user: User;
	company_id: number;
	company: Company;
	signature: string;

	created_jobs: Job[];
	updated_jobs: Job[];

	autoApprovals: AutoApproval[];
	job_hires?: JobHire[];
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
	is_validated?: boolean;

	locations: CompanyLocation[];
	address_1?: string;
	address_2?: string;

	employers: Employer[];
	recruiters: Recruiter[];

	invites?: EmployerInvite[];
}

export interface SeniorityCategory {
	id: number;
	name: string;
	level: number;
	seniorities: Seniority[];
}

export interface Seniority {
	id: number;
	name: string;
	categ_id: number;
	category: SeniorityCategory;
	jobs: Job[];
}

export interface DepartmentCategory {
	id: number;
	name: string;
	level: number;
	departments: Department[];
}

export interface Department {
	id: number;
	name: string;
	categ_id: number;
	category: DepartmentCategory;
	jobs: Job[];
	ideal_job_departments: IdealJobDepartment[];
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

export interface CandidateInvite {
	id: number;
	token: string;
	job_id?: number;
	job?: Job;
	recruiter_id: number;
	recruiter: Recruiter;
	candidate_email: string;
	candidate_name?: string;
	candidate_surname?: string;
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
	resumes: any[]; //TODO: define resume type
	invites: CandidateInvite[];
	applications: CandidateJobApplication[];
	ideal_jobs: IdealJob[];
	pool: CandidatePool[];
	candidate_skills: CandidateSkill[];
	candidate_tags: CandidateTag[];
	privacy: CandidatePrivacy;
	job_hires?: JobHire[];
}

export interface CandidatePrivacy {
	candidate_id: number;
	candidate: Candidate;
	renewed_at: Date;
	expires_at: Date;
	reminder_at: Date;
	reminder_mail_sent_at?: Date;
	removal_requested: boolean;
	removal_requested_at?: Date;
	removed_at?: Date;
}

export interface CandidateSkill {
	candidate_id: number;
	candidate: Candidate;
	skill_id: number;
	skill: Skill;
	position: number;
}

export interface CandidateTag {
	candidate_id: number;
	candidate: Candidate;
	tag_id: number;
	tag: Tag;
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
	recruiter_stage_id?: number;
	recruiter_stage?: Stage;
	active?: boolean;
	hired?: boolean;
}

export interface IdealJob {
	id: number;
	candidate: Candidate;
	location?: string;
	currency_code?: string;
	salary?: number;
	vacation_days?: number;
	relocate?: boolean;
	departments?: IdealJobDepartment[];
	job_types?: IdealJobType[];
	presence_statuses?: IdealJobPresenceStatus[];
	benefits?: IdealJobBenefit[];
}

export interface IdealJobPresenceStatus {
	ideal_job_id: number;
	ideal_job: IdealJob
	presence_status_id: number;
	presence_status: PresenceStatus;
}

export interface IdealJobType {
	ideal_job_id: number;
	ideal_job: IdealJob
	job_type_id: number;
	job_type: JobType;
}

export interface IdealJobDepartment {
	ideal_job_id: number;
	ideal_job: IdealJob
	department_id: number;
	department: Department;
}

export interface Department {
	id: number;
	name: string
	categ_id: number;
	department: DepartmentCategory;
	jobs: Job[];
	ideal_job_departments: IdealJobDepartment[];
}

export interface DepartmentCategory {
	id: number;
	name: string;
	level: number;
	departments: Department[];
}

export interface IdealJobBenefit {
	ideal_job_id: number;
	ideal_job: IdealJob;
	benefit_id: number;
	benefit: Benefit;
}

export interface Benefit {
	id: number;
	name: string;
	job_benefits: JobBenefit[];
	ideal_job_benefits: IdealJobBenefit[];
}


export interface JobBenefit {
	job_id: number;
	job: Job;
	benefit_id: number;
	benefit: Benefit;
	position: number;
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
	applications2?: CandidateJobApplication[];
}

export interface CalendarEventStatus {
	id: number;
	name: string;
	calendar_events?: CalendarEvent[];
}
export interface CalendarEventType {
	id: number;
	name: string;
	calendar_events?: CalendarEvent[];
}
export interface CalendarEvent {
	id: number;
	type_id: number;
	type: CalendarEventType;
	creator_id: number;
	creator: User;
	creator_profile_id: number;
	target_user_id: number;
	target_user: User;
	target_user_profile_id: number;
	job_id?: number;
	job?: Job;
	status_id: number;
	status: CalendarEventStatus;
	public_details?: string;
	private_details?: string;
	created_at: Date;
	due_at: Date;
}

export interface Review {
	user_id: number;
	user: User;
	rating: number;
	text: string;
	reviewer_id: number;
	reviewer: User;
	created_at: Date;
}

export interface Message {
	id: number;
	from_user_id: number;
	from_user: User;
	to_user_id: number;
	to_user: User;
	text: string;
	created_at: Date;
}

export interface ToDo {
	id: number;
	owner_id: number;
	owner: User;
	related_user_id: number;
	related_user: User;
	title: string;
	done: boolean;
	created_at: Date;
	due_at: Date;
}

export interface FavoriteJob {
	job_id: number;
	job?: Job;
	user_id: number;
	user?: User;
	created_at: Date;
}

export interface JobHire {
	id: number;
	job_id: number;
	job?: Job;
	candidate_id: number;
	candidate?: Candidate;
	recruiter_id: number;
	recruiter?: Recruiter;

	salary: number;
	currency_code: string;
	starting_date: Date;

	hired_by: number;
	employer: Employer;
	hired_at: Date;
}

export interface ActivityType {
	id: number;
	code: string;
	name: string;
	activities?: ActivityLog[];
}

export interface ActivityLog {
	id: number;
	activity_type_id: number;
	activity_type: ActivityType;

	actor_id: number;
	actor: User;
	actor_type: string;

	target_user_id?: number;
	target_user?: User;
	target_user_type?: string;

	activity_job_id?: number;
	activity_job?: Job;
	metadata?: string;

	created_at: Date;
}