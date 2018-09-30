<template>
<div class="header">
  <h3>昆明市交警支队勤务指挥平台</h3>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
     <el-menu-item index="1">首页</el-menu-item>
     <el-menu-item index="2">监控管理</el-menu-item>
     <el-menu-item index="3">视频巡查</el-menu-item>
     <el-menu-item index="4">交通指挥</el-menu-item>
     <el-menu-item index="5">预案管理</el-menu-item>
     <el-menu-item index="6">设备管理</el-menu-item>
     <el-menu-item index="7">勤务管理</el-menu-item>
  </el-menu>
</div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.header{
  padding:0 20px 0px 10px;
  display: flex;
  justify-content: space-between;

}
.el-menu{
  background: #199ED8 !important;
 
}
.el-menu--horizontal>.el-menu-item{
 color:#fff!important;
}
</style>
