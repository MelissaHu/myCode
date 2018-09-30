<template>
    <div class="login-page">
     <h3>登 录</h3>
     <el-form :model="loginForm"  :rules="loginRules" ref="loginForm" label-width="80px" class="demo-ruleForm"> 
         <el-form-item  prop="username">
           <span class="input-icon"><i class="el-icon-edit"></i></span>
           <el-input type="username" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
         </el-form-item>
         <el-form-item  prop="password">
           <span class="input-icon"><i class="el-icon-share"></i></span>
           <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
         </el-form-item>
         <el-form-item>
             <el-button type="primary" @click="submitForm('loginForm')" style="width:100%;">登录</el-button>
         </el-form-item>
     </el-form>
    </div>
</template>

<script>
//import { setCookie, getCookie } from "../assets/js/cookie.js";
export default {
  name: "loginPages",
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var checkPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, validator: checkName, trigger: "blur" }],
        password: [{ required: true, validator: checkPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log("submit");

        if (valid) {
        } else {
          console.log("error submit");
          return false;
        }
      });
    }
  }
};
</script>


<style lang="scss">
.login-page {
  width: 520px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h3 {
    text-align: center;
    color: #fff;
    font-size: 24px;
    word-spacing: 2px;
    margin-bottom: 40px;
    padding-left: 40px;
  }
}

.el-input__inner {
  background: none !important;
  padding-left: 40px;
}
.input-icon {
  display: block;
  position: absolute;
  left: 10px;
  top: 0px;
  z-index: 99;
  i {
    font-size: 20px;
    color: #889aa4;
  }
}
</style>


