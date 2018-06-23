<template>
  <div class="films">
    <MoviesList></MoviesList>
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";


export default {
  name: 'films',
  components: {
  MoviesList
  }
}
</script>
