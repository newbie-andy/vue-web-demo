<template>
  <a-layout class="admin">

    <!-- 左侧菜单的布局 -->
    <slider-nav />
    <!-- end -->

    <a-layout>

      <!-- 头部的布局 -->
      <admin-header/>
      <!-- end -->

      <!-- 主体部分 -->
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
        
      </a-layout-content>
      <!-- end -->

    </a-layout>
  </a-layout>
</template>

<script>
import '@/assets/scss/admin/admin_layout.scss'
import AdminHeader from './../admin/HeaderNav'
import SliderNav from './../admin/SliderNav'

export default {
  name: 'AdminLayout',
  components: {
    AdminHeader,
    SliderNav
  },
  data () {
    return {}
  }
}
</script>
