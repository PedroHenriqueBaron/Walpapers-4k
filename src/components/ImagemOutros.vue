<template>
    <div class="imagem1">
        <img src="@/assets/cachorros-engracados.jpg" height="17%" width="100%" />
    </div>
    <br>
    <div class="imagem2">
        <img src="@/assets/mulherpeixe.jpg" height="37%" width="64%" />
        <img src="@/assets/9d5a18e7ffc7e7afba8d609d6e21f5c089772175_00.jpg" height="37%" width="35%" />
    </div>
    <img src="@/assets/8k.jpg" />

</template>
<script>
export default {
    name: 'ImagemOutros'
}
</script>


<style>
@media screen and (min-width: 1200px){
    /*Desktop*/
    .imagem2 {
        text-align: left;
         
    }
    
}
@media screen and (min-width: 601px) and (max-width: 1199px){
    /*Tablet*/
    .imagem2 {
        text-align: left;
         
    }
    }
@media screen and (max-width: 600px){
    /*Celular*/
    .imagem2 {
        text-align: center;
        width: 100%;
        
    }

    

}
</style>