 <template>
  <div id="app">
    <navbar>
    <img alt="Vue logo" src="./assets/logo.png">
    <music-card></music-card>
    </navbar>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Home from '@/components/Home.vue'
import Search from '@/components/Search.vue'
import MusicCard from '@/components/MusicCard.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Home,
    Search,
    MusicCard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
