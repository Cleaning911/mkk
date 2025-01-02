import { addDays, format, differenceInSeconds } from "date-fns"
export default class DateService {
    static addDays(date: Date | string, daysCount) {
        if (!date) {
            date = new Date()
        }
        return addDays(new Date(date), daysCount)
    }
    static formatForLocalStorage(date: string | Date) {
        return format(new Date(date), "yyyy-MM-dd HH:mm:ss")
    }
    static getTimePartStr(timePart: number) {
        return timePart >= 10 ? timePart.toString() : `0${timePart}`
    }
    static secondsBetween(laterDate: Date | string, earlierDate: Date | string) {
        return differenceInSeconds(new Date(laterDate), new Date(earlierDate))
    }
}