interface IAPIVisit {
  ClientName: string
  Comment: string
  GPSAddress: string
  GPS_Lat: string
  GPS_Long: string
  LocationAddress: string
  Mark: string
  ObjectName: string
  PhotoCount: number | string
  RowNum: number | string
  StaffName: string
  dtCome: Date | string
  dtCreate: Date | string
  dtLeave: Date | string
  id: number | string
  idClientObject: number | string
  idPost: number | string
  idSoftwarePlatform: number | string
  idStaff: number | string
  isRemote: boolean | string
  isStaffMark: boolean | string
  strPlace: string
}

export {
  type IAPIVisit
}