interface IWorkJournal {
    id: number
    objectName: string
    address: string
    dtCreate: Date | string
    photoCount: number
}

interface IWorkJournalList extends Array<IWorkJournal> {}

export {
    IWorkJournal,
    IWorkJournalList
}