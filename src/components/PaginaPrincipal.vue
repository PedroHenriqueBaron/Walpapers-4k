<template>
    <body>
        <div class="titulo">
            <h1>Walpapers 4k</h1>
            <h2>Pedro Baron</h2>
        </div>
        <ImagemOutros />
        <h2>Imagem Pesadaça</h2>
        <ImagemResolucao />
        <h2>Vídeo divertido</h2>
        <VideoOutros />
    </body>
    <!-- <div class="imagem1">
            <img src="img/cachorros-engracados.jpg" height="17%" width="100%" />
        </div>
        <br>
        <div class="imagem2">
            <img src="img/mulherpeixe.jpg" height="37%" width="64%" />
            <img src="img/9d5a18e7ffc7e7afba8d609d6e21f5c089772175_00.jpg" height="37%" width="35%" />
        </div> -->
    <!-- <div class="video">
            <video width="100%" height="7%" controls>
                <source src="img/CINCO PATINHOS SOUTH AMERICA MEMES.mp4">
            </video>
        </div>
    </body> -->
</template>


<script>
import ImagemOutros from '@/components/ImagemOutros.vue'
import ImagemResolucao from './ImagemResolucao.vue';
import VideoOutros from '@/components/VideoOutros.vue'
export default {
    name: 'PaginaPrincipal',
    components:{
        ImagemOutros,ImagemResolucao, VideoOutros
    }
}
</script>

