import { defineStore } from "pinia";


export const useAuthStore = defineStore('auth',{
    state:()=>({
        id:"",
        token:"",
        name:"",
        email:""
    }),
    getters:{
        user:(state)=>state.authUser
    },
    actions:{
        async setUserDetails(res){
            this.$state.token = res.data.token

            this.$state.id = res.data.user.id
            this.$state.name = res.data.user.name
            this.$state.email = res.data.user.email
        },
        clearUser(){
            this.$state.token = null

            this.$state.id    = null
            this.$state.name  = null
            this.$state.email = null
        }
    },
    persist:true
})