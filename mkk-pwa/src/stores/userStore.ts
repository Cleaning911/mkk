import type {_GettersTree} from "pinia";
import type {IUser} from "../models/user.ts";
import {defineStore} from "pinia";
import type {Nullable} from "../models/types.ts";
import WebStorage from "./webStorage.ts";
import AuthService from "../services/auth-service.ts";
import DateService from "../services/date-service.ts";

interface State {
    user: Nullable<IUser>
    isAuth: boolean
    showSplash: boolean
}

interface Getters extends _GettersTree<any> {
    getUser: (state: State) => IUser | null
    getShowSplash: (state: State) => boolean
}

interface Actions {
    init(): void
    fetchUser(phone: string, pin: string): Promise<IUser | null>
}

const useUserStore = defineStore<string, State, Getters, Actions>('user', {
    state: () => ({
        user: null,
        isAuth: false,
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
            setTimeout(() => {
                const storedUser = WebStorage.getUser()
                if (storedUser && AuthService.isAuthKeyAlive(storedUser)) {
                    this.user = storedUser
                } else {
                    this.user = null
                }
                this.isAuth = !!this.user
                this.showSplash = false
            }, 2000)
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
        }
    }
})

export {
    useUserStore
}