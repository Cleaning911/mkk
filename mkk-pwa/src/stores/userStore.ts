import type {_GettersTree} from "pinia";
import type {IUser} from "../models/user.ts";
import {defineStore} from "pinia";
import type {Nullable} from "../models/types.ts";
import WebStorage from "./webStorage.ts";
import AuthService from "../api/auth-service.ts";
import DateService from "../services/date-service.ts";

interface State {
    user: Nullable<IUser>
    isAuth: boolean | undefined
    showSplash: boolean
}

interface Getters extends _GettersTree<any> {
    getUser: (state: State) => IUser | null
    getShowSplash: (state: State) => boolean
}

interface Actions {
    init(): void
    fetchUser(phone: string, pin: string): Promise<IUser | null>,
    checkPIN(phone: string, pin: string): Promise<IUser | null>
}

const useUserStore = defineStore<string, State, Getters, Actions>('user', {
    state: () => ({
        user: null,
        isAuth: undefined,
        showSplash: true
    }),
    getters: {
        getUser(state: State) {
            return state.user
        },
        getShowSplash(state: State) {
            return state.showSplash
        }
    },
    actions: {
        init() {
            this.showSplash = true
            setTimeout(async () => {
                const storedUser = WebStorage.getUser()
                if (storedUser && storedUser.authKey?.key && !DateService.isPastDate(storedUser.authKey.expired) && await AuthService.isAuthKeyAlive(storedUser)) {
                    this.user = storedUser
                } else {
                    this.user = null
                }
                this.isAuth = !!this.user
                this.showSplash = false
            }, 500)
        },
        fetchUser(phone: string, pin: string): Promise<Nullable<IUser>> {
            return new Promise((resolve) => {
                resolve({
                    id: 1,
                    name: 'Test user',
                    phone: phone,
                    authKey: {
                        key: `testAuthKey${pin}vsTR${pin}`,
                        expired: DateService.addDays(new Date(), 1)
                    }
                })
            })
        },
        checkPIN(phone: string, pin: string): Promise<IUser | null> {
            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    if (pin === '1111') {
                        this.user = {
                            id: 1,
                            name: "Test user",
                            phone: phone,
                            authKey: {
                                key: '32424235423645645645645',
                                expired: DateService.addDays(new Date(), 1)
                            }
                        }
                        this.isAuth = true
                        resolve(this.user)
                    } else {
                        reject(null)
                    }
                }, 500)
            })
        }
}
})

export {
    useUserStore
}