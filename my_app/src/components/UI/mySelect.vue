<template>
    <select v-model='modelValue' @change='changeOption'>
        <option disabled value="">Выберите из списка</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
    </select>
</template>
<script>
export default {
   name: 'my-select',
   modelValue:{
        type: String
    },
   props: {
    options: {
        type: Array,
        default: () => []
    }
   },
   methods:{
    changeOption(e){
        this.$emit('update:modelValue', this.modelValue)
        // 1 по действию пишем 'this.$emit('update:modelValue', option)' и обновляем переменную, а в родителе просто соединяем ответ от р с
        // той переменной с помощью 'v-model="selectedSort"'
        // 2 по действию пишем 'this.$emit('showD', false)' и создаем метод, на который подписывается родитель '@showD="dialogInvisible"'
        // и когда что то случилось у ребенка, он запускает свой метод и this.dialogVisible = false
    }
   }
}
</script>
<style>

</style>