<template>
    <div v-if="posts.length > 0">
        <h1></h1>
        <transition-group name="list">
            <post-item v-for="post in posts" :post='post' :key='post.id' @remove="$emit('remove', post)"></post-item>
        </transition-group>
    </div>
    <p v-else class="else_title">Список пуст</p>
</template>
<script>
import postItem from './postItem.vue'
export default {
  components: { postItem },
    props: {
        posts:{
            type: Array
        }
    },
}
</script>
<style>
.else_title{
    text-align: center;
    margin-top: 100px;
    color: gray;
}
.list{
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active, .list-leave-active{
    transition: all 0.5s ease;
}
.list-enter-from, .list-leave-to{
    opacity: 0;
    transform: translateX(130px);
}
.list-move{
    transition: transform 0.5s ease;
}
</style>