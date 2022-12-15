<template>
    <div class='post'>
        <div class='post-container'>
            <div class='post-text'>
                {{post.id}}
                <div><strong>Title: </strong> {{post.title}}</div>
                <div><strong>Body: </strong> {{post.body}}</div>
            </div>
            <!--<my-button @click="$router.push(`/posts/${post.id}`)" style="width: 100px">Открыть</my-button>
           <my-button style="width: 100px">
                <router-link to="{name: 'toPostId', params: {id: post.id, thatPost: post}}">Open</router-link>
            </my-button>-->
            <my-button @click="$emit('remove', post)" style="width: 100px">Delete</my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post:{
            type: Object
        }
    },
}
</script>

<style>
.post{
    border: 1px solid green;
    width: 600px;
    margin-top: 10px;
    display: flex;
    align-items: center;
}
.post-container{
    display: flex;
    align-items: center;
    width: 580px;
    margin: 10px;
}
.post-text{
    width: 500px;
    margin-right: 15px;
}
</style>