interface IObject {
  id: number
  objectName: string
  firmName: string
  address: string
}
interface IObjectList extends Array<IObject>{}

export {
  type IObject,
  type IObjectList
}