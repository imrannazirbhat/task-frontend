<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="./">TV Shows</a>
   
    <form class="d-flex">
      <input class="form-control me-2" v-model="query" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" @click="searchOnClick" type="button">Search</button>
    </form>

  </div>
</nav>
<router-view/>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      query: ""
    }
  },
  methods: {

    searchOnClick() {

      console.log("clicked..")

      if(this.query === "") {
        this.$router.push({ name: 'Home', params: {query: this.query }})
      } else {
        this.$router.push({ name: 'Search', params: {query: this.query }})
      }
    }
  }
}
</script>