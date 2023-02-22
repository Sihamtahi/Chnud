import {defineStore} from "pinia"; 
export default definestore("user", {
    store() => ({
        userLoggedIn :  false, 
    })
})