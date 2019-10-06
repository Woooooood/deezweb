<template>
  <div class="search">
    <h1>Recherche</h1>
    <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant</p>
    <hr>

    <form @submit.prevent="getSearch">
      <div class="searchTitle">
        <span>Titre: </span>
        <input placeholder="Eminem, Armin Van Buuren, Rihanna, ..." type="text" v-model="q">
      </div>
      <div class="searchFilter">
        <span>Trier par:</span>
        <select v-model="order">
          <option value="ALBUM_ASC">Album</option>
          <option value="ARTIST_ASC">Artiste</option>
          <option value="TRACK_ASC">Musique</option>
          <option value="RANKING_DESC">Les plus populaires</option>
          <option value="RATING_DESC">Les mieux notés</option>
        </select>
      </div>
      <button class="btn">Go</button>
    </form> 

    <hr>
  <div v-if="tracks.data && tracks.data.length !== 0">
    <h2>Résultats</h2>
      <div class="trackList">
      <MusicCard :track="track" v-for="track in tracks.data" :key="track.id"/>
      </div>
  </div>
  <p class="no-result" v-else-if="tracks !== ''">Aucun résultat pour cette recherche ...</p>
  </div>
</template>

<script>
import MusicCard from '@/components/MusicCard.vue'
import MusicServices from '@/services/MusicServices.js'
export default {
  name: 'Search',
  data(){
    return {
      tracks: '',
      q: '',
      order: 'ALBUM_ASC',
    }
  },
  components:{
    MusicCard
  },
  methods:{
      getSearch(){
        MusicServices.fetchAll(this.q, this.order).then(tracks => {
          this.tracks = tracks
      })
    },
  }
  }
</script>

