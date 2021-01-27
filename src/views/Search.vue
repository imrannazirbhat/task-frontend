<template>
  <div class="container" v-if="shows">
    <ShowCard v-for="show in shows" :key="show.show.id" :show="show.show"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShowCard from '@/components/ShowCard.vue'

const axios = require('axios');

export default {
  name: 'Search',
  components: {
    ShowCard
  },
  data() { 
    return {
      shows: null
    }
  },
  props: {
    query: String
  },
  created: function () {
    
    this.fetchData();

  },

  methods: {
    
    fetchData() {

    console.log("query", this.$route.params.query)
    let api = "http://api.tvmaze.com/search/shows?q=" + this.$route.params.query;
      

     axios.get(api).then((response) => {

        console.log(response.data);
        this.shows = response.data

      })
    }
  }
  
}
</script>

