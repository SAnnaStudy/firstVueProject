<template>
    <div class="navbar">
        <router-link style="text-decoration: none; font-size: 28px; color: white" to="/">My list</router-link>
        <my-button @click="$router.push('/posts')" style="background: rgba(2, 69, 6, 0); border: none; width: 100px; text-decoration: none; font-size: 16px; color: white; cursor: pointer">Posts</my-button>
    </div>
</template>
<script>
export default {
}
</script>
<style>
.navbar{
    height: 50px;
    background: rgb(2, 69, 7);
    box-shadow: 2px 2px 4px gray;
    display: flex;
    width: 1000px;
    align-items: center;
}
</style>