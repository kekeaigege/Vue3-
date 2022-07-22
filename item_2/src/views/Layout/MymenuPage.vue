<template>
  <div class="nav">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="$route.path"
      text-color="#fff"
      router
      :collapse="isCollapse"
    >
      <el-menu-item index="" class="firstTitle">
        <span>商城管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <el-icon><document /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <el-icon><document /></el-icon>
        <span>商品管理</span>
      </el-menu-item>
      <el-menu-item index="/params">
        <el-icon><setting /></el-icon>
        <span>规格参数</span>
      </el-menu-item>
      <el-menu-item index="/advert">
        <el-icon><setting /></el-icon>
        <span>广告分类</span>
      </el-menu-item>
      <el-sub-menu index="/order">
        <template #title>
          <el-icon><location /></el-icon>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/orderlist">item one</el-menu-item>
          <el-menu-item index="/order/order-back">item one</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script>
import { Location, Setting, Menu, Document } from "@element-plus/icons-vue";
export default {
  props: ["isCollapse"],
  data() {
    return {};
  },
  components: {
    Location,
    Setting,
    Menu,
    Document,
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-sub-menu .el-menu-item {
  min-width: 179px;
}
.el-menu-item {
  align-items: center;
  justify-content: left;
}
.firstTitle {
  justify-content: center;
  font-size: 15px;
}
</style>
