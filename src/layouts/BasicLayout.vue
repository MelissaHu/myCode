<template>
    <div class="layout">
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                         login
                    </template>
                    <MenuItem name="1-1">login-submit</MenuItem>
                    <MenuItem name="1-2">login-cookies</MenuItem>
                    <MenuItem name="1-3">login-session</MenuItem>
                </Submenu>
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>login</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-search"></Icon>
                        <span>websocket</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-settings"></Icon>
                        <span></span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="layout-header-bar">MyCode-登录</Header>
                <Content :style="{margin: '20px', background: '#f0f2f5', minHeight: '220px',height:'100%',position:'relative'}">
                   <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .ivu-layout{
        height: 100%;
    }
    .layout-header-bar{
        background: #fff;
        text-align: center;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        font-size: 24px;
        letter-spacing:2px;
        color:#2d8cf0;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>