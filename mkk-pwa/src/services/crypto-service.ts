export default class CryptoService {
    static hidePhoneNumber(phone: string) {
        try {
            phone = phone.replace(/[^0-9]+/g, '')
            phone += "911";
            let cryptedPhone = "";
            for (let i = 0; i < phone.length; i++) {
                const code = (Number)(phone[i]) + 80 - i;
                console.log(code)
                cryptedPhone += String.fromCharCode(code);
            }
            return cryptedPhone;
        } catch (e) {
            return null;
        }
    }
}