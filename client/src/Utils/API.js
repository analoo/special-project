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
    },

    createEvent: function(event){
        return axios.post("/api/userEvent", event)
    },

    // needs to send the userID in 
    findUserEvents: function(userid){
        return axios.post("/api/userEvent", userid)
    },

    updateEvent: function(event, eventId){
        return axios.put(`/api/userEvent/${eventId}`, event)
    },

    deleteEvent: function(eventId){
        return axios.delete(`/api/userEvent/${eventId}`)
    }


}