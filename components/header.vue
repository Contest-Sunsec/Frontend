<template>
  <div class="header">
    <div class="header_logo">
      <img src="~/static/images/logo.png" />
      <p>Farmsert</p>
    </div>

    <div class="header_profile">
      <div class="header_profile_wrapper_notification">
        <i class="header_profile_new"></i>
        <img
          src="~/static/images/notification.svg"
          class="header_profile_notification"
        />
      </div>

      <div class="header_profile_wrapper">
        <div class="header_profile_name">
          <p>{{ userData.name }}</p>
          <p>회원님</p>
        </div>
        <div class="header_profile_image">
          <img src="~/static/images/profile.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  computed: {
    userData() {
      return this.$store.state.userData;
    },
  }
});
</script>

<style lang="scss">
@import '~/static/scss/header.scss';
</style>
