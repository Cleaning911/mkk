export default class SmsService {
    static sendPIN(phone: string) {
        return new Promise((resolve, reject) => {
            if (phone) {
                setTimeout(() => {
                    resolve(true)
                }, 1000)
            } else {
                reject("Телефон не указан")
            }
        })
    }
}