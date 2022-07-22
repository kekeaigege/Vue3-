<!--
 * @Author: wangxue 3208230974@qq.com
 * @Date: 2022-07-20 14:46:50
 * @LastEditors: wangxue 3208230974@qq.com
 * @LastEditTime: 2022-07-21 21:16:05
 * @FilePath: \item_2\src\views\Layout\ContentPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content_st">
    <div class="head">
      <span
        v-show="isCollapse"
        class="iconfont icon-cebianshouqi"
        @click="changeMenu"
      ></span>
      <span
        v-show="!isCollapse"
        class="iconfont icon-cebianshouqi1"
        @click="changeMenu"
      ></span>
    </div>

    <div class="contentView">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  methods: {
    changeMenu() {
      this.$emit("changeCollapse");
    },
    sendInputData(value) {
      console.log(value);
      //获取input输入框内容
      //调取搜索接口数据
      //进行渲染页面
      //搜索时默认回车显示数据为初始数据
    },
  },
};
</script>
<style scoped>
.content_st {
  height: 860px;
  background-color: #f4f4f4;
}
.head {
  height: 50px;
  background-color: #1574c2;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.icon-cebianshouqi1,
.icon-cebianshouqi {
  font-size: 20px;
}

.content_st .contentView {
  margin: 0 20px;
}

</style>
