import axios from "axios";

export default {
    getUser: function () {
        return axios.get(`/api/profile`)
    },
    
    signOut: function() {
        console.log("You made a request to sign out")
        return axios.delete(`/auth/logout`)
    }
}