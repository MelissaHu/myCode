<template>
    <div class="container">
        <div class="container-inner">
          <router-view></router-view>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container{
    width:100%;
    height: 100%;
    background: url(../../static/images/bg.jpg) no-repeat;
    background-size: cover;
    .container-inner{
        width:100%;
        height: 100%;
        position: relative;
    }
}


</style>

