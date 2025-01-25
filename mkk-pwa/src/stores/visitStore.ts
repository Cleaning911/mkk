import type {_GettersTree} from "pinia";
import {defineStore} from "pinia";
import type {IVisit, IVisitList} from "../models/visit";
import workJournalMock from "./../api/mocks/workJournal"
interface State {
    visitList: IVisitList
    isLoading: boolean
}

interface Getters extends _GettersTree<any> {
    getVisitList: (state: State) => IVisitList
    getIsLoading: (state: State) => boolean
}

interface Actions {
    fetchVisits(date: Date | string): Promise<IVisitList>,
    fetchVisit(id: number | string): Promise<IVisit>
}

const useVisitStore = defineStore<string, State, Getters, Actions>('visit', {
    state: () => ({
        visitList: [] as IVisitList,
        isLoading: false
    }),
    getters: {
        getVisitList(state: State) {
            return state.visitList
        },
        getIsLoading(state: State) {
            return state.isLoading
        }
    },
    actions: {
        fetchVisit(id: number | string): Promise<IVisit> {
            return new Promise((resolve, reject) => {
                try {
                    this.isLoading = true
                    resolve(workJournalMock.find(x => (Number)(x.id) === (Number)(id)))
                } catch (e: any) {
                    console.log('fetchVisit', e)
                    reject(e)
                } finally {
                    this.isLoading = false
                }
            })
        },
        fetchVisits(date: Date | string): Promise<IVisitList> {
            return new Promise((resolve, reject) => {
                try {
                    this.isLoading = true
                    this.visitList = workJournalMock
                    resolve(this.visitList)
                } catch (e: any) {
                    console.log('fetchVisits', e)
                    reject(e)
                } finally {
                    this.isLoading = false
                }
            })
        }
    }
})

export {
    useVisitStore
}