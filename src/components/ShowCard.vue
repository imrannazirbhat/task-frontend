<template>
 
 <div>
     <!-- <div v-if="show" class="card float-left" style="width: 18rem;margin:2rem" :key="show.id">
      <img v-if="show.image" :src="show.image.medium" class="card-img-top" alt="...">
      <div class="card-body">
        <p><small>{{show.name}}</small></p>
        <p class="card-text" v-html="show.type"></p>
      </div>

      <div class="callout callout-info">...</div>

    </div> -->


    <div class="card mb-3" style="max-width: 540px;margin:2rem">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="show.image.medium" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body" style="padding-left: 40px;">
        <h5 class="card-title">{{ show.name }}</h5>
        <small><p class="card-text" v-html="show.summary"></p></small>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>

export default {
  name: 'ShowCard',

  props: {
    show: null,
  }
  
}
</script>
