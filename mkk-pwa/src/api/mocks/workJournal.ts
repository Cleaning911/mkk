import type {IVisitList} from "../../models/visit.ts";
import type {IPhotoList} from "../../models/photo.ts";

export default [
    {
        id: 1001,
        objectName: "Test object #1",
        address: "Test address #1",
        dtCreate: new Date(),
        photoCount: 2,
        client: {
            id: 100,
            clientName: "ООО Рога и копыта"
        },
        dtCome: '2025-01-01 12:00:18',
        dtLeave: '2025-01-01 12:30:12',
        photos: [
            {
                id: 1,
                title: "Image 1",
                url: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/thumbs/638721139381135049.jpg",
                thumbnailURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/thumbs/638721139381135049.jpg",
                largeURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/thumbs/638721139381135049.jpg",
            },
            {
                id: 2,
                title: "Image 2",
                url: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/thumbs/638721139371831901.jpg",
                thumbnailURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/thumbs/638721139371831901.jpg",
                largeURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/thumbs/638721139371831901.jpg",
            },
            {
                id: 3,
                title: "Image 3",
                url: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721138556719839.jpg",
                thumbnailURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721138556719839.jpg",
                largeURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721138556719839.jpg",
            },
            {
                id: 4,
                title: "Image 4",
                url: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721139276793950.jpg",
                thumbnailURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721139276793950.jpg",
                largeURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721139276793950.jpg",
            }
        ] as IPhotoList
    },
    {
        id: 1002,
        objectName: "Test object #2",
        address: "Test address #2",
        dtCreate: new Date(),
        photoCount: 10,
        client: {
            id: 100,
            clientName: "ООО Рога и копыта"
        },
        dtCome: '2025-01-01 13:00:18',
        dtLeave: null
    },
    {
        id: 1003,
        objectName: "Test object #3",
        address: "Test address #3",
        dtCreate: new Date(),
        photoCount: 3,
        client: {
            id: 100,
            clientName: "ООО Рога и копыта"
        },
        photos: [            {
            id: 3,
            title: "Image 3",
            url: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721138556719839.jpg",
            thumbnailURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721138556719839.jpg",
            largeURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721138556719839.jpg",
        },
            {
                id: 4,
                title: "Image 4",
                url: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721139276793950.jpg",
                thumbnailURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721139276793950.jpg",
                largeURL: "https://cleaningwjmedia.s3.yandexcloud.net/2025/1/10/111458/638721139276793950.jpg",
            }
        ]
    },
    {
        id: 1004,
        objectName: "Test object #4",
        address: "Test address #4",
        dtCreate: new Date(),
        photoCount: 10,
        client: {
            id: 100,
            clientName: "ООО Рога и копыта"
        }
    },
    {
        id: 1005,
        objectName: "Test object #5",
        address: "Test address #5",
        dtCreate: new Date(),
        photoCount: 5
    },
    {
        id: 1006,
        objectName: "Test object #6",
        address: "Test address #6",
        dtCreate: new Date(),
        photoCount: 6,
        client: {
            id: 100,
            clientName: "ООО Рога и копыта"
        }
    },
    {
        id: 1007,
        objectName: "Test object #7",
        address: "Test address #7",
        dtCreate: new Date(),
        photoCount: 3,
        client: {
            id: 100,
            clientName: "ООО Рога и копыта"
        }
    },
    {
        id: 1008,
        objectName: "Test object #8",
        address: "Test address #8",
        dtCreate: new Date(),
        photoCount: 1,
        client: {
            id: 100,
            clientName: "ООО Рога и копыта"
        }
    }
] as IVisitList