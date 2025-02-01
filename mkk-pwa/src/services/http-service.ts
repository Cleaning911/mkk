const HTTP_CODE_SUCCESS = 200
export default class HttpService {
    static isSuccessResponse(response: any) {
        return response && response.code === HTTP_CODE_SUCCESS && response.data && !response.data.error
    }
}