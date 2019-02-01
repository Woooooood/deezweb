<template>
<div>
    <p>Fonctionnalité à venir !</p>
    <h1>Mes favoris </h1> <br>
    <p>Listes de mes favoris</p>
    <div v-if="favsong">
        <MusicCard v-for="(item, index) in song.data" :key="index" :song="item" />
    </div>
    <div v-else>
        Aucun favoris dans votre liste ...
    </div>

</div>
    
</template>

<script>
import MusicCard from '@/components/MusicCard.vue';
export default {
    name : 'Favorite',
    components : {
        MusicCard,
    },
    data() {
        return {
            favsong : null,      
        };
    },
}
</script>

<style>

</style>
