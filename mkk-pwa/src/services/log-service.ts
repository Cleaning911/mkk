export default class LogService {
    static logError(point: string, e: any) {
        if (import.meta.env.VITE_APP_ALLOW_CONSOLE_LOGS) {
            console.log(point || 'unknown place', e)
        }
        if (import.meta.env.VITE_APP_ALLOW_SEND_ERRORS) {
            // send email to support
        }
    }
}
