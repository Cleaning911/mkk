import type {IUser} from "../models/user.ts";
import type {IObjectList} from "../models/object.ts";
import axios from "axios";
import HttpService from "../services/http-service.ts";

const API_OBJECT_PATH = "/api/quality/service.ashx"
export default class ObjectService {
  static async fetchObjectList(user: IUser, id: number = 0, isOnlyMy: boolean = true, search: string = ""): IObjectList {
    try {
      const response = await axios.get(
        `${API_OBJECT_PATH}?type=searchObjects&auth_key=${user?.authKey?.key}&only_my=${isOnlyMy}${search ? '&search=' + search : ''}`
      )
      if (HttpService.isSuccessResponse(response)) {
        return response.data as IObjectList
      }
      return [] as IObjectList
    } catch (e) {
      console.log('fetchObjectList')
      return [] as IObjectList
    }
  }
}