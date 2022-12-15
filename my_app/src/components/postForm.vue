<template>
      <form @submit.prevent>
        <h3>Создание поста</h3>
        <my-input v-model="post.title" class="input" type="text" placeholder="название"/>
        <my-input v-model="post.body" class="input" type="text" placeholder="описание"/>
        <my-button @click="createPost" style="margin-top: 30px;">Создать</my-button>
    </form>
</template>
<script>
export default {
    data() {
         return{
            post:{
                title: '',
                body: ''
            }
         }
    },
     methods: {
            createPost() {
                this.post.id=Date.now()
                this.$emit('create', this.post)
                this.post={
                    title: '',
                    body: ''
                }
            }
        }
}
</script>
<style>
h3{
    color: darkgreen;
    margin-bottom: 10px;
}
</style>