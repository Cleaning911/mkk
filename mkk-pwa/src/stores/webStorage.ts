import type {IUser} from "../models/user.ts";
import type {Nullable} from "../models/types.ts";
import LogService from "../services/log-service.ts";
import DateService from "../services/date-service.ts";

const USER_KEY = 'user'
const LAST_PHONE = "lastPhone"
const LAST_PIN_SEND_DATE = "lastPinSendDate"
export default class WebStorage {
    static getUser() {
        try {
            const userRawValue = localStorage.getItem(USER_KEY)
            if (userRawValue) {
                return JSON.parse(userRawValue) as IUser
            }
            return null
        } catch (e) {
            LogService.logError('getUser', e)
            return null
        }
    }
    static setUser(user: Nullable<IUser>) {
        try {
            if (!user) {
                localStorage.removeItem(USER_KEY)
            } else {
                localStorage.setItem(USER_KEY, JSON.stringify(user))
            }
        } catch (e) {
            LogService.logError('setUser', e)
        }
    }
    static getLastPhone() {
        return localStorage.getItem(LAST_PHONE) || ""
    }
    static setLastPhone(phone: string) {
        localStorage.setItem(LAST_PHONE, phone)
    }
    static getLastPINSendDate() {
        return localStorage.getItem(LAST_PIN_SEND_DATE) ? new Date(localStorage.getItem(LAST_PIN_SEND_DATE) || "") : null
    }
    static setLastPINSendDate(date: string | Date) {
        if (!date) {
            localStorage.setItem(LAST_PIN_SEND_DATE, "")
        } else {
            localStorage.setItem(LAST_PIN_SEND_DATE, DateService.formatForLocalStorage(date))
        }
    }
}