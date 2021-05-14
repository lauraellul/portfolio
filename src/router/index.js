import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Homepage from '@/components/Homepage'
// import Projects from "../components/projects/Projects";
import ProjectsPage from "../components/projects/ProjectsPage";
import Details from "../components/projects/Details";

Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Layout,
			children: [
				{
					path: '/',
					name: 'Homepage',
					component: Homepage
				},
				{
					path: '/projects',
					component: ProjectsPage
				},
				{
					path: '/projects/:id',
					component: Details
				}
			]
		}
	]
})