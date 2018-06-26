<template>
  <div class=" mx-auto flex flex-wrap justify-center w-5/6">
      <div v-if="!movies">Загрузка...</div>
      <div class="m-2 flex flex-wrap w-1/6 rounded overflow-hidden bg-grey-light pb-3 shadow" v-else v-for="movie in movies" :key="movie.id">
        <MoviesCard :movie="movie"> </MoviesCard>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import repository from "../repository.js";
import MoviesCard from "./MoviesCard.vue";

export default {
  data(){
    return{
      movies:[]
    }
  },
  name: "MoviesList",
  created() {
    this.getAllMovies();
  },
  methods:{
    getAllMovies: async function() {
      axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${
            repository.api_key
          }&language=${repository.lang}`
      )
      .then(response =>{
        this.movies = response.data.results;
        console.log(response)
      })
    }

    },
    components:{
      MoviesCard
    }
  }

</script>

<style>

</style>
