import axios from "axios";

export default {
    getUser: function () {
        return axios.get(`/api/profile`)
    },
    
    signOut: function() {
        return axios.delete(`/auth/logout`)
    },

    login: function(user){
        return axios.post("/auth/login", user)
    },

    register: function(user){
        return axios.post("/auth/register", user)
    }
    

}