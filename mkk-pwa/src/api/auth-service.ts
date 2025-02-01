import type { IUser } from "../models/user.ts";
import axios from "axios";
import CryptoService from "../services/crypto-service.ts";
import HttpService from "../services/http-service.ts";
const API_AUTH_PATH = "/api/auth/service.ashx";
export default class AuthService {
    static async isAuthKeyAlive(user: IUser) {
        if (user?.authKey) {
            const response = await axios.get(`${API_AUTH_PATH}?type=getUser&auth_key=${user.authKey}`)
            return !response || !response.data || !response.data.error
            // if (!user.authKey.expired || new Date(user.authKey.expired) >= new Date()) {
            //     return true
            // }
        }
        return false
    }
    static async sendPIN(phone: string) {
        return new Promise(async (resolve, reject) => {
            if (phone) {
                const response = await axios.post(API_AUTH_PATH, {
                    type: "sendAuthSMSCode",
                    sms_phone: CryptoService.hidePhoneNumber(`7${phone}`),
                    auth_key: CryptoService.hidePhoneNumber(phone)
                })
                if (HttpService.isSuccessResponse(response)) {
                    resolve(true)
                } else {
                    reject("Ошибка при отправке сообщения с кодом.")
                    console.log("sendPIN", response?.data?.error)
                }
            } else {
                reject("Телефон не указан")
            }
        })
    }
}