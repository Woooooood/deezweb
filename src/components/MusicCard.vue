<template>
    <div class="grid">
        <div v-if="song" class="music-card">
            <div class="container">
                <figure>
                <img :src="song.artist.picture" alt="">
                </figure>
                <h2>Titre : {{song.title}}</h2>
                <h3>Artiste : {{song.artist.name}}</h3>
            </div>
            <audio controls :src="song.preview" type="audio/mpeg"/>
            <br>
            <a href="#" @click.prevent="addFav">
                <p>Add to Favorite</p>
                </a>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MusicCard',
    props: {
        song : Object,
    },
    data() {
        return {
            faved : '',
        }
    },
    methods: {
       addFav(){
           
       },

       getFav(){

       },

    },
}
</script>
<style scoped lang="scss">


</style>

