<template>
  <div>
    <nav-bar></nav-bar>

    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  components: { NavBar }
}
</script>