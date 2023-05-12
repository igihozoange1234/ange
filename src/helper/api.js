import axios from "axios"
const headers={
    'Content-Type':'application/json',
}
 const apicall=axios.login({
    baseURL:'http://randomuser.me/',
    headers:headers
 });
 export default apicall