<template>
  <div id="app">
    <div class="flex justify-center bg-black">
      <h1 class="flex justify-center w-1/2 text-white tracking-wide">Movies</h1>
      <Quote></Quote>
    </div>
    <div class="wrapperLink mt-1 mb-1">
      <router-link to="/about" class="nav">Премьеры</router-link> |
      <router-link to="/" class="nav">Фильмы</router-link>  |
      <router-link to="/about" class="nav">Мультфильмы</router-link> |
      <router-link to="/about" class="nav">Сериалы</router-link>
    </div>
    <Carusel></Carusel>

    <router-view/>
  </div>
</template>

<script>
import Carusel from '@/components/Carusel.vue'
import Quote from '@/components/Quote.vue'

export default {
  name:'',
  components:{
    Carusel,
    Quote
  }
}
</script>

<style lang="scss">
#app {
font-family: 'Tenor Sans', sans-serif;
  text-align: center;
};
.nav{
  text-decoration: none;
  color: #008080;
};
.nav:hover {
  color: #2F4F4F;
}
</style>
<style src="./assets/styles/main.css">
</style>
