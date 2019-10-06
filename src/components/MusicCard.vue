<template>
  <article class="track-card">
    <div class="flex">
        <figure>
            <img :src="track.artist.picture" :alt="track.artist.name">
        </figure>
        <div>
            <h1>{{track.title}}</h1>
            <p>{{track.artist.name}}/{{track.album.title}}</p>
        </div>
    </div>
    <div style="display:block">
    <audio controls :src="track.preview"></audio>
    <br>
    <button @click="addFav" v-bind:class="isFav"><i :class="iconButton"></i>{{textButton}}</button>
    </div>
  </article>
</template>

<script>
export default {
    name: 'MusicCard',
    props: ['track'],
    data() {
        return{
            Fav: true,
            allFav: []
        }
    },
    created(){
        if(localStorage.getItem(`track${this.track.id}`)){
            this.Fav = false
        }
        else{
            this.Fav = true
        }
    },
    methods:{ 
        addFav(){
            //console.log(this.track)
                if(localStorage.getItem(`track${this.track.id}`) == null){
                    localStorage.setItem(`track${this.track.id}`, JSON.stringify(this.track));
                    this.Fav = false
                }
                else{
                    localStorage.removeItem(`track${this.track.id}`);
                    this.Fav = true
                }
        },
    },
    computed:{
        isFav: function(){
            if(this.Fav == true){
                return "btnFav"
            }
            else{
                return "btnUnFav"
            }
        },
        iconButton: function(){
            if(this.Fav == true){
                return "fa fa-heart"
            }
            else{
                return "fa fa-trash"
            }
        },
        textButton: function(){
             if(this.Fav == true){
                return "Ajouter aux favoris"
            }
            else{
                return "Retirer des favoris"
            }
        }
    }
}
</script>

