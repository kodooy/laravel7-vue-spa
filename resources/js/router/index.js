import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PasswordEmailPage from '../pages/PasswordEmailPage'
import PasswordResetPage from '../pages/PasswordResetPage'
import EmailVerifyPage from '../pages/EmailVerifyPage'
import PasswordConfirmPage from '../pages/PasswordConfirmPage'
import HomePage from '../pages/HomePage'
import AccountPage from '../pages/AccountPage'
import PasswordChangePage from '../pages/PasswordChangePage'

Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: { requiresGuest: true }
    },
    {
      path: '/logout',
      name: 'Logout',
      meta: { requiresAuth: true },
      beforeEnter (to, from, next) {
        store.dispatch('auth/logout')
          .then(() => next({name:'LandingPage'}))
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
      meta: { requiresGuest: true }
    },
    {
      path: '/password/reset',
      name: 'PasswordReset',
      component: PasswordEmailPage,
      meta: { requiresGuest: true }
    },
    {
      path: '/password/reset/:token',
      component: PasswordResetPage,
      meta: { requiresGuest: true },
      props: true,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/email/verify',
      name: 'EmailVerify',
      component: EmailVerifyPage,
      meta: { requiresAuth: true, requiresNotVerified: true }
    },
    {
      path: '/password/confirm',
      name: 'PasswordConfirm',
      component: PasswordConfirmPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/account',
      name: 'Account',
      component: AccountPage,
      meta: { requiresAuth: true, requiresVerify: true }
    },
    {
      path: '/password/change',
      name: 'PasswordChange',
      component: PasswordChangePage,
      meta: { requiresAuth: true, requiresVerify: true, requiresConfirm: true }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.getters['auth/isGuest']) {
      return next({name: 'Login'});
    }
    if (to.meta.requiresNotVerified) {
      if (store.getters['auth/isVerified']) {
        return next({name: 'Home'});
      }
    }
    if (to.meta.requiresVerify) {
      if (!store.getters['auth/isVerified']) {
        return next({name: 'EmailVerify' });
      }
    }
    if (to.meta.requiresConfirm) {
      if (!store.getters['auth/hasPasswordConfirmed']) {
        return next({name: 'PasswordConfirm', params: { intended: to.path } });
      }
    }
    return next();
  } else if (to.meta.requiresGuest) {
    if (store.getters['auth/isAuth']) {
      return next({name: 'Home'});
    }
    return next();
  } else {
    return next();
  }
});

export default router;