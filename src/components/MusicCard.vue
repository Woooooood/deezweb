<template>
    <div v-if="song">
        <div class="container">
            <img :src="song.artist.picture" alt="">
            <h1>Titre : {{song.title}}</h1>
            <p>Artiste : {{song.artist.name}}</p>
        </div>
        <audio controls :src="song.preview" type="audio/mpeg"/>
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
            
        }
    },
    methods: {
        
    },
}
</script>

<style>

</style>
