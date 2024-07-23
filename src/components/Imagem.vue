<template>
    <div class="imagem1">
        <img src="img/cachorros-engracados.jpg" height="17%" width="100%" />
    </div>
    <br>
    <div class="imagem2">
        <img src="img/mulherpeixe.jpg" height="37%" width="64%" />
        <img src="img/9d5a18e7ffc7e7afba8d609d6e21f5c089772175_00.jpg" height="37%" width="35%" />
    </div>
</template>
<script>
export default {
    name: 'Imagem'
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