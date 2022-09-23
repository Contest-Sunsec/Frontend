<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="login_logo">
        <img src="~/static/images/logo.png">
        <p>Farmsert</p>
      </div>

      <div class="login_title">
        <h1>당신을 위한</h1>
        <h1>농업 컨설팅 시스템</h1>
        <p>Farmsert에 오신걸 환영합니다!</p>
      </div>

      <div class="login_wrapper_input">
        <div class="login_input">
          <p>이메일 주소</p>
          <input type="text" placeholder="이메일 주소를 입력해주세요">
        </div>

        <div class="login_input">
          <p>비밀번호 입력</p>
          <input type="password" placeholder="비밀번호를 입력해주세요">
        </div>
      </div>

      <div class="login_password">
        <div class="login_password_remember">
          <input id="login_checkbox" type="checkbox">
          <label for="login_checkbox">
            <img src="~/static/images/checkbox.svg">
          </label>
          <p>비밀번호 기억하기</p>
        </div>

        <p>비밀번호 찾기</p>
      </div>

      <button class="login_button">Farmsert에 로그인</button>

      <div class="login_account">
        <p>계정이 없으신가요?</p>
        <p class="login_register" @click="register">회원가입하기</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  layout: 'login',
  methods: {
    register() {
      this.$router.push('/register')
    }
  }
})
</script>

<style lang='scss'>
@import '~/static/scss/login.scss';
</style>
