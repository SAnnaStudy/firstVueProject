<template>
    <div>
        <my-input class="my-input" v-model="searchPost" placeholder='search'></my-input>
        <div class="main_header">
            <my-button class="but" @click="showDialog">Создать пост</my-button>
            <my-select :options='sortOptions' v-model="selectedSort"></my-select>
        </div>
        <my-dialog :show="dialogVisible" @showD="dialogInvisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list :posts='searchedPost' @remove="removePost" v-if="!isLoading"/>
        <div class='load' v-else>Loading...</div>
        <div class="observer" ref="observer"></div>
    </div>
</template>

<script>
import PostForm from '@/components/postForm.vue'
import PostList from '@/components/postList.vue'
import MyButton from '@/components/UI/myButton.vue'
import MyDialog from '@/components/UI/myDialog.vue'
import axios from 'axios'
import MySelect from '@/components/UI/mySelect.vue'
import MyInput from '@/components/UI/myInput.vue'

    export default{
        components:{
            PostForm,
            PostList,
                MyDialog,
                MyButton,
                MySelect,
                MyInput
        },
        data(){
            return{
                posts: [],
                dialogVisible: false,
                isLoading: false,
                selectedSort: '',
                sortOptions:[
                    {value: 'title', name: 'Name'},
                    {value: 'body', name: 'Body'}
                ]
                ,
                searchPost:'',
                page: 0,
                limit: 10,              
            }
        },
        methods: {
            createPost(post){
                this.posts.push(post)
                this.dialogVisible = false
            },
            removePost(post){
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showDialog(){
                this.dialogVisible = true;
            },
            dialogInvisible(){
                this.dialogVisible = false;
            },
            async fetchPosts(){
                this.isLoading = true
                this.page += 1;
                try{
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    })
                    this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [ ...this.posts, ...response.data]
                }
                catch(e){
                    console.log(e)
                }
                finally{
                    this.isLoading = false
                }
            },            
            async loadMorePosts(){
                this.page += 1;
                try{
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    })
                    this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [ ...this.posts, ...response.data]
                }
                catch(e){
                    console.log(e)
                }
                finally{
                }
            }
        },
        mounted(){
            this.fetchPosts()
            var options = {
                rootMargin: '0px',
                threshold: 1.0
            }
            var callback = (entries, observer) => {
                if(entries[0].isIntersecting){
                    this.loadMorePosts()
                }
            }
            const observer = new IntersectionObserver(callback, options)
            observer.observe(this.$refs.observer)
        },
        computed: {
            filteredPosts(){
                return [...this.posts].sort((post1, post2) => 
                    post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
                )
            },
            searchedPost(){
                return this.filteredPosts.filter(post => post.title.includes(this.searchPost))
            }
        }
    }
</script>

<style>
h1{
    text-align: center;
}
.but{
    display: block;
}
.load{
    width: 50px;
    margin-top: 50px;
}
.main_header{
    display: flex;
    justify-content: space-between;
    width: 750px;
    margin-top: 10px;
}
.my-input{
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 595px;
}
.pages{
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 630px;
    height: 35px;
}
.page{
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;;
}
.current_page{
    border: 1px solid green;
    color: green
}
</style>
