<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="login_logo">
        <img src="~/static/images/logo.png" />
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
          <input
            v-model="email"
            type="text"
            placeholder="이메일 주소를 입력해주세요"
          />
        </div>

        <div class="login_input">
          <p>비밀번호 입력</p>
          <input
            v-model="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
      </div>

      <div class="login_password">
        <div class="login_password_remember">
          <input id="login_checkbox" type="checkbox" />
          <label for="login_checkbox">
            <img src="~/static/images/checkbox.svg" />
          </label>
          <p>비밀번호 기억하기</p>
        </div>

        <p @click="forgot">비밀번호 찾기</p>
      </div>

      <button class="login_button" @click="login">Farmsert에 로그인</button>

      
      <div v-if="error" class="login_error">
        <img src="~/static/images/error.svg" alt="">
        <p>{{ errorMessage }}</p>
      </div>
      <div v-else class="login_account">
        <p>계정이 없으신가요?</p>
        <p class="login_register" @click="register">회원가입하기</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import "cookie-universal-nuxt";
import { postLogin } from '~/api';

export default Vue.extend({
  name: 'Login',
  layout: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: false,
      errorMessage: '',
    };
  },
  methods: {
    register() {
      this.$router.push('/register');
    },

    forgot() {
      this.$router.push('/forgot-password');
    },

    async login() {
      const res = await postLogin({
        email: this.email,
        password: this.password,
      });

      if (res.status === 200) {
        this.$cookies.set('token', res.data.responseData.token);
        this.$router.push('/');
      } else {
        this.error = true;
        this.errorMessage = res.data.message;
      }
    },
  },
});
</script>

<style lang="scss">
@import '~/static/scss/login.scss';
</style>
