import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/tokens',
    name: 'tokens',
    component: () => import('@/pages/TokensPage.vue')
  },
  {
    path: '/composables',
    name: 'composables',
    component: () => import('@/pages/ComposablesPage.vue')
  },
  // UI Primitives
  {
    path: '/button',
    name: 'button',
    component: () => import('@/pages/ui/ButtonPage.vue')
  },
  {
    path: '/divider',
    name: 'divider',
    component: () => import('@/pages/ui/DividerPage.vue')
  },
  {
    path: '/search-bar',
    name: 'search-bar',
    component: () => import('@/pages/ui/SearchBarPage.vue')
  },
  {
    path: '/star-rating',
    name: 'star-rating',
    component: () => import('@/pages/ui/StarRatingPage.vue')
  },
  // Form Controls
  {
    path: '/input',
    name: 'input',
    component: () => import('@/pages/form/InputPage.vue')
  },
  {
    path: '/select',
    name: 'select',
    component: () => import('@/pages/form/SelectPage.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import('@/pages/form/SwitchPage.vue')
  },
  {
    path: '/stepper',
    name: 'stepper',
    component: () => import('@/pages/form/StepperPage.vue')
  },
  {
    path: '/otp-input',
    name: 'otp-input',
    component: () => import('@/pages/form/OtpInputPage.vue')
  },
  {
    path: '/file-upload',
    name: 'file-upload',
    component: () => import('@/pages/form/FileUploadPage.vue')
  },
  // Cards
  {
    path: '/card',
    name: 'card',
    component: () => import('@/pages/card/CardPage.vue')
  },
  {
    path: '/image-card',
    name: 'image-card',
    component: () => import('@/pages/card/ImageCardPage.vue')
  },
  // Shell & Overlays
  {
    path: '/shell',
    name: 'shell',
    component: () => import('@/pages/shell/ShellPage.vue')
  },
  {
    path: '/header',
    name: 'header',
    component: () => import('@/pages/shell/HeaderPage.vue')
  },
  {
    path: '/footer-bar',
    name: 'footer-bar',
    component: () => import('@/pages/shell/FooterBarPage.vue')
  },
  {
    path: '/page-title',
    name: 'page-title',
    component: () => import('@/pages/shell/PageTitlePage.vue')
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: () => import('@/pages/shell/DrawerPage.vue')
  },
  {
    path: '/action-sheet',
    name: 'action-sheet',
    component: () => import('@/pages/shell/ActionSheetPage.vue')
  },
  {
    path: '/action-modal',
    name: 'action-modal',
    component: () => import('@/pages/shell/ActionModalPage.vue')
  },
  // Navigation & Lists
  {
    path: '/accordion',
    name: 'accordion',
    component: () => import('@/pages/navigation/AccordionPage.vue')
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('@/pages/navigation/TabsPage.vue')
  },
  {
    path: '/list-group',
    name: 'list-group',
    component: () => import('@/pages/navigation/ListGroupPage.vue')
  },
  // Feedback & Status
  {
    path: '/badge',
    name: 'badge',
    component: () => import('@/pages/feedback/BadgePage.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('@/pages/feedback/ToastPage.vue')
  },
  {
    path: '/snackbar',
    name: 'snackbar',
    component: () => import('@/pages/feedback/SnackbarPage.vue')
  },
  {
    path: '/skeleton',
    name: 'skeleton',
    component: () => import('@/pages/feedback/SkeletonPage.vue')
  },
  {
    path: '/offline-detector',
    name: 'offline-detector',
    component: () => import('@/pages/feedback/OfflineDetectorPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes
})

export default router
