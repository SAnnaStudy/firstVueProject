<template>
    <div class='dialog' v-if='show' @click="hideDialog">
        <div class="dialog_content" @click.stop>
            <div class="dialog_form">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'my-dialog',
   props: {
    show: {
        type: Boolean,
        default: false
    }
   },
   methods: {
        hideDialog(){
            this.$emit('showD', false)
        }
    }
}
</script>

<style>
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    display: flex;
    background-color: rgba(0, 0, 0, 0.3);
}
.dialog_content{
    margin: auto;
    background-color: white;
    border-radius: 10px;
    height: 250px;
    width: 400px;
    display: flex;
    align-items: center;
}
.dialog_form{
    width: 300px;
    margin: 0 auto;
    height: 170px;
}
</style>