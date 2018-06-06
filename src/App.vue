<template>
  <div id="app">
    <div class="flex justify-center bg-black">
      <h1 class="flex justify-center w-1/2 text-white">M o v i e s</h1>
      <p class="quote flex justify-center w-1/2 items-center text-white">"Каждый хочет быть Кэри Грантом. Даже я хотел бы им быть." (
Кэри Грант)</p>
    </div>
    <div id="nav">
      <router-link to="/">Все фильмы</router-link> 
      <router-link to="/about">Комедии</router-link>
    </div>
    <Carusel></Carusel>
    <Quote></Quote>
    <router-view/>
  </div>
</template>

<script>
import Carusel from '@/components/Carusel.vue'
import Quote from '@/components/Quote.vue'

export default {
  name:'carusel',
  name:'quote',
  components:{
    Carusel,
    Quote
  }
}
  


</script>


<style lang="scss">
#app {
    font-family: 'Alegreya Sans SC', sans-serif;
    font-family: 'Lobster', cursive;
    font-family: 'Bad Script', cursive;
    font-family: 'Cormorant SC', serif;
    font-family: 'Cormorant Infant', serif;
    font-family: 'Ledger', serif;
    font-family: 'Jura', sans-serif;
    font-family: 'Tenor Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

.quote{
 font-style: italic;
}
</style>
<style src="./assets/styles/main.css">
</style>
