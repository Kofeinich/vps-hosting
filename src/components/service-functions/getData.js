import axios from "axios";

export async function getData() {
    const BASE_URL = `https://api.sweb.ru/notAuthorized/`
    const request = JSON.stringify({
        "jsonrpc":"2.0",
        "method" : "vpsOsConfig",
        "params": {},
    })
    try {
        let r = await axios.post(`${BASE_URL}`, request)
        console.log(r.data)
        return r.data
    } catch (err) {
        console.error('Something went wrong' + err);
        return null
    }
}