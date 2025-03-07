import type {IClient} from "./client.ts";
import type {IPhoto, IPhotoList} from "./photo.ts";

interface IVisit {
    id: number
    objectName: string
    firmName: string
    client?: IClient
    address?: string
    dtCreate?: Date | string | null
    photoCount?: number
    photos?: IPhotoList
    isCompleted?: boolean
    dtCome?: Date | string | null
    dtLeave?: Date | string | null
}

interface IVisitList extends Array<IVisit> {}

export {
    type IVisit,
    type IVisitList
}