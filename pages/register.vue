<template>
  <div class="register">
    <div class="register_wrapper">
      <div class="register_logo">
        <img src="~/static/images/logo.png" />
        <p>Farmsert</p>
      </div>

      <div class="register_title">
        <h1>{{ registerText.title }}</h1>
        <p>{{ registerText.message }}</p>
      </div>

      <div v-if="!isRegister" class="register_input_box" >
        <div class="register_input">
          <p>이름</p>
          <input
            v-model="username"
            type="text"
            placeholder="사용하실 이름를 입력해주세요."
          />
        </div>

        <div class="register_input">
          <p>이메일 주소</p>
          <input
            v-model="email"
            type="text"
            placeholder="이메일 주소를 입력해주세요."
          />
        </div>

        <div class="register_input">
          <p>비밀번호</p>
          <input
            v-model="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          /><br />
          <input
            v-model="passwordCheck"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
      </div>

      <button v-if="!isRegister" class="register_button" @click="register">회원가입</button>
      <button v-else class="register_button" @click="login">로그인</button>
      <div v-if="error" class="register_error">
        <img src="~/static/images/error.svg" />
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { postRegister } from '~/api';

export default Vue.extend({
  name: 'Register',
  layout: 'login',
  data() {
    return {
      username: '',
      password: '',
      passwordCheck: '',
      email: '',
      error: false,
      errorMessage: '',
      isRegister: false,
      registerText: {
        title: '회원가입',
        message: 'Farmsert에 오신 것을 환영합니다!',
      },
    };
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    async register() {
      if (this.password !== this.passwordCheck) {
        this.error = true;
        this.errorMessage = '비밀번호가 일치하지 않습니다.';
        return;
      }

      const req = {
        name: this.username,
        email: this.email,
        password: this.password,
      };

      const res = await postRegister(req);

      if (res.status === 200) {
        this.isRegister = true;
        this.error = false;
        this.registerText.title = '회원가입이 완료됐어요!';
        this.registerText.message = '이제 Farmsert를 시작해보세요!';
      } else {
        this.error = true;
        this.errorMessage = res.data.message;
      }
    },
  },
});
</script>

<style lang="scss">
@import '~/static/scss/register.scss';
</style>
