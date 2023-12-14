import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import('../views/DashboardView.vue'),
        },
        {
            path: '/param',
            name: 'parametros',
            component: () => import('../views/ParametrosView.vue'),
        },
        {
            path: '/responsible',
            name: 'responsables',
            component: () => import('../views/ResponsablesView.vue'),
        },
        {
            path: '/types_al',
            name: 'tipos-almacen',
            component: () => import('../views/TiposAlmacenView.vue'),
        },
        {
            path: '/types_an',
            name: 'tipos-anulacion',
            component: () => import('../views/TiposAnulacionView.vue'),
        },
        {
            path: '/types_su',
            name: 'tipos-suceso',
            component: () => import('../views/TiposSucesoView.vue'),
        },
    ],
});

export default router;
