<template>
<div class="container">
  <br/>
  <h2>Configuration</h2>
  <form class="form-inline">
  <div class="form-group mb-2">
    <label>Page Size</label>
    
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <input type="number" class="form-control" placeholder="Page Size" v-model="pageSize">
    
  </div>
  <button type="button" @click="save" class="btn btn-primary mb-2">Save</button>
  <label v-if="msg !== ''">&nbsp;{{msg}}</label>
</form>
</div>
</template>


<script>

// @ is an alias to /src
const axios = require('axios');

export default {
  
  name: 'Configuration',

  data() {
    return {
      pageSize: null,
      msg: ""
    }
  },

  created() {

    this.fetchData()

  },

  methods: {

    fetchData() {

     let app = this;
     let api = "http://127.0.0.1:8000/api/configuration/page_size";
    
     axios.get(api).then((response) => {

        if(response.data) {
          app.pageSize = response.data.value
        }
      
      })
    },

    save() {

     let app = this;
     app.msg = "";
     let api = "http://127.0.0.1:8000/api/configuration/page_size";
    
      axios.put(api, {

        value: app.pageSize

      }).then((response) => {

        console.log("done..",response.data)
        app.msg = "Updated"
      
      })

    }

  }
}
</script>