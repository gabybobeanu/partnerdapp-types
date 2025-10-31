export enum ProfileCode {
    EMPLOYER = 'EMPLOYER',
    RECRUITER = 'RECRUITER',
    CANDIDATE = 'CANDIDATE',
}

export enum RoleCode {
    ADMINISTRATOR = 'ADMINISTRATOR',
    HIRING_TEAM = 'HIRING_TEAM',
    CONTENT_MANAGER = 'CONTENT_MANAGER',
    NO_ACCESS = 'NO_ACCESS',
    RECRUITER = 'RECRUITER',
    CANDIDATE = 'CANDIDATE',
}

export enum RightCode {
    VIEW_JOBS_LIST = 'VIEW_JOBS_LIST',
    VIEW_JOB = 'VIEW_JOB',
    CREATE_JOB = 'CREATE_JOB',
    EDIT_JOB = 'EDIT_JOB',
    DELETE_JOB = 'DELETE_JOB',
    
    VIEW_SETTINGS = 'VIEW_SETTINGS',
    EDIT_SETTINGS = 'EDIT_SETTINGS',
    VIEW_PROFILE = 'VIEW_PROFILE',
    EDIT_PROFILE = 'EDIT_PROFILE',
    VIEW_COMPANY = 'VIEW_COMPANY',
    EDIT_COMPANY = 'EDIT_COMPANY',
    VIEW_TEAM = 'VIEW_TEAM',
    INVITE_MEMBER = 'INVITE_MEMBER',
    EDIT_MEMBER = 'EDIT_MEMBER',
    DELETE_MEMBER = 'DELETE_MEMBER',
    VIEW_RECRUITERS_LIST = 'VIEW_RECRUITERS_LIST',
    VIEW_RECRUITER = 'VIEW_RECRUITER',
    APPROVE_RECRUITER = 'APPROVE_RECRUITER',
    REJECT_RECRUITER = 'REJECT_RECRUITER',
    AUTOAPPROVE_RECRUITER = 'AUTOAPPROVE_RECRUITER',
}

export enum JobTypeCode {
    FULL_TIME = 'FULL_TIME',
    PART_TIME = 'PART_TIME',
    CONTRACT = 'CONTRACT',
}

export enum PresenceStatusCode {
    ONSITE = 'ONSITE',
    REMOTE = 'REMOTE',
    HYBRID = 'HYBRID',
}

export enum UrgencyCode {
    REGULAR = 'REGULAR',
    URGENT = 'URGENT',
}

export enum TagTypeCode {
    TAG = 'TAG',
    SKILL = 'SKILL',
}

export enum SkillTypeCode {
    TECHNICAL = 'TECHNICAL',
    OTHER = 'OTHER',
    BONUS = 'BONUS',
}

export enum JobApplicationStatusCode {
    AUTOAPPROVED = 'AUTOAPPROVED',
    APPROVED = 'APPROVED',
    PENDING = 'PENDING',
    REJECTED = 'REJECTED',
    WITHDRAWN = 'WITHDRAWN',
}

export enum StageTypeName {
    SCREENING = 'Screening',
    INTERVIEW = 'Interview',
    OFFER = 'Offer',
}

export enum StageCategoryName {
    MANDATORY = 'Mandatory',
    DEFAULT = 'Default',
    CUSTOM = 'Custom',
}

export enum StageOwnerTypeName {
    EMPLOYER = 'Employer',
    RECRUITER = 'Recruiter',
}