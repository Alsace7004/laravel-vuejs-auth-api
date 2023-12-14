import { createRouter,createWebHistory } from "vue-router";
import { useAuthStore } from "../store";

const routes = [
    {
        path:'/login',
        name:'Login',
        component:()=>import("../components/Login.vue")
    },
    {
        path:'/',
        name:'Dashboard',
        component:()=>import("../components/Dashboard.vue"),
        meta:{requiresAuth:true},
      
    }
];



const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to,from,next)=>{
    const {token} = useAuthStore()
    if(to.meta.requiresAuth && !token){
        next({name:'Login'})
    }else{
        next()
    }
})

export default router