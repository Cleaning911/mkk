import type {IUser} from "../models/user.ts";
import axios from "axios";
import DateService from "../services/date-service.ts";
import HttpService from "../services/http-service.ts";
import type {IObjectList} from "../models/object.ts";
import type {IVisit, IVisitList} from "../models/visit.ts";
import type {IAPIVisit} from "../models/api/visit.ts";

const API_VISIT_PATH = "/api/quality/service.ashx"
export default class VisitService {
  static async fetchVisitList(user: IUser, dateFrom: Date | string | null, dateTo: Date | string | null) {
    try {
      const response = await axios.get(
        `${API_VISIT_PATH}?type=getQMWorkJournal&auth_key=${user?.authKey?.key}&dtFrom=${DateService.formatDateForAPI(dateFrom || new Date())}&dtTo=${DateService.formatDateForAPI(dateTo || new Date())}`
      )
      if (HttpService.isSuccessResponse(response)) {
        return (response.data ? response.data.map((x: IAPIVisit) => {
          return {
            id: x.id,
            objectName: x.ObjectName,
            client: {
              id: x.idClientObject,
              clientName: x.ClientName
            },
            address: x.LocationAddress,
            dtCreate: x.dtCreate ? DateService.localeDateToDate(x.dtCreate.toString()) : null,
            photoCount: (Number)(x.PhotoCount),
            photos: [],
            isCompleted: !!x.dtLeave,
            dtCome: x.dtCome ? DateService.localeDateToDate(x.dtCome.toString()) : null,
            dtLeave: x.dtLeave ? DateService.localeDateToDate(x.dtLeave.toString()) : null,
          } as IVisit
        }) : []) as IVisitList
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}
