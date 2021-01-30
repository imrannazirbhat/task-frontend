<template>

  <div class="container" v-if="shows" >

    <br/>
    
    <div class="btn-group" role="group">
      <button type="button" @click="setView(1)" class="btn" :class="view == 1 ? 'btn-success' : 'btn-secondary'" >List</button>
      <button type="button" @click="setView(2)" class="btn" :class="view == 2 ? 'btn-success' : 'btn-secondary'">Grid</button>
    </div>

    <ShowCard v-for="(show, i) in shows" :key="i" :show="show"/>

    <br/><br/>

    <div class="alert alert-danger" role="alert" v-if="error">
      {{error}}
    </div>

  </div>

</template>

<script>

import mitt from 'mitt'
window.mitt = window.mitt || new mitt()
  
// @ is an alias to /src
const axios = require('axios');
import ShowCard from '@/components/ShowCard.vue'


export default {
  name: 'Home',
  components: {
    ShowCard
  },
  data() { 
    return {
      shows: [],
      page: 1,
      query: null,
      view: 1, 
      error: null
    }
  },
  created: function () {


    // Setting up search if component is pushed
    if(this.$route.params._query) {

      this.reset()

      if(this.$route.params._query !== "") {
        this.query = this.$route.params._query
      }

    }


    // Event reuired for infinite scroll
    window.mitt.on('fetch-data-event', () => {

      this.fetchData();
      
    })

    // If component already exists, then below event
    // will fetch data without pushing component
    window.mitt.on('search-data-event', (data) => {

      this.reset()
      this.query = data.query
      this.fetchData();
      
    })

    this.fetchData();

  },

  mounted() {

    this.view = (localStorage.getItem('viewOption') === null) ? 1 : localStorage.getItem('viewOption')
    
  },

  methods: {

    setView(flag) {

      this.view = flag

      // save the view preference in local storage
      localStorage.setItem('viewOption', flag)

      window.location.reload()
      
    },
    reset() {
      this.query = null
      this.page = 1
      this.shows = []
    },
    
    // method to call search api for fetching data
    fetchData() {

     let app = this;
     let api = "http://127.0.0.1:8000/api/search/" + app.page;
    
     axios.post(api, {

       query: app.query

     }).then((response) => {

        
        if(response.data) {
          app.shows = (app.shows).concat(response.data)
          app.page++
        }
      
      })
      .catch(err => {
          app.error = err.message
      });
    }

  }
  
}
</script>

