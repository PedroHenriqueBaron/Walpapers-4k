<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Imagem/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Imagem from '/components/Imagem.vue'
import Video from '/components/Video.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Imagem, Video
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
