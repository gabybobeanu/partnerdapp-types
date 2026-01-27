import type { ErrorCode } from "./error-codes.js";

export const ErrorMessages: Record<ErrorCode, string> = {
    USER_NOT_FOUND: 'User was not found',
    USER_ID_NOT_FOUND: 'User with ID {0} was not found',
    INVALID_PROFILE_ID: 'The provided profile ID {0} is invalid',
    ROLE_ID_REQUIRED: 'Role ID is required to perform this action',
    CLERK_ID_REQUIRED: 'Clerk ID is required to perform this action',
    USER_EMAIL_EXISTS: 'The email {0} is already associated with another user',
    USER_PHONE_EXISTS: 'The phone number {0} is already associated with another user',

    USER_CREATION_FAILED: 'Failed to create user due to internal error',
    EMPLOYER_CREATION_FAILED: 'Failed to create employer due to internal error',
    RECRUITER_CREATION_FAILED: 'Failed to create recruiter due to internal error',
    CANDIDATE_CREATION_FAILED: 'Failed to create candidate due to internal error',

    JOB_NOT_FOUND_OR_ACCESS_DENIED: 'Job with ID {0} was not found or access is denied',
    CANNOT_DELETE_JOB_WITH_ACTIVE_APPLICATIONS: 'Cannot delete job with active applications',
    CANNOT_DELETE_JOB_WITH_CANDIDATE_APPLICATIONS: 'Cannot delete job with candidate applications',
    CANNOT_DELETE_JOB_WITH_CALENDAR_EVENTS: 'Cannot delete job with associated calendar events',
    JOB_NOT_DELETED: 'Failed to delete job due to internal error',

    JOB_APPLICATION_ALREADY_EXISTS: 'An application for job {0} by candidate {1} already exists',
    JOB_APPLICATION_NOT_FOUND: 'Candidate {0} has not applied for job {1}',
    JOB_APPLICATION_NOT_APPROVED: 'Failed to approve application for job {0} and candidate {1} due to internal error',
    JOB_APPLICATION_NOT_REJECTED: 'Failed to reject application for job {0} and candidate {1} due to internal error',
    CANDIDATE_JOB_APPLICATION_ALREADY_EXISTS: 'Candidate {0} has already applied for job {1}',
    CANDIDATE_JOB_APPLICATION_NOT_CREATED: 'Failed to create job application for job {0} and candidate {1} due to internal error',
    CANDIDATE_JOB_APPLICATION_NOT_FOUND: 'Job application for job {0} and candidate {1} was not found',
    CANDIDATE_JOB_APPLICATION_NOT_UPDATED: 'Failed to update job application for job {0} and candidate {1} due to internal error',
    CANDIDATE_JOB_APPLICATION_NOT_REJECTED: 'Failed to reject job application for job {0} and candidate {1} due to internal error',

    JOB_HIRES_LIMIT_REACHED: 'The job {0} has reached its maximum number of hires',
    CANDIDATE_ALREADY_HIRED_FOR_ANOTHER_JOB: 'Candidate {0} has already been hired for another job',
    JOB_HIRE_NOT_CREATED: 'Failed to create job hire for job {0} and candidate {1} due to internal error',
    HIRE_NOT_FOUND_OR_ALREADY_TERMINATED: 'Hire for job {0} and candidate {1} was not found or already terminated',
    HIRE_NOT_TERMINATED: 'Failed to terminate hire for job {0} and candidate {1} due to internal error',

    EMPLOYER_NOT_FOUND: 'Employer with ID {0} was not found',
    EMPLOYER_NOT_UPDATED: 'Failed to update employer with ID {0} due to internal error',
    EMPLOYER_NOT_DELETED: 'Failed to delete employer with ID {0} due to internal error',
    EMPLOYER_NOT_CREATED: 'Failed to create employer due to internal error',
    CANNOT_DELETE_ADMIN_EMPLOYER: 'Cannot delete an Administrator employer',
    ADMIN_EMPLOYER_NOT_FOUND: 'Administrator employer was not found for the company',
    ADMIN_OR_COMPANY_NOT_FOUND: 'Administrator or company was not found',
    COMPANY_ID_REQUIRED: 'Company ID is required to perform this action',
    INVITE_NOT_CREATED: 'Failed to create invite due to internal error',
    INVITE_NOT_FOUND_OR_EXPIRED: 'Invite was not found or has expired',
    INVITE_EXPIRED: 'Invite has expired',
    INVITE_ALREADY_USED: 'Invite has already been used',
    INVITE_NOT_UPDATED: 'Failed to update invite with due to internal error',
    USER_NOT_CREATED: 'Failed to create user due to internal error',
    EMPLOYER_NOT_ACTIVATED: 'Failed to activate employer account',
    INVITE_NOT_FOUND: 'Invite with ID {0} was not found',

    AUTOAPPROVAL_FAILED: 'Auto-approval process failed due to internal error',
    AUTOAPPROVAL_REMOVE_FAILED: 'Failed to remove auto-approval due to internal error',
    COMPANY_NAME_EXISTS: 'The company name {0} is already in use',
    COMPANY_NOT_UPDATED: 'Failed to update company with ID {0} due to internal error',

    RECRUITER_NOT_FOUND: 'Recruiter with ID {0} was not found',
    RECRUITER_NOT_UPDATED: 'Failed to update recruiter with ID {0} due to internal error',
    RECRUITER_NOT_CREATED: 'Failed to create recruiter due to internal error',

    CANDIDATE_NOT_FOUND: 'Candidate with ID {0} was not found',
    CANDIDATE_NOT_CREATED: 'Failed to create candidate due to internal error',
    CANDIDATE_NOT_UPDATED: 'Failed to update candidate with ID {0} due to internal error',
    IDEAL_JOB_NOT_UPDATED: 'Failed to update ideal job for candidate with ID {0} due to internal error',
    CANDIDATE_NOT_ACTIVATED: 'Failed to activate candidate account',
    CANDIDATE_RECRUITER_CONNECTION_FAILED: 'Failed to connect candidate with ID {0} to recruiter with ID {1} due to internal error',
    INVITE_AND_APPLICATION_ALREADY_EXISTS: 'Invite already accepted and application exists for job {0} and candidate {1}',
    UPDATED_INVITE_NOT_FOUND: 'Failed to fetch updated invite',
    NO_JOB_FOR_INVITE: 'No job associated with this invite',
    JOB_NOT_FOUND: 'Job with ID {0} was not found',
    INVALID_INVITE: 'The provided invite token is invalid',

    ACTIVITY_TYPE_NOT_FOUND: 'Activity type with code {0} was not found',
    ACTIVITY_LOG_NOT_CREATED: 'Failed to create activity log for activity type {0} due to internal error',
    ACTIVITY_FEED_NOT_FETCHED: 'Failed to fetch activity feed due to internal error',
    JOB_ACTIVITIES_NOT_FETCHED: 'Failed to fetch activities for job with ID {0} due to internal error',
    CANDIDATE_ACTIVITIES_NOT_FETCHED: 'Failed to fetch activities for candidate with ID {0} due to internal error',
    RECRUITER_ACTIVITIES_NOT_FETCHED: 'Failed to fetch activities for recruiter with ID {0} due to internal error',

    EVENT_NOT_CREATED: 'Failed to create event due to internal error',
    EVENT_NOT_FOUND: 'Event with ID {0} was not found',
    RECRUITER_NOT_APPROVED_FOR_JOB: 'Recruiter with ID {0} is not approved for job with ID {1}',
    MESSAGE_NOT_CREATED: 'Failed to create message due to internal error',
    REVIEW_NOT_CREATED: 'Failed to create review due to internal error',

    STAGE_NOT_FOUND: 'Stage with ID {0} was not found',
    STAGE_NOT_CREATED: 'Failed to create stage due to internal error',
    STAGE_ORDER_NOT_UPDATED: 'Failed to update stage order due to internal error',

    TODO_NOT_FOUND: 'To-do item with ID {0} was not found',
    TODO_NOT_UPDATED: 'Failed to update to-do item with ID {0} due to internal error',
    TODO_NOT_DELETED: 'Failed to delete to-do item with ID {0} due to internal error',
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