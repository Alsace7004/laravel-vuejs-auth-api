import { createRouter,createWebHistory } from "vue-router";


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
        meta:{requiresAuth:true}
    }
];

router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth && !store.state.user.token){
        next({name:'Login'})
    }else{
        next()
    }
})

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router