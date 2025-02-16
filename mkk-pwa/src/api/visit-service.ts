import type {IUser} from "../models/user.ts";
import axios from "axios";
import DateService from "../services/date-service.ts";
import HttpService from "../services/http-service.ts";

const API_VISIT_PATH = "/api/quality/service.ashx"
export default class VisitService {
  static async fetchVisitList(user: IUser, dateFrom: Date | string | null, dateTo: Date | string | null) {
    try {
      const response = await axios.get(
        `${API_VISIT_PATH}?type=getQMWorkJournal&auth_key=${user?.authKey?.key}&dtFrom=${DateService.formatDateForAPI(dateFrom || new Date())}&dtTo=${DateService.formatDateForAPI(dateTo || new Date())}`
      )
      if (HttpService.isSuccessResponse(response)) {
        return response.data
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}
