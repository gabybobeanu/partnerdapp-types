import { NotificationCategoryCode } from "../constants.js";
import type { NotificationCategory } from "../index.js";

export const NOTIF_CATEG__GENERAL: NotificationCategory = {
    id: 10,
    code: NotificationCategoryCode.GENERAL,
    name: "General Notifications",
};
export const NOTIF_CATEG__HIRING_PROCESS: NotificationCategory = {
    id: 20,
    code: NotificationCategoryCode.HIRING_PROCESS,
    name: "Hiring Process Notifications",
};
export const NOTIF_CATEGORIES: NotificationCategory[] = [
    NOTIF_CATEG__GENERAL,
    NOTIF_CATEG__HIRING_PROCESS,
];