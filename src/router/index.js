import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import MessageContact from "@/views/MessageContact.vue";
import NotFound from "@/views/NotFound.vue";
import Profil from "@/views/Profil.vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/', 
        name: 'Home', 
        component: Home
    }, 
    {
        path: '/contact', 
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
    }, 
    {
        path: '/messageContact/:message', 
        name: 'Message', 
        component: MessageContact, 
        props: true
    }, 
    {
        path: '/login', 
        name: 'Login', 
        component: Login, 
        meta: {
            titrePage: 'Se Connecter'
        }
    },
    {
        path: '/profil', 
        name: 'Profil', 
        component: Profil, 
        meta: {
            titrePage: 'Mon Profil', 
            connecte: true
        }
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes
});

router.beforeEach((to, _, next) => {
    document.title = 'Initiation Vue POE';
    
    if(to.meta) {
        if(to.meta.titrePage) {
            document.title = to.meta.titrePage;
        }

        if(to.meta.connecte &&  (!localStorage.connecte || localStorage.connecte === 'false')) {
            return next({ name: 'Home' });
        }
    }
    
    next();
})

export default router;