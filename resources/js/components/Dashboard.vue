<template>
    <button class="btn btn-danger" @click="logout">Se Deconnecter</button>
    <div class="ml">
            <h1>Hello am the dashboard</h1>
            <button class="btn-primary" @click="getInformations"> Obtenir mes Informations</button>
    </div>

</template>

<script>
import axiosClient from "../axios/index"

export default{
    name:"Dashboard",
    methods:{
        getInformations(){
            axiosClient.get('/user')
                .then((res)=>console.log("Valeur de res dans getInformation :",res))
                .catch((err)=>{console.log('Valeur de err : ',err)})
        },

        logout() {
             
             
                axios.post("logout",null,{
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                    }
                })
                .then((res) => {
                    localStorage.removeItem("auth");
                    localStorage.clear();
                    this.$router.push("/login");
                    //router.push({ path: "/login" });
                })
                .catch((err) => {
                    //console.log("Valeur de error dans logout:", err);
                });
        }
    }
}
</script>


<style scoped>
    .btn{
        
        padding: 0.5rem 2rem;
        margin: 2rem;
        border-radius: .2rem;
        background: transparent;
        transition: 0.5s ease-in-out
    }
    /***/
    .btn-danger{
        border: 0.2rem solid #4b1b18;
        padding: 0.5rem 2rem;
        margin: 2rem;
        border-radius: .2rem;
        background: #8a2802;
        color: #fff;
        transition: 0.5s ease-in-out
    }
    .btn-danger:hover{
        background: #c53b05;
        border: 0.2rem solid #453689;
    }
    /***/
    .btn-primary{
        border: 0.2rem solid #21184b;
        padding: 0.5rem 2rem;
        margin: 2rem;
        border-radius: .2rem;
        background: #453689;
        color: #fff;
        transition: 0.5s ease-in-out
    }
    .btn-primary:hover{
        background: #21184b;
          border: 0.2rem solid #453689;
    }
    /***/
    .ml{
            margin-left: 2rem;
    }
</style>
