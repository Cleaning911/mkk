import type {IUser} from "../models/user.ts";

export default class AuthService {
    static isAuthKeyAlive(user: IUser) {
        if (user?.authKey) {
            if (!user.authKey.expired || new Date(user.authKey.expired) >= new Date()) {
                return true
            }
        }
        return false
    }
}