import type { IUser } from "../models/user.ts";
import axios from "axios";
import CryptoService from "../services/crypto-service.ts";
import HttpService from "../services/http-service.ts";
import WebStorage from "../stores/webStorage.ts";
const API_AUTH_PATH = "/api/auth/service.ashx";
export default class AuthService {
    static async isAuthKeyAlive(user: IUser) {
        if (user?.authKey) {
            const response = await axios.get(`${API_AUTH_PATH}?type=getUser&auth_key=${user.authKey.key}`)
            return HttpService.isSuccessResponse(response)
        }
        return false
    }
    static async sendPIN(phone: string) {
        return new Promise(async (resolve, reject) => {
            if (phone) {
              const response = await HttpService.post(API_AUTH_PATH, {
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
    static checkPIN(phone: string, pin: string) {
        return new Promise(async (resolve, reject) => {
            if (!phone) {
                reject("Не указан номер телефона")
                return
            }
            if (!pin) {
                reject("Не указан код из СМС")
                return
            }
            const response = await HttpService.post(API_AUTH_PATH, {
                type: "checkSMSCode",
                sms_code: pin,
                sms_phone: CryptoService.hidePhoneNumber(phone),
                auth_key: CryptoService.hidePhoneNumber(phone)
            })
            if (HttpService.isSuccessResponse(response)) {
                resolve(true)
            } else {
                reject("Неверный код")
            }
        })
    }
    static logout() {
        WebStorage.setUser(null)
    }
}