import type {IAuthKey} from "./authKey.ts";

interface IUser {
    id: number,
    name: string,
    phone?: string | null,
    authKey?: IAuthKey | null
}

export {
    type IUser
}