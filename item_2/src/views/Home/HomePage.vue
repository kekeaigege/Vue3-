<template>
  <div class="homeStyle">
    <div class="search">
      <div class="searchLeft">
        <el-input
          class="searchInput"
          v-model="input"
          placeholder="请输入查询的内容"
          @change="sendInputData"
        />
      </div>
      <div class="searchBtnRight">
        <el-button type="primary" @click="searchData(input)">查询</el-button>
        <el-button type="success">
          <router-link to="/addGoods" class="linkStyle">添加</router-link>
        </el-button>
      </div>
    </div>
    <div class="table-bd">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="selection" width="40" />
        <el-table-column prop="id" label="商品ID" width="140" />
        <el-table-column prop="price" label="商品价格" width="140" />
        <el-table-column prop="title" label="商品类目" width="140" />
        <el-table-column prop="image" label="规格图片" />
        <el-table-column prop="sellPoint" label="商品卖点" />
        <el-table-column prop="descs" label="商品描述" />
        <el-table-column prop="name" label="操作" width="180">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page_pg">
      <MyPagination
        @changePage="changePage"
        :tableDataTotalLen="total"
        :tablePageSize="pageSize"
      ></MyPagination>
    </div>
  </div>
</template>
<script>
import MyPagination from "../../components/Pagin/MyPagination.vue";
import { reactive } from "vue";
export default {
  setup() {
    return reactive({
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
    });
  },
  data() {
    return {
      input: "",
      total: "",
      pageSize: "",
      type: 0,
      list: [],
    };
  },
  watch:{
    input(newValue,oldValue){
      if(newValue != oldValue){
        this.getSearchData(newValue);
      }
    }
  },
  //默认type等于0,默认是商品列表数据
  //type等于1时,代表是搜索页面数据
  created() {
    this.initData(1);
  },
  updated() {},
  methods: {
    handleEdit(number, User) {
      console.log(index, row);
    },
    handleDelete(number, User) {
      console.log(index, row);
    },
    changePage(pageIndex) {
      //此时拿到数据渲染页面,重新请求数据
      if (this.type == 0) {
        this.initData(pageIndex);
      } else if (this.type == 1) {
        this.tableData = this.list.slice((pageIndex - 1) * 3, pageIndex * 3);
      }

      //查询的应该是Search数组下面的
    },
    initData(page) {
      // axios.get('/api/api/projectList',{page :  1})
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.error(err);
      // });
      this.$http
        .getGoodList({ page })
        .then((res) => {
          if (res.data.status === 200) {
            console.log(res.data);
            this.tableData = res.data.data;
            //正常是后端进行分页处理
            this.total = res.data.total;
            this.pageSize = res.data.pageSize;
            this.type = 0;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSearchData(value) {
      this.$http
        .getSearchList({
          search: value,
        })
        .then((res) => {
          if (res.data.status === 200) {
            console.log(value);
            console.log(res.data);
            // if ((res.data.result.length = 1)) {
            //   this.tableData = res.data.result.slice(0, 3);
            // } else if ((res.data.result.length = 2)) {
            // } else {
            // }
            this.total = res.data.result.length;
            this.pageSize = 3;
            this.list = res.data.result;
            this.tableData = res.data.result.slice(0, 3);
            this.type = 1;
            console.log(this.tableData);
          } else {
            this.tableData = [];
            this.pageSize = 1;
            this.total = 1;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendInputData(value) {
      //当value有值时
      if (value) {
        this.getSearchData(value);
      } else {
        this.initData(1);
      }
    },
  },
  components: {
    MyPagination,
  },
};
</script>
<style scoped>
.page_pg {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.table-bd {
  margin: 0 20px;
}
.search {
  display: flex;
  height: 40px;
  overflow: hidden;
  margin: 20px 20px;
}
.el-input {
  height: 40px;
}

.search .searchLeft {
  flex: 1;
  margin-right: 20px;
}
.search .searchBtnRight {
  display: flex;
  align-items: center;
  width: 300px;
}
.router-link-active,
.router-link-exact-active,
a:-webkit-any-link {
  text-decoration: none;
  color: white;
}
</style>
