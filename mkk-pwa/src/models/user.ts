import type {IAuthKey} from "./authKey.ts";

export interface IUser {
    id: number,
    name: string,
    phone?: string | null,
    authKey?: IAuthKey | null
}
