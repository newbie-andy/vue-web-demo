<template>
    <a-layout-header class="header">
      <!-- 用户头像的布局 -->
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="actionCollapsed"/>
      <div class="header-items">
        <!-- 消息信息的布局 -->
        <div class="item">
          <a-badge count="10">
            <a-icon type="notification" class="alert-icon"/>
          </a-badge>
        </div>
        <!-- end -->

        <!-- 警报信息提示的布局 -->
        <div class="item">
          <a-badge count="3">
            <a-icon type="alert" class="alert-icon warning"/>
          </a-badge>
        </div>
        <!-- end -->

        <!-- 管理员信息布局 -->
        <a-dropdown :placement="placement">
          <div class="item">
            <a-avatar size="large" src="https://lh3.googleusercontent.com/-k9IEUPTUEig/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcgaGaQxc8Wxy24iSGOnqs92Lg-wg/s64-c-mo/photo.jpg" icon="user" class="admin-icon"/>
          </div>
          <div slot="overlay">
            <a-card hoverable>
              <template class="ant-card-actions" slot="actions">
                <span>
                  编辑信息
                  <a-icon type="edit" />
                </span>
                <span>
                  退出系统
                  <a-icon type="poweroff" />
                </span>
              </template>
              <a-card-meta
                title="Be Yourself"
                description="This is the administrator">
                <a-avatar slot="avatar" src="https://lh3.googleusercontent.com/-k9IEUPTUEig/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcgaGaQxc8Wxy24iSGOnqs92Lg-wg/s64-c-mo/photo.jpg" />
              </a-card-meta>
            </a-card>
          </div>
        </a-dropdown>
        <!-- end -->
      </div>
    </a-layout-header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HeaderNav',
  data () {
    return {
      placement: 'bottomRight'
    }
  },
  computed: mapState({
    collapsed: state => state.adminLayout.collapsed
  }),
  methods: {
    ...mapActions([
      'actionCollapsed'
    ])
  }
}
</script>
