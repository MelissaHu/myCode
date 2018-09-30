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

 <!--
      <div class="login-wrap" v-show="showLogin">
        <h3>登陆</h3>
        <p v-show="showWarning">{{warning}}</p>
        <input type="text" placeholder="请输入用户名" v-model="username"/>
        <input type="password" placeholder="请输入密码" v-model="password"/>
        <button v-on:click="login">登入</button>
       <span v-on:click="ToRegister">没有账号?马上注册</span>
      </div>--> 
    </div>
</template>

<script>
import { setCookie, getCookie } from "../assets/js/cookie.js";
export default {
  name: "loginCheck",
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
  // mounted() {
  //   if (getCookie("username")) {
  //     this.$router.push("/home");
  //   }
  // },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
           console.log("submit");
        } else {
          console.log("error submit");
          return false;
        }
      });
    }

    /*
    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入密码");
      } else {
        //URLSearchParams对象为了让参数以form data 形式
        let data = { username: this.username, password: this.password };
        this.$http.post("/login", data).then(res => {
          // console.log(res);
          if (res.data == -1) {
            this.warning = "该用户不存在";
            this.showWarn = true;
          } else if (res.data == 0) {
            this.warning = "密码输入错误";
            this.showWarn = true;
          } else if (res.data == "admin") {
            this.$router.push("/main");
          } else {
            this.warning = "登录成功";
            this.showWarn = true;
            // setCookie("username", this.username, 1000 * 60);

            // setTimeout(
            //   function() {
            //     this.$router.push("/home");
            //   }.bind(this),
            //   1000
            // );
          }
        });
      }
    }
    */
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


