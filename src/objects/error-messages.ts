import type { ErrorCode } from "./error-codes.js";

export const ErrorMessages: Record<ErrorCode, string> = {
    //user general errors
    USER_NOT_FOUND: 'User was not found',
    USER_ID_NOT_FOUND: 'User with ID {0} was not found',
    USER_NOT_CREATED: 'Failed to create user due to internal error',
    USER_NOT_UPDATED: 'Failed to update user due to internal error',
    USER_ID_NOT_UPDATED: 'Failed to update user with ID {0} due to internal error',

    PROFILE_ID_INVALID: 'The provided profile ID {0} is invalid',
    ROLE_ID_REQUIRED: 'Role ID is required to perform this action',
    CLERK_ID_REQUIRED: 'Clerk ID is required to perform this action',
    USER_EMAIL_EXISTS: 'The email "{0}" is already associated with another user account',
    USER_PHONE_EXISTS: 'The phone number "{0}" is already associated with another user account',

    //employer errors
    EMPLOYER_NOT_FOUND: 'Employer was not found',
    EMPLOYER_ID_NOT_FOUND: 'Employer with ID {0} was not found',
    EMPLOYER_NOT_CREATED: 'Failed to create employer due to internal error',
    EMPLOYER_NOT_UPDATED: 'Failed to update employer due to internal error',
    EMPLOYER_ID_NOT_UPDATED: 'Failed to update employer with ID {0} due to internal error',
    EMPLOYER_NOT_DELETED: 'Failed to delete employer due to internal error',
    EMPLOYER_ID_NOT_DELETED: 'Failed to delete employer with ID {0} due to internal error',
    EMPLOYER_NOT_ACTIVATED: 'Failed to activate employer account due to internal error',
    EMPLOYER_ID_NOT_ACTIVATED: 'Failed to activate employer account with ID {0} due to internal error',

    //recruiter errors
    RECRUITER_NOT_FOUND: 'Recruiter was not found',
    RECRUITER_ID_NOT_FOUND: 'Recruiter with ID {0} was not found',
    RECRUITER_NOT_CREATED: 'Failed to create recruiter due to internal error',
    RECRUITER_NOT_UPDATED: 'Failed to update recruiter due to internal error',
    RECRUITER_ID_NOT_UPDATED: 'Failed to update recruiter with ID {0} due to internal error',

    //candidate errors
    CANDIDATE_NOT_FOUND: 'Candidate was not found',
    CANDIDATE_ID_NOT_FOUND: 'Candidate with ID {0} was not found',
    CANDIDATE_NOT_CREATED: 'Failed to create candidate due to internal error',
    CANDIDATE_NOT_UPDATED: 'Failed to update candidate due to internal error',
    CANDIDATE_ID_NOT_UPDATED: 'Failed to update candidate with ID {0} due to internal error',
    CANDIDATE_NOT_ACTIVATED: 'Failed to activate candidate account due to internal error',
    CANDIDATE_ID_NOT_ACTIVATED: 'Failed to activate candidate account with ID {0} due to internal error',
    CANDIDATE_IDEAL_JOB_NOT_UPDATED: 'Failed to update ideal job for candidate due to internal error',

    //admin errors
    ADMIN_EMPLOYER_NOT_DELETED: 'Failed to delete employer due to internal error',
    ADMIN_EMPLOYER_NOT_FOUND: 'Administrator employer was not found for the company',
    ADMIN_EMPLOYER_ID_NOT_FOUND: 'Administrator employer with ID {0} was not found',
    ADMIN_OR_COMPANY_NOT_FOUND: 'Administrator or company was not found',
    ADMIN_DELETE_NOT_ALLOWED: 'Cannot delete an Administrator employer',

    //company errors
    COMPANY_NOT_FOUND: 'Company was not found',
    COMPANY_ID_NOT_FOUND: 'Company with ID {0} was not found',
    COMPANY_ID_REQUIRED: 'Company ID is required to perform this action',
    COMPANY_NOT_UPDATED: 'Failed to update company due to internal error',
    COMPANY_ID_NOT_UPDATED: 'Failed to update company with ID {0} due to internal error',
    COMPANY_NOT_VALIDATED: 'Failed to validate company due to internal error',
    COMPANY_ID_NOT_VALIDATED: 'Failed to validate company with ID {0} due to internal error',
    COMPANY_NAME_EXISTS: 'A company with the name "{0}" already exists',

    //invite errors
    INVITE_NOT_CREATED: 'Failed to create invite due to internal error',
    INVITE_NOT_FOUND: 'Invite was not found',
    INVITE_NOT_FOUND_OR_EXPIRED: 'Invite was not found or has expired',
    INVITE_INVALID: 'The provided invite token is invalid',
    INVITE_EXPIRED: 'Invite has expired',
    INVITE_ALREADY_USED: 'Invite has already been used',
    INVITE_NOT_UPDATED: 'Failed to update invite due to internal error',

    UPDATED_INVITE_NOT_FOUND: 'Failed to fetch updated invite',
    NO_JOB_FOR_INVITE: 'No job associated with this invite',
    CANDIDATE_RECRUITER_CONNECTION_FAILED: 'Failed to connect candidate with recruiter due to internal error',
    INVITE_AND_APPLICATION_ALREADY_EXISTS: 'Invite already accepted and application exists for this job and candidate',

    //job errors
    JOB_NOT_FOUND: 'Job was not found',
    JOB_ID_NOT_FOUND: 'Job with ID {0} was not found',
    JOB_NOT_FOUND_OR_ACCESS_DENIED: 'Job was not found or access was denied',
    JOB_NOT_UPDATED: 'Failed to update job due to internal error',
    JOB_ID_NOT_UPDATED: 'Failed to update job with ID {0} due to internal error',
    JOB_NOT_DELETED: 'Failed to delete job due to internal error',
    JOB_ID_NOT_DELETED: 'Failed to delete job with ID {0} due to internal error',
    JOB_WITH_APPLICATIONS_NOT_DELETED: 'Failed to delete job with existing applications',
    JOB_WITH_CANDIDATE_APPLICATIONS_NOT_DELETED: 'Failed to delete job with existing candidate applications',
    JOB_WITH_CALENDAR_EVENTS_NOT_DELETED: 'Failed to delete job with existing calendar events',

    //job application errors
    JOB_APPLICATION_ALREADY_EXISTS: 'An application for this job and candidate already exists',
    JOB_APPLICATION_NOT_FOUND: 'Job application was not found',
    JOB_APPLICATION_ID_NOT_FOUND: 'Job application with ID {0} was not found',
    JOB_APPLICATION_NOT_APPROVED: 'Failed to approve application due to internal error',
    JOB_APPLICATION_ID_NOT_APPROVED: 'Failed to approve job application with ID {0} due to internal error',
    JOB_APPLICATION_NOT_REJECTED: 'Failed to reject application due to internal error',
    JOB_APPLICATION_ID_NOT_REJECTED: 'Failed to reject job application with ID {0} due to internal error',

    AUTOAPPROVAL_ON_NOT_CREATED: 'Auto-approval process failed due to internal error',
    AUTOAPPROVAL_OFF_NOT_CREATED: 'Failed to turn off auto-approval due to internal error',
    RECRUITER_NOT_APPROVED_FOR_JOB: 'This recruiter is not approved for the specified job',

    //candidate job application errors
    CANDIDATE_JOB_APPLICATION_ALREADY_EXISTS: 'This candidate has already applied for this job',
    CANDIDATE_JOB_APPLICATION_NOT_CREATED: 'Failed to create candidate job application due to internal error',
    CANDIDATE_JOB_APPLICATION_NOT_FOUND: 'Candidate job application was not found',
    CANDIDATE_JOB_APPLICATION_ID_NOT_FOUND: 'Candidate job application with ID {0} was not found',
    CANDIDATE_JOB_APPLICATION_NOT_UPDATED: 'Failed to update candidate job application due to internal error',
    CANDIDATE_JOB_APPLICATION_ID_NOT_UPDATED: 'Failed to update candidate job application with ID {0} due to internal error',
    CANDIDATE_JOB_APPLICATION_NOT_REJECTED: 'Failed to reject candidate job application due to internal error',
    CANDIDATE_JOB_APPLICATION_ID_NOT_REJECTED: 'Failed to reject candidate job application with ID {0} due to internal error',

    //job hire errors
    JOB_HIRES_LIMIT_REACHED: 'The job "{0}" has reached its maximum number of hires',
    CANDIDATE_ALREADY_HIRED_FOR_ANOTHER_JOB: 'This candidate has already been hired for another job',
    JOB_HIRE_NOT_CREATED: 'Failed to create job hire due to internal error',
    HIRE_NOT_FOUND_OR_ALREADY_TERMINATED: 'Hire was not found or already terminated',
    HIRE_NOT_TERMINATED: 'Failed to terminate hire due to internal error',

    //job stage errors
    STAGE_NOT_FOUND: 'Stage was not found',
    STAGE_ID_NOT_FOUND: 'Stage with ID {0} was not found',
    STAGE_NOT_CREATED: 'Failed to create stage due to internal error',
    STAGE_NOT_UPDATED: 'Failed to update stage due to internal error',
    STAGE_ID_NOT_UPDATED: 'Failed to update stage with ID {0} due to internal error',
    STAGE_NOT_DELETED: 'Failed to delete stage due to internal error',
    STAGE_ID_NOT_DELETED: 'Failed to delete stage with ID {0} due to internal error',
    STAGE_ORDER_NOT_UPDATED: 'Failed to update stage order due to internal error',

    //event errors
    EVENT_NOT_FOUND: 'Event was not found',
    EVENT_ID_NOT_FOUND: 'Event with ID {0} was not found',
    EVENT_NOT_CREATED: 'Failed to create event due to internal error',
    EVENT_NOT_UPDATED: 'Failed to update event due to internal error',
    EVENT_ID_NOT_UPDATED: 'Failed to update event with ID {0} due to internal error',
    EVENT_NOT_DELETED: 'Failed to delete event due to internal error',
    EVENT_ID_NOT_DELETED: 'Failed to delete event with ID {0} due to internal error',

    //activity log errors
    ACTIVITY_TYPE_NOT_FOUND: 'Activity type was not found',
    ACTIVITY_TYPE_CODE_NOT_FOUND: 'Activity type with code "{0}" was not found',
    ACTIVITY_TYPE_ID_NOT_FOUND: 'Activity type with ID {0} was not found',
    ACTIVITY_LOG_NOT_CREATED: 'Failed to create activity log due to internal error',
    ACTIVITY_FEED_NOT_FETCHED: 'Failed to fetch activity feed due to internal error',
    JOB_ACTIVITIES_NOT_FETCHED: 'Failed to fetch job activities due to internal error',
    CANDIDATE_ACTIVITIES_NOT_FETCHED: 'Failed to fetch candidate activities due to internal error',
    RECRUITER_ACTIVITIES_NOT_FETCHED: 'Failed to fetch recruiter activities due to internal error',

    //message errors
    MESSAGE_NOT_CREATED: 'Failed to create message due to internal error',

    //review errors
    REVIEW_NOT_CREATED: 'Failed to create review due to internal error',

    //todo errors
    TODO_NOT_FOUND: 'To-do item was not found',
    TODO_ID_NOT_FOUND: 'To-do item with ID {0} was not found',
    TODO_NOT_CREATED: 'Failed to create to-do item due to internal error',
    TODO_NOT_UPDATED: 'Failed to update to-do item due to internal error',
    TODO_ID_NOT_UPDATED: 'Failed to update to-do item with ID {0} due to internal error',
    TODO_NOT_DELETED: 'Failed to delete to-do item due to internal error',
    TODO_ID_NOT_DELETED: 'Failed to delete to-do item with ID {0} due to internal error',

    //resume errors
    RESUME_NOT_FOUND: 'Resume was not found',
    RESUME_ID_NOT_FOUND: 'Resume with ID {0} was not found',
    RESUME_INVALID_FILE_TYPE: 'Invalid file type for resume. Only PDF, DOC, and DOCX files are allowed.',
    RESUME_FILE_SIZE_EXCEEDED: 'Resume file size exceeds the maximum allowed limit of {0} MB',
    RESUME_NOT_UPLOADED: 'Failed to upload resume due to internal error',
    RESUME_NOT_UPDATED: 'Failed to update resume due to internal error',
    RESUME_ID_NOT_UPDATED: 'Failed to update resume with ID {0} due to internal error',
    RESUME_NOT_DELETED: 'Failed to delete resume due to internal error',
    RESUME_ID_NOT_DELETED: 'Failed to delete resume with ID {0} due to internal error',
};

// Utility function to format messages with parameters
export function formatErrorMessage(
    errorCode: ErrorCode,
    ...params: (string | number)[]
): string {
    const template = ErrorMessages[errorCode];
    if (!template) return 'An unknown error occurred';

    return template.replace(/\{(\d+)\}/g, (match, index) => {
        const paramIndex = parseInt(index);
        return params[paramIndex]?.toString() ?? match;
    });
}