<template>
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo"></div>
      <a-menu
        :defaultSelectedKeys="['1']"
        :defaultOpenKeys="['sub1']"
        mode="inline"
        theme="dark"
        :inlineCollapsed="collapsed"
      >
        <a-menu-item key="1">
          <a-icon type="dashboard" />
          <span>首页</span>
        </a-menu-item>
        <a-sub-menu key="users">
          <span slot="title"><a-icon type="team" /><span>用户管理</span></span>
          <a-menu-item key="2">设备用户</a-menu-item>
          <a-menu-item key="3">绑定用户</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="4">
          <a-icon type="printer" />
          <span>设备管理</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="environment" />
          <span>实时定位</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="alert" />
          <span>警报管理</span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="setting" />
          <span>系统设置</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SliderNav',
  data () {
    return {}
  },
  computed: mapState({
    collapsed: state => state.adminLayout.collapsed
  })
}
</script>
