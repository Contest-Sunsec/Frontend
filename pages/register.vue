<template>
  <div class="register">
    <div class="register_wrapper">
        <div class="register_logo">
            <img src="~/static/images/logo.png">
            <p>Farmsert</p>
        </div>

        <div class="register_title">
            <h1>회원가입</h1>
            <p>Farmsert에 오신 것을 환영합니다!</p>
        </div>

        <div class="register_input_box">
            <div class="register_input">
                <p>이름</p>
                <input type="text" placeholder="사용하실 이름를 입력해주세요." :value="username">
            </div>

            <div class="register_input">
                <p>이메일 주소</p>
                <input type="text" placeholder="이메일 주소를 입력해주세요." :value="email">
            </div>
            
            <div class="register_input">
                <p>비밀번호</p>
                <input type="password" placeholder="비밀번호를 입력해주세요." :value="password"><br />
                <input type="password" placeholder="비밀번호를 입력해주세요." :value="passwordCheck">
            </div>
        </div>
        
        <button class="register_button" @click="register">회원가입</button>
        <p v-if="error" class="register_error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { postRegister } from '~/api'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  layout: 'login',
  data() {
    return {
        username: '',
        password: '',
        passwordCheck: '',
        email: '',
        error: false,
        errorMessage: ''
    }
  },
  methods: {
    async register() {
      if (this.password !== this.passwordCheck) {
        this.error = true
        this.errorMessage = '비밀번호가 일치하지 않습니다.'
        return
      }

      const req = {
        name: this.username,
        email: this.email,
        password: this.password
      }
      
      const res = await postRegister(req)

      if (res.status === 200) {
        this.$router.push('/login')
      } else {
        this.error = true
        this.errorMessage = res.data.message
      }
    }
  }
})
</script>

<style lang="scss">
@import "~/static/scss/register.scss";
</style>