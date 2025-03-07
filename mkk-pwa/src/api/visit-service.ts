import type {IUser} from "../models/user.ts";
import axios from "axios";
import DateService from "../services/date-service.ts";
import HttpService from "../services/http-service.ts";
import type {IObjectList} from "../models/object.ts";
import type {IVisit, IVisitList} from "../models/visit.ts";
import type {IAPIVisit} from "../models/api/visit.ts";

const API_VISIT_PATH = "/api/quality/service.ashx"
export default class VisitService {
  static APIVisitToVisit(apiVisit: IAPIVisit) {
    return {
      id: apiVisit.id,
      objectName: apiVisit.ObjectName,
      client: {
        id: apiVisit.idClientObject,
        clientName: apiVisit.ClientName
      },
      firmName: apiVisit.ClientName,
      address: apiVisit.LocationAddress,
      dtCreate: apiVisit.dtCreate ? DateService.localeDateToDate(apiVisit.dtCreate.toString()) : null,
      photoCount: (Number)(apiVisit.PhotoCount),
      photos: [],
      isCompleted: !!apiVisit.dtLeave,
      dtCome: apiVisit.dtCome ? DateService.localeDateToDate(apiVisit.dtCome.toString()) : null,
      dtLeave: apiVisit.dtLeave ? DateService.localeDateToDate(apiVisit.dtLeave.toString()) : null,
    } as IVisit
  }
  static async fetchVisitList(user: IUser, dateFrom: Date | string | null, dateTo: Date | string | null) {
    try {
      dateFrom = '2023-01-01'
      const response = await axios.get(
        `${API_VISIT_PATH}?type=getQMWorkJournal&auth_key=${user?.authKey?.key}&dtFrom=${DateService.formatDateForAPI(dateFrom || new Date())}&dtTo=${DateService.formatDateForAPI(dateTo || new Date())}`
      )
      if (HttpService.isSuccessResponse(response)) {
        return (response.data ? response.data.map((x: IAPIVisit) => {
          return this.APIVisitToVisit(x)
        }) : []) as IVisitList
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
  static async fetchVisit(user: IUser, id: number) {
    try {
      const response = await axios.get(
        `${API_VISIT_PATH}?type=getQMWorkJournal&auth_key=${user?.authKey?.key}&id=${id}`
      )
      if (HttpService.isSuccessResponse(response)) {
        return (response.data ? response.data.map((x: IAPIVisit) => {
          return this.APIVisitToVisit(x)
        }) : []) as IVisitList
      } else {
        return []
      }
    } catch (e) {
      return []
    }
  }
}
