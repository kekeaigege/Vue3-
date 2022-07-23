<template>
  <div class="layout">
    <A @changeDioFn ="changeDioFn"></A>
    <div class="pink" v-show="isshow"></div>
    <!-- <button @click="changeFn" >改变值</button> -->
  </div>
</template>

<script>
import A from "../components/A.vue";
export default {
  name: "HomeView",
  components: {
    A,
  },
  data() {
    return {
      isshow:true
    };
  },
  methods: {
    changeDioFn(){
      console.log("1111")
      this.isshow = !this.isshow;
    },
    changeFn(){
      this.isshow = !this.isshow;
    },
    getGoodListResponse() {
      this.$http
        .getGoodList({
          page: 1,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
<style scoped>
.pink{
  background-color: rgb(255, 185, 185);
  width: 100px;height: 100px;
}
.blue{
  background-color: skyblue;
   width: 100px;height: 100px;
}
</style>
