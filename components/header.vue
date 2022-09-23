<template>
  <div class="header">
    <div class="header_logo">
      <img src="~/static/images/logo.png">
      <p>Farmsert</p>
    </div>

    <div class="header_menus">
      <p class="header_menus_item header_menus_selected">홈</p>
      <p class="header_menus_item">작물</p>
    </div>

    <div class="header_profile">
      <div class="header_profile_wrapper_notification">
        <i class="header_profile_new"></i>
        <img src="~/static/images/notification.svg" class="header_profile_notification">
      </div>

      <div class="header_profile_wrapper">
        <div class="header_profile_name">
          <p>남영재</p>
          <p>회원님</p>
        </div>
        <div class="header_profile_image">
          <img src="~/static/images/profile.svg">
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
})
</script>

<style lang="scss">
@import "~/static/scss/Header.scss";
</style>
