<template>
    <div class="post-card">
        <h2 class="post_card_title">Card</h2>
        <p class ="post_card_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt id quaerat? Optio distinctio ad dignissimos porro quo esse, reiciendis obcaecati odit voluptatibus necessitatibus in non harum quasi quibusdam totam.</p>
        <PostButton></PostButton>
    </div>
</template>

<script setup>
import PostButton from './PostButton.vue';

</script>

<style scoped>
    .post-card{
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
        display:flex;
        flex-direction: column;
        width: 30%;
        align-items: center;
    }
    .post_card_title{
        font-size: 24px;
        margin-bottom: 10px;
        text-align: center;
        width: 100%;
    }
    .post_card_description{
        font-size: 16px;
        margin-bottom: 20px;
        text-align: center;
        width: 100%;
        text-align: justify;
    }
</style>
