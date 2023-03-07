const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'test', component: () => import('pages/Test.vue') },
      { path: 'makeQueryPage', component: () => import('pages/MakeQueryPage.vue') },
      { path: 'themePage', component: () => import('pages/ThemePage.vue') },
      { path: 'challengeModePage', component: () => import('pages/ChallengeModePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
