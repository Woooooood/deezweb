<template>
<div>
    <h1>Recherche</h1>
    <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant :</p>
    <form @submit.prevent="submit">
        <label>Titre : </label>
        <input type="text" v-model="title">
        <br>
        <label>Trier par: </label>
        <select v-model="searchBy">
            <option value="ALBUM_ASC">Album</option>
            <option value="ARTIST_ASC">Artiste</option>
            <option value="TRACK_ASC">Musique</option>
            <option value="RANKING_ASC">Les plus populaires</option>
            <option  value="RATING_ASC">Les mieux notés</option>
        </select>
        <button type="submit">Go</button>
    </form>
    <div v-if="song">
        <MusicCard v-for="(item, index) in song.data" :key="index" :song="item"/>   
    </div>
    <div v-if="song">
        <div v-if="song.data.length == 0">
            No results found ...
        </div>
    </div>

</div>
</template>

<script>
import MusicServices from '@/services/MusicServices.js'
import MusicCard from '@/components/MusicCard.vue'
export default {
    name : 'Search',
    data() {
        return {
            title : '',
            searchBy : 'ALBUM_DESC',
            song : null
        };
    },
    components: {
        MusicCard,
    },
    
    methods: {
        submit(){
            MusicServices.search(this.title, this.searchBy, 9).then((song) => {
                this.song = song
            });
        },
    },
}
</script>

<style>

</style>
