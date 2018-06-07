<template>
  <div id="app">
    <div class="flex justify-center bg-black">
      <h1 class="flex justify-center w-1/2 text-white tracking-wide">Movies</h1>
      <Quote></Quote>
    </div>
    <div id="nav">
      <router-link to="/">Все фильмы</router-link> 
      <router-link to="/about">Комедии</router-link>
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

}

</style>
<style src="./assets/styles/main.css">
</style>
