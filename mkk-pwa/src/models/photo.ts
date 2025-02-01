import type {ISaveStatus} from "./saveStatus.ts";

interface IPhoto {
    id: number
    title?: string
    url?: string
    thumbnailURL: string
    largeURL: string
    status: ISaveStatus
    width?: number
    height?: number
}

interface IPhotoList extends Array<IPhoto> {}

export {
    IPhoto,
    IPhotoList
}