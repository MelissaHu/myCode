<template>
<el-container>
  <el-header><ml-header></ml-header></el-header>
  <el-container>
    <el-aside width="200px">侧边栏</el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    
</template>
<script>
import Header from './Header.vue'
export default {
  name:'BaiscLayout',
  components:{
    'ml-header':Header
  },
  data() {
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #199ED8;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  width:100%;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>