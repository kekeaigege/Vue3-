<template>
  <div class="layout">
    <MymenuPage class="menu" :isCollapse="isCollapse"></MymenuPage>
    <ContentPage
      class="content"
      :class="{ isActive: isCollapse }"
      :isCollapse="isCollapse"
      @changeCollapse="changeCollapse"
    ></ContentPage>
  </div>
</template>
<script>
import ContentPage from "../Layout/ContentPage.vue";
import MymenuPage from "../Layout/MymenuPage.vue";
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  components: {
    ContentPage,
    MymenuPage,
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
      console.log(this.isCollapse);
    },
  },
};
</script>
<style scoped>
.menu {
  background-color: #545c64;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10;
}
.content {
  margin-top: 0;
  margin-left: 180px;
  transition: all 0.6s;
}
.isActive {
  margin-left: 64px;
  transition: all 0.3s;
}
</style>
