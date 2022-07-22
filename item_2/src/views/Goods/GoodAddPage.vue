<template>
  <div class="addGood_sy">
    <el-dialog v-model="dialogTableVisible" title="Shipping address" close-on-click-moda>
      <div class="tab">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/goods' }"
            >商品管理</el-breadcrumb-item
          >
          <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible:true,
    }
  }
}
</script>
<style scoped>
.addGood_sy {
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  width: 78%;
  height: 30px;
  padding-left: 20px;
}
</style>
