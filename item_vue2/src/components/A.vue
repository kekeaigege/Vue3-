<template>
    <div>
       <button @click="changeDio">子组件调用父组件</button>
    </div>
</template>
<script>
export default {
    methods:{
        changeDio(){
            this.$emit('changeDioFn')
        }
    }
}
</script>