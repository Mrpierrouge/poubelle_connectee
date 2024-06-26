import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "AccueilView",
			component: AccueilView,
		},
		{
			path: "/dashboard",
			name: "DashboardView",
			component: DashboardView,
			props: true,
		},
	],
});

export default router;
