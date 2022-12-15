<template>
    <div class="main">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
    export default{
  components: { Navbar },
      
    }
</script>

<style>
*{
    margin: 0 auto;
   
}
.main{
    width: 100%;
}
</style>
