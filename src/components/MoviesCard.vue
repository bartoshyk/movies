<template>
<div>
   <!-- <router-link :to="moviePath"> -->
       <div>
           <img v-bind:src="posterPath" >
       </div>
       <div>{{ movie.title }}</div>
   <!-- </router-link> -->
 </div>
</template>

<script>
import repository from "../repository.js";

const POSTER_PATH = `${repository.images.base_url}w300`;
export default {
  props: ["movie"],
  computed: {
     moviePath() {
      return `/movie/${this.movie.id}`;
    },
    posterPath() {
      return `${POSTER_PATH}${this.movie.poster_path}`;
    }
  }
};
</script>