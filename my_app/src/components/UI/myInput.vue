<template>
    <input :value = modelValue @input='updateInput' class="input" type='text'>
</template>
<script>
export default {
   name: 'my-input',
   props: {
    modelValue: String
   },
   methods:{
    updateInput(event){
        this.$emit('update:modelValue', event.target.value)
    }
   }
}
</script>
<style>
.input{
    height: 30px;
    margin-top: 5px;
    width: 292px;
}
</style>