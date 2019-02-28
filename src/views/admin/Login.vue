<template>
    <div class="admin-login">
      <a-card>
          <p class="login-header">智能手环管理后台</p>
          <a-avatar :size="90" class="login-logo" :src="logo"/>
          <a-form @submit="handleSubmit" :form="form">
            <a-form-item>
              <a-input placeholder="用户名称" v-model="name" ref="nameInput" type="text">
                <a-icon slot="prefix" type="user" />
                <a-icon v-if="name" slot="suffix" type="close-circle" @click="emitNameEmpty" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input placeholder="登陆密码" v-model="password" ref="pwdInput" type="password">
                <a-icon slot="prefix" type="lock" />
                <a-icon v-if="password" slot="suffix" type="close-circle" @click="emitPwdEmpty" />
              </a-input>
            </a-form-item>
          </a-form>
      </a-card>
    </div>
</template>

<script>
import '@/assets/scss/admin/admin_login.scss'
import logo from '@/assets/logo.png'
export default {
  data () {
    return {
      name: '',
      password: '',
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      logo: logo
    }
  },
  methods: {
    emitNameEmpty () {
      this.$refs.nameInput.focus()
      this.name = ''
    },
    emitPwdEmpty () {
      this.$refs.pwdInput.focus()
      this.password = ''
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>
