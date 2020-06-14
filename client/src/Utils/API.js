import axios from "axios";

export default {
    // validated paths
    getUser: function () {
        return axios.get(`/api/user`)
    },
    
    register: function(user){
        return axios.post("/api/user", user)
    },

    login: function(user){
        return axios.post("/auth", user)
    },

    signOut: function() {
        return axios.delete(`/auth`)
    },

    createEvent: function(event){
        return axios.post("/api/event", event)
    },

    findLocation: function(){
        return axios.get("/api/event")
    },

    // not validated
    userMonths: function(userid){
        return axios.get("/api/userEvent")
    },

    // eventsByMonth


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