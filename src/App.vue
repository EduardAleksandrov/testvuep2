<template>
  <div id="nav" >
    <router-link to="/">Home</router-link> |
    <!--<router-link to="/news">News</router-link> -->
    <router-link :to="'/news/' + id">News</router-link>
  </div>
  <router-view v-on:set-id="getid" />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      id: 1
    }
  },
  methods: {
    getid(idn) {
      this.id = idn;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
