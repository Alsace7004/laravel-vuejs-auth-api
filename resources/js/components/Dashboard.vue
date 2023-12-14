<template>
    <router-link :to="'/login'">Login</router-link>
    <h1>Hello am the dashboard</h1>
    <button @click="getInformations"> Obtenir mes Informations</button>
</template>

<script>
import axiosClient from "../axios/index"

export default{
    name:"Dashboard",
    methods:{
        getInformations(){
            axiosClient.post('/user')
                .then((res)=>console.log("Valeur de res dans getInformation :",res))
                .catch((err)=>{console.log('Valeur de err : ',err)})
        }
    }
}
</script>
