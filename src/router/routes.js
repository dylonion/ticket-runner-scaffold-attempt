
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/testpage', component: () => import('pages/Testpage.vue')},
      { path: '/form-one-start', component: () => import('pages/cmeTabs/FormOneStart.vue')},
      { path: '/form-two-start', component: () => import('pages/cmeTabs/FormTwoStart.vue')},
      { path: '/form-three-start', component: () => import('pages/cmeTabs/FormThreeStart.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
