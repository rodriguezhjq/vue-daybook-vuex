<template>
  
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name:'entry',params:{id:10}})" >

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">12</span>
            <span class="mx-1 fs-5">Octubre</span>
            <span class="ms-2 fw-light">2022, Miércoles</span>

        </div>

        <div class="entry-description">
            Labore consectetur eiusmod id ea non sit ipsum pariatur. Ullamco nisi dolore laboris aliqua Lorem consequat cupidatat. Exercitation veniam amet ipsum et laboris duis amet cupidatat tempor sit ea est. Pariatur excepteur sint quis in do incididunt voluptate deserunt.
        </div>

    </div>

</template>

<script>


export default {

}
</script>

<style lang="scss" scoped>

.entry-container{

    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    

    &:hover{
        background-color: lighten($color: #1d6042, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }

}



</style>