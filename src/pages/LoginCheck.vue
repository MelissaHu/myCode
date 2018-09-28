<template>
    <div class="login-wrapper">
        <form class="login-inner">
             <div class="form-control">
                 <input type="text" placeholder="用户名" class="useName" v-model="username">
             </div>
             <div class="form-control">
                 <input type="text" placeholder="密码" class="passWord" v-model="password">
             </div>
              <button class="login-bt" @click="login">登录</button>
              <span @click="toRegister">没有账号？马上注册</span>
        </form>
    </div>
</template>

<script>
export default {
  name: "loginCheck",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {}
  }
};
</script>




<style lang="scss" scoped>
.login-wrapper {
  width: 30%;
  height: 30%;
  padding: 1%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  .login-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-control {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin: 2% auto;
      input {
        width: 100%;
        padding: 6px 12px;
        height: 40px;
        font-size: 16px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.65);
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
      }
    }
    .login-bt {
      width: 100%;
      padding: 6px 2px;
      height: 40px;
      font-size: 16px;
      line-height: 1.5;
      cursor: pointer;
      color: #fff;
      background-color: #2d8cf0;
      border: 1px solid #2d8cf0;
    }
  }
}
</style>
