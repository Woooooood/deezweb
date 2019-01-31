<template>
    <div class="grid">
        <div v-if="song" class="music-card">
            <div class="container">
                <figure>
                <img :src="song.artist.picture" alt="">
                </figure>
                <h1>Titre : {{song.title}}</h1>
                <p>Artiste : {{song.artist.name}}</p>
            </div>
            <audio controls :src="song.preview" type="audio/mpeg"/>
            <br>
            <a href="#">add to favorite</a>
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
            
        }
    },
    methods: {
        
    },
}
</script>
<style scoped lang="scss">

.grid{
     display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
}
.music-card {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    box-shadow: 0 0 15px #c0c0c0;
    border-radius: 2px;
    background-color: #fafafa;
    overflow: auto;
    text-align: left;
    padding: 0.25em 1.25em 0.25em 0;
}

.music-card > figure {
    margin: 0.25em;
    text-align: center;
    display: flex;
    align-items: center;
}

.music-card > figure > img {
    display: block;
    border-radius: 300px;
    max-width: 128px;
}

.music-card > div {
    margin: 0.25em;
    font-size: 0.8em;
    line-height: 1.6em;
}
</style>

