import type {IClient} from "./client.ts";
import type {IPhoto, IPhotoList} from "./photo.ts";

interface IVisit {
    id: number
    objectName: string
    client?: IClient
    address?: string
    dtCreate?: Date | string
    photoCount?: number
    photos?: IPhotoList
    isCompleted?: boolean
    dtCome?: Date | string | null
    dtLeave?: Date | string | null
}

interface IVisitList extends Array<IVisit> {}

export {
    IVisit,
    IVisitList
}