import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Accueil from '../components/Accueil.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'accueil', component: Accueil },

    ]
    
})

export default router