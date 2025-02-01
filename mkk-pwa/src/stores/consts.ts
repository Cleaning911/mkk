import type { ISaveStatus } from "../models/saveStatus.ts";

export const SAVE_STATUS_NEW: ISaveStatus = {
    id: 0,
    name: "Новая запись"
}
export const SAVE_STATUS_GOT_FROM_SERVER: ISaveStatus = {
    id: 1,
    name: "Загружено с сервера, запись не менялась"
}
export const SAVE_STATUS_SAVED: ISaveStatus = {
    id: 2,
    name: "Сохранено на сервере"
}
export const SAVE_STATUS_ERROR: ISaveStatus = {
    id: 3,
    name: "Ошибка сохранения"
}