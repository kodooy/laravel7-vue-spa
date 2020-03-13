<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        Laravel Vue SPA
      </router-link>

      <button @click="isNavbarCollapsed = !isNavbarCollapsed" class="navbar-toggler" :class="{'collapsed' : isNavbarCollapsed}" type="button" aria-controls="navbarSupportedContent" :aria-expanded="isNavbarCollapsed ? 'false' : 'true'" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" :class="{'show' : !isNavbarCollapsed}" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" v-if="isAuth">
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link">
              Home
            </router-link>
          </li>
        </ul>

        <!-- Auth -->
        <ul class="navbar-nav ml-auto" v-if="isAuth">
          <li class="nav-item dropdown">
            <router-link :to="{name: 'Account'}" class="nav-link">
              Hi, {{ user.name }}
            </router-link>

            <li class="nav-item">
              <router-link :to="{name: 'Logout'}" class="btn btn-outline-secondary">
                Logout
              </router-link>
            </li>
          </li>
        </ul>

        <!-- Guest -->
        <ul class="navbar-nav ml-auto" v-else>
          <li class="nav-item">
            <router-link :to="{name: 'Login'}" class="nav-link">
              Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Register'}" class="nav-link">
              Register
            </router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  data () {
    return {
      isNavbarCollapsed: true
    }
  },

  computed: {
    ...mapState({
      'user': state => state.auth.authUser
    }),

    ...mapGetters({
      'isAuth': 'auth/isAuth'
    })
  }
}
</script>