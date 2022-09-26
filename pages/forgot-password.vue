<template>
  <div class="forgot">
    <div class="forgot_wrapper">
      <div class="forgot_logo">
        <img src="~/static/images/logo.png" />
        <p>Farmsert</p>
      </div>
      
      <h1 class="forgot_title">{{ titleContent.title[0] }}</h1>
      <h1 v-if="isSended" class="forgot_title">{{ titleContent.title[1] }}</h1>
      <p class="forgot_subtitle">{{ titleContent.message[0] }}</p>
      <p v-if="!isSended" class="forgot_subtitle">{{ titleContent.message[1] }}</p>

      <div v-if="!isSended" class="forgot_input">
        <p>이메일 주소</p>
        <input
            v-model="email"
            type="text"
            placeholder="이메일 주소를 입력해주세요"
          />
      </div>
      <button v-if="!isSended" class="forgot_button" @click="forgotPassword">다음</button>

      <div v-if="error" class="forgot_error">
        <img src="~/static/images/error.svg" alt="">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { forgotPassword } from '~/api';

export default Vue.extend({
  name: 'ForgotPassword',
  layout: 'login',
  data() {
    return {
      email: '',
      error: false,
      errorMessage: '',
      isSended: false,
      titleContent: {
        title: ['비밀번호 찾기'],
        message: ['비밀번호를 잃어버리신 계정의','이메일 주소를 알려주세요'],
      }
    };
  },
  methods: {
    async forgotPassword() {
      const res = await forgotPassword({email: this.email});
      if (res.status === 200) {
        this.isSended = true;
        this.titleContent.title[0] = '해당 이메일에 재설정';
        this.titleContent.title[1] = '링크를 발송했어요';
        this.titleContent.message[0] = '메일함에서 비밀번호를 재설정 해주세요';
      } else {
        this.error = true;
        this.errorMessage = res.data.message;
      }
    },
  },
});
</script>

<style lang="scss">
@import "~/static/scss/forgotPassword.scss";
</style>