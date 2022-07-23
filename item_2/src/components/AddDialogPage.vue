<template>
  <div>
    <el-dialog
      v-model="outerVisible"
      title="商品添加"
      :close-on-click-modal="false"
      @close="closeDialog()"
    >
      <template #default>
        <el-dialog
          v-model="innerVisible"
          width="30%"
          title="Inner Dialog"
          append-to-body
        />
        <div class="tab">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/goods' }"
              >商品管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>添加商品</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="form_data">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
          >
            <el-form-item label="类目选择" prop="region">
              <el-select v-model="ruleForm.region" placeholder="类目选择">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>

            <el-form-item label="商品价格" prop="name">
              <el-input v-model="ruleForm.price" />
            </el-form-item>
            <el-form-item label="商品数量" prop="count">
              <el-input v-model.number="ruleForm.count" />
            </el-form-item>
            <el-form-item label="商品卖点" prop="name">
              <el-input v-model="ruleForm.salePoint" />
            </el-form-item>
            <el-form-item label="商品日期">
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
                    v-model="ruleForm.date1"
                    type="date"
                    label="Pick a date"
                    placeholder="Pick a date"
                    style="width: 100%"
                  />
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="商品图片">
              <el-upload
                ref="upload"
                class="upload-demo"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
              >
                <el-button type="primary">上传照片</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item label="商品描述" prop="desc">
              <el-input
                v-model="ruleForm.desc"
                type="textarea"
                :rows="11"
                resize="none"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)"
                >确定</el-button
              >
              <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
export default {
  setup(props) {
    const outerVisible = ref(true);
    const ruleForm = reactive({
      price: "",
      name: "",
      salePoint: "",
      region: "",
      count: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });
    //js
    const ruleFormRef = ref(null);
    const rules = reactive({
      name: [
        {
          required: true,
          message: "请输入内容",
          trigger: "blur",
        },
        {
          min: 1,
          max: 15,
          message: "Length should be 1 to 15",
          trigger: "blur",
        },
      ],
      count: [{ required: true, validator: checkAge, trigger: "blur" }],
      desc: [
        {
          required: true,
          message: "Please input activity form",
          trigger: "blur",
        },
      ],
    });
    function resetForm(formEl) {
      if (!formEl) return;
      formEl.resetFields();
    }
    function checkAge(rule, value, callback) {
      if (!Number.isInteger(value)) {
        callback(new Error("请输入数字"));
      }
    }
    return {
      rules,
      ruleForm,
      checkAge,
      resetForm,
      ruleFormRef,
      outerVisible,
    };
  },
  data() {
    return {
      dialogTableVisible: true,
    };
  },
  methods: {
    closeDialog() {
      console.log("调用子组件方法");
      this.$emit("showAddDiolog");
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
.tab {
  height: 20px;
  padding-left: 20px;
}
.form_data {
  background-color: #fff;
  padding: 20px 20px 20px 0;
}
</style>
