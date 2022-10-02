<template>
  <div class="forgot">
    <div class="forgot_wrapper">
      <div class="forgot_logo">
        <img src="~/static/images/logo.png" />
        <p>Farmsert</p>
      </div>

      <h1 class="forgot_title">{{ textContent.title[0] }}</h1>
      <h1 v-if="isReset" class="forgot_title">{{ textContent.title[1] }}</h1>
      <p class="forgot_subtitle">{{ textContent.message[0] }}</p>

      <div v-if="!isReset" class="forgot_input">
        <p>비밀번호</p>
        <input
            v-model="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        <input
            v-model="passwordCheck"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
      </div>
      <button v-if="!isReset" class="forgot_button" @click="resetPassword">다음</button>
      <button v-else class="forgot_button" @click="redirectLogin">로그인</button>

      <div v-if="error" class="forgot_error">
        <img src="~/static/images/error.svg" alt="">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { resetPassword } from '~/api';

export default Vue.extend({
  name: 'ResetPassword',
  layout: 'login',
  data() {
    return {
      password: '',
      passwordCheck: '',
      error: false,
      errorMessage: '',
      isReset: false,
      textContent: {
        title: ['비밀번호 재설정'],
        message: ['재설정하실 비밀번호를 입력해주세요.'],
      }
    };
  },
  methods: {
    async resetPassword() {
      if (this.password !== this.passwordCheck) {
        this.error = true;
        this.errorMessage = '비밀번호가 일치하지 않습니다.';
        return;
      }

      const res = await resetPassword({
        password: this.password,
        token: this.$route.query.token as string,
      });
      if (res.status === 200) {
        this.isReset = true;
        this.error = false;
        this.textContent.title = ['비밀번호 재설정이', '완료되었습니다.'];
        this.textContent.message = ['이제 Farmsert를 시작해보세요!'];
      } else {
        this.error = true;
        this.errorMessage = res.data.message; 
      }
    },
    redirectLogin() {
      this.$router.push('/login');
    }
  },
});
</script>

<style lang="scss">
@import "~/static/scss/forgotPassword.scss";
</style>