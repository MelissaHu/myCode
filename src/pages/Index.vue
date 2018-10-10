<template>
    <div class="container">
      <el-row :gutter="12">
          <el-col :span="4">
            <el-card shadow="always"><router-link to="./map/index" class="card-link">地图模块</router-link></el-card>
          </el-col>
          <el-col :span="4">
            <el-card shadow="always"><router-link to="./login" class="card-link">登录模块</router-link></el-card>
          </el-col>
      </el-row>
    </div>
</template>


<style>
.container{
  padding:15px;
}
.card-link{
  width:100%;
  height: 100%;
  text-align: center;
  display: inline-block; 
  padding:-20px;
}
</style>
