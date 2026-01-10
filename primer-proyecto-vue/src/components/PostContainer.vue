<script setup>
    import PostCard from './PostCard.vue';
</script>

<template>
    <h1>Listado de Posts</h1>
    <div class="post_container">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
    </div>
</template>

<style scoped>
    .post_container{
        width: 100%;
        display:flex;
        flex-wrap: wrap;
    }
</style>