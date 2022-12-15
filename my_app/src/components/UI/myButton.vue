<template>
    <button class="butt">
        <slot></slot>
    </button>
</template>
<script>
export default {
   name: 'my-button'
}
</script>
<style>
.butt{
    background: white;
    height: 30px;
    width: 300px;
}
</style>