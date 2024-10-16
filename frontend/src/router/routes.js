const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'test', component: () => import('pages/Test.vue') },
      { path: 'makeQueryPage', component: () => import('pages/MakeQueryPage.vue') },
      { path: 'themePage', component: () => import('pages/ThemePage.vue') },
      { path: 'picsWord', component: () => import('pages/PicsWord.vue') },
      { path: 'challengeModePage', component: () => import('pages/ChallengeModePage.vue') },
      { path: 'response', component: () => import('pages/ResponsePage.vue') },
      { path: 'theoreticalMaterialPage', component: () => import('pages/TheoreticalMaterialPage.vue') },
      { path: 'menuStrategiesPage', component: () => import('pages/MenuStrategiesPage.vue') },
      { path: 'multipleChoice', component: () => import('pages/MultipleChoice.vue') },
      { path: 'memoryGame', component: () => import('pages/MemoryGame.vue') },
      { path: 'strategiesPage', component: () => import('pages/StrategiesPage.vue') },
      { path: 'strategyRead', component: () => import('pages/strategies/read.vue') },
      { path: 'strategyRelationship', component: () => import('pages/strategies/relationship.vue') }
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
