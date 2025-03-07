import { addDays, format, differenceInSeconds } from "date-fns"
export default class DateService {
    static addDays(date: Date | string, daysCount: number) {
        if (!date) {
            date = new Date()
        }
        return addDays(new Date(date), daysCount)
    }
    static formatForLocalStorage(date: string | Date) {
        return format(new Date(date), "yyyy-MM-dd HH:mm:ss")
    }
    static formatDate(date: Date | string) {
        try {
            return format(new Date(date), "dd.MM.yyyy")
        } catch (e) {
            console.log('formatDate', e)
            return date
        }
    }
    static getTimePartStr(timePart: number) {
        return timePart >= 10 ? timePart.toString() : `0${timePart}`
    }
    static secondsBetween(laterDate: Date | string, earlierDate: Date | string) {
        return differenceInSeconds(new Date(laterDate), new Date(earlierDate))
    }
    static getDateHumanStr(date: Date | string) {
        if (this.isToday(date)) {
            return "Сегодня"
        }
        return this.formatDate(date)
    }
    static isToday(date: Date | string) {
        return this.formatDate(date) === this.formatDate(new Date())
    }
    static formatDateForAPI(date: Date | string) {
        return format(new Date(date), "yyyy-MM-dd")
    }
    static formatDateForUI(date: Date | string) {
        return format(new Date(date), "dd.MM.yyyy HH:mm")
    }
    static formatTime(date: Date | string) {
        return format(new Date(date), "HH:mm")
    }
    static isPastDate(date: Date | string) {
        return new Date(date) < new Date()
    }
    static localeDateToDate(ddMMyyyy: string | Date) {
        if (!ddMMyyyy) {
            return ddMMyyyy
        }
        const dateArray = ddMMyyyy.toString().substring(0, 10).split(".")
        const timeStr = ddMMyyyy.toString().substring(10, ddMMyyyy.toString().length).trim()
        return new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]} ${timeStr}`)
    }
    static fixAPIDate(date: Date | string) {
        if (!date) {
            return date
        }
        const dateArr = date.toString().substring(0, 10).split('.')
        const timeStr = date.toString().substring(11, date.toString().length).trim()
        return new Date(`${dateArr[2]}-${dateArr[1]}-${dateArr[0]} ${timeStr}`)
    }
}