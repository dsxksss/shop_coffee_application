import axios from "axios";

const testBaseUrl = "http://localhost:3000";

const instance = axios.create({
    baseURL: testBaseUrl,
    timeout: 2000,
    // headers: { 'X-Custom-Header': 'foobar' }
})

export default instance;