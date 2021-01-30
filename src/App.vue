<template >
<div @scroll="handleScroll" :style="customStyles" ref="scrollDiv">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" @click="init('home')" href="#">TV Shows</a>
   
    <form class="d-flex">
      <input class="form-control me-2" v-model="query" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" @click="init('search')" type="button">Search</button>
    </form>

    <router-link to="Configuration">Configurations</router-link>
  
  </div>
</nav>

  <router-view/>
</div>
</template>

<script>

import mitt from 'mitt'
window.mitt = window.mitt || new mitt()

export default {
  name: 'App',
  data() {
    return {
      query: "",
      scrolledToBottom: false
    }
  },

  computed: {
    customStyles () {
      return {
        height: `${window.innerHeight}px`,
        overflow: 'auto'
      }
    }
  },

  methods: {

    handleScroll: function(e) {

      // detect the scrool end and load the data or next page
      if (e.srcElement.scrollTop >= (e.srcElement.scrollHeight - e.srcElement.offsetHeight)) {
        
        window.mitt.emit('fetch-data-event', null);
      }
    

    },

    init(flag) {


      if(flag === "home") {
        
        this.query = ""
      
      } 

      // If current component is not Home, then push the component
      if(this.$route.name != 'Home') {

        this.$router.push({ name: 'Home', params: { _query: this.query } })
      } else {

        // fire the event to fetch data
        window.mitt.emit('search-data-event', {query: this.query});
      }

    }

  }
}
</script>