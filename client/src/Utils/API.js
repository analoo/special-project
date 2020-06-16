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

    findLocation: function(){
        return axios.get("/api/event")
    },

    // not validated
    userMonths: function(){
        return axios.get("/api/userEvent")
    },

    activitiesByMonth: function(dates){
        return axios.put("/api/userEvent", dates)
    }


    // updateEvent: function(event, eventId){
    //     return axios.put(`/api/userEvent/${eventId}`, event)
    // },

    // deleteEvent: function(eventId){
    //     return axios.delete(`/api/userEvent/${eventId}`)
    // },




   

    // needs to send the userID in 
    // findUserEvents: function(userid){
    //     return axios.post("/api/userEvent", userid)
    // },

   


}