<template>
 <div>
   <img v-bind:src="posterPath">
   <p>{{this.movie.overview}}</p>
   <ul>
      <li><span class="aboutFilm">Жанр: </span><span v-for ="movie in movie.genres" :key="movie.id">{{movie.name}} </span></li>
      <li><span class="aboutFilm">Длительность: </span>{{ movie.runtime }} мин.</li>
      <li><span class="aboutFilm">Дата выпуска: </span>{{ movie.release_date }}</li>
      </ul>

 </div>
</template>

<script>
import axios from "axios";
import repository from "../repository.js";


 const POSTER_PATH = `${repository.images.base_url}w342`;
const BACKDROP_PATH = `${repository.images.base_url}w780`;

export default {
  data(){
    return{
      movie:[]
    }
}, 
 created() {
    this.getMovie();
  },
  methods: {
    getMovie: async function (){
     try {
       axios
         .get(
          `https://api.themoviedb.org/3/movie/${
            this.$route.params.id
          }?api_key=${repository.api_key}&language=${repository.lang}`
          )
     .then(response => {
            this.movie = response.data;
            console.log(this.movie);
          });
      } catch (e) {
        console.error(e);
      }
    }
  },
  computed: {
      posterPath() {
        return `${POSTER_PATH}${this.movie.poster_path}`;
      }
    }
  }
  
</script>

<style>
li {
    list-style-type: none;
}

.aboutFilm{
color: #008080;
}
</style>