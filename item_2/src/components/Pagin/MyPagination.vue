<template>
  <div class="pagination_pg">
    <el-pagination
      v-model:currentPage="currentPage1"
      :page-size="tablePageSize"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, prev, pager, next"
      :total="tableDataTotalLen"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  props: ["tableDataTotalLen", "tablePageSize"],
  data() {
    return {
      currentPage1: 1,
    };
  },
  methods: {
    // changePage(page) {
    //   //数据量大进行分页处理
    //   //获取的数据,长度等于total总长度 显示页面pageSize = 3
    //   //需要对数组进行切割this.tableData = res.data.result.slice(0,3)
    // },
    handleSizeChange(number) {},
    handleCurrentChange(page) {
      this.currentPage1 = page;
      this.$emit("changePage", page);
    },
  },
};
</script>
<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
.pagination_pg {
  margin-top: 20px;
}
</style>
