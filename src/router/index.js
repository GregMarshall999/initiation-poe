import Home from "@/views/Home.vue";
import MessageContact from "@/views/MessageContact.vue";
import NotFound from "@/views/NotFound.vue";
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
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes
});

export default router;