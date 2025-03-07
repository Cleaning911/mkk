import type {IObject} from "../models/object.ts";

export default class ClientObjectService {
  static apiObjectToIObject(rawObject: any) {
    if (!rawObject) {
      return null
    }
    return {
      id: rawObject.id,
      objectName: rawObject.objectName || '',
      firmName: rawObject.FirmNameFull || '',
      address: rawObject.LocationAddress || ''
    } as IObject
  }
}