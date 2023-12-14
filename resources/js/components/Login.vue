<template>
    <h1>Login</h1>
    <div class="login_container">
        <div class="login_text">Se connecter</div>
        <div class="login_form_input_control">
            <input type="text" class="login_form_input" v-model="user.email" placeholder="Email">
        </div>
        <span v-if="errors.email" class="error_txt">{{errors.email[0]}}</span>

        <div class="login_form_input_control">
            <input type="password" class="login_form_input" v-model="user.password" name="" id="" placeholder="Password">
        </div>
        <span v-if="errors.password" class="error_txt">{{errors.password[0]}}</span>
        
        <span v-if="errMessage" class="error_txt">{{errMessage}}</span>
        <div class="login_form_input_control">
            <button class="login_btn" :class="loading ? 'disabled':''" @click="loginUser">Se connecter</button>
        </div>
    </div>
</template>


<script>
        import axiosClient from "../axios/index"
        import {useAuthStore} from "../store/index"
        const userStore = useAuthStore();
export default{
    name:"Login",
     data(){
        return{
            errors:[],
            user:{
                email:'',
                password:''
            },
            loading:false,
            errMessage:'',
        }
    },
    methods:{
        /************************************************************** */


        loginUser(){
            this.getToken();
            this.errMessage=''
            this.errors = []
            /*************************************************/
            const login_btn = document.querySelector('.login_btn')
            login_btn.classList.add("loading");
            login_btn.innerHTML = "Connexion en cours..."
            this.loading =  true
            /*************************************************/
            axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('api/login',this.user).then((res)=>{
                        localStorage.clear(); 
                        /*************************************************/
                        login_btn.classList.remove("loading");
                        login_btn.innerHTML ="Se connecter"
                        this.loading =  false
                        /*************************************************/
                        
                        if(res.data.status){
                         
                                userStore.setUserDetails(res)
                                this.$router.replace("/");
                        }
                    }).catch((err)=>{
                        /*************************************************/
                        login_btn.classList.remove("loading");
                        login_btn.innerHTML ="Se connecter"
                        this.loading =  false
                        /*************************************************/
                        //console.log("Valeur de err dans loginUser:",err.response)
                        
                        if(err.response.status === 422){
                            this.errors = err.response.data.errors
                        }else if(err.response.status === 401){
                            this.errMessage = err.response.data.message
                            this.user.password =''
                        }else{
                            console.log("erreur: probleme de connexion")
                            //Swal.fire('Erreur!','Probleme de connexion.','error') ;
                        }
                    })
            });
            
        },
    
    }
}
</script>