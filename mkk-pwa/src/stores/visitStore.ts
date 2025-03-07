import type {_GettersTree} from "pinia";
import {defineStore} from "pinia";
import type {IVisit, IVisitList} from "../models/visit";
import workJournalMock from "./../api/mocks/workJournal"
import VisitService from "../api/visit-service.ts";
import type {IUser} from "../models/user.ts";
import type {IObjectList} from "../models/object.ts";
import ObjectService from "../api/object-service.ts";
interface State {
    visitList: IVisitList
    isLoading: boolean
    objectList: IObjectList
}

interface Getters extends _GettersTree<any> {
    getVisitList: (state: State) => IVisitList
    getIsLoading: (state: State) => boolean
    getObjectList: (state: State) => IObjectList
}

interface Actions {
    fetchVisits(user: IUser | null, date: Date | string): Promise<IVisitList>
    fetchVisit(user: IUser, id: number): Promise<IVisit>
    fetchObjectList(user: IUser, id: number, isOnlyMy: boolean, search: string): Promise<IObjectList>
}

const useVisitStore = defineStore<string, State, Getters, Actions>('visit', {
    state: () => ({
        visitList: [] as IVisitList,
        isLoading: false,
        objectList: [] as IObjectList
    }),
    getters: {
        getVisitList(state: State) {
            return state.visitList
        },
        getIsLoading(state: State) {
            return state.isLoading
        },
        getObjectList(state: State) {
            return state.objectList
        }
    },
    actions: {
        fetchVisit(user: IUser, id: number): Promise<IVisit> {
            return new Promise(async (resolve, reject) => {
                try {
                    this.isLoading = true
                    const data = await VisitService.fetchVisit(user, id)
                    if (data?.length) {
                        resolve(data[0])
                    } else {
                        reject(false)
                    }
                } catch (e: any) {
                    console.log('fetchVisit', e)
                    reject(e)
                } finally {
                    this.isLoading = false
                }
            })
        },
        fetchVisits(user: IUser | null, date: Date | string): Promise<IVisitList> {
            return new Promise(async (resolve, reject) => {
                try {
                    this.isLoading = true
                    const data = await VisitService.fetchVisitList(user, date, date)
                    if (data?.length) {
                        this.visitList = data
                    } else {
                        this.visitList = []
                    }
                    resolve(this.visitList)
                } catch (e: any) {
                    console.log('fetchVisits', e)
                    reject(e)
                } finally {
                    this.isLoading = false
                }
            })
        },
        fetchObjectList(user: IUser, id: number = 0, isOnlyMy: boolean = true, search: string = ""): Promise<IObjectList> {
            return new Promise(async (resolve) => {
                this.isLoading = true
                const data = await ObjectService.fetchObjectList(user, id, isOnlyMy, search)
                if (data) {
                    this.objectList = data
                }
                this.isLoading = false
                resolve(this.objectList)
            })
        }
    }
})

export {
    useVisitStore
}