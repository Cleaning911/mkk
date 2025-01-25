interface IPhoto {
    id: number
    title: string
    url: string
    thumbnailURL: string
    largeURL: string
}

interface IPhotoList extends Array<IPhoto> {}

export {
    IPhoto,
    IPhotoList
}