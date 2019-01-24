<template>
  <a-layout class="admin">
    <slider-nav />
    <a-layout>
      <admin-header/>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import './../../assets/scss/admin/admin_layout.scss'
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
