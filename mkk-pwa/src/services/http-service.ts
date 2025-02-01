import axios from "axios";

const HTTP_CODE_SUCCESS = 200
export default class HttpService {
    static isSuccessResponse(response: any) {
      console.log(response)
      return response && response.status === HTTP_CODE_SUCCESS && (response.result === 'OK' || (response.data && !response.data.error))
    }
    static post(url: string, params: any) {
      return axios.post(url, params, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }
}