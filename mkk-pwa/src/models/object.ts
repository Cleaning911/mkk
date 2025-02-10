interface IObject {
  id: number
  objectName: string
}
interface IObjectList extends Array<IObject>{}

export {
  type IObject,
  type IObjectList
}