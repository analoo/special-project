import axios from "axios";

export default {
    // validated paths
    getUser: function () {
        return axios.get(`/api/user`)
    },
    
    register: function(user){
        return axios.post("/api/user", user)
    },

    updateUser: function(user){
        return axios.put("/api/user", user)
    },

    login: function(user){
        console.log(user)
        return axios.post("/auth", user)

    },

    signOut: function() {
        return axios.delete(`/auth`)
    },

    createEvent: function(event){
        return axios.post("/api/event", event)
    },

    updateEvent: function(eventID, event){
        return axios.put(`/api/event/${eventID}`, event)
    },

    getSingleEvent: function(eventID){
        return axios.get(`/api/userEvent/${eventID}`)
    },

    deleteEvent: function(event){
        return axios.delete(`/api/event/${event}`)
    },

    findLocation: function(search){
        return axios.put("/api/event",search)
    },

    userMonths: function(){
        return axios.get("/api/userEvent")
    },

    activitiesByMonth: function(dates){
        return axios.put("/api/userEvent", dates)
    }

}