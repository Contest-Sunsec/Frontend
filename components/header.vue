<template>
  <div class="header">
    <div @click="toIndex" class="header_logo">
      <img src="~/static/images/logo.png" />
      <p>Farmsert</p>
    </div>

    <div class="header_profile">
      <div class="header_profile_wrapper_notification">
        <i v-if="(alert.length > 0)" class="header_profile_new"></i>
        <img 
          src="~/static/images/notification.svg"
          class="header_profile_notification"
          @click="gotoAlert"
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
import { getAlert } from '~/api';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      alert: [],
    };
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
  },
  async mounted() {
    this.alert = await getAlert(this.$cookies.get('token'));
  },
  methods: {
    gotoAlert() {
      this.$router.push('/alert');
    },
    toIndex() {
      this.$router.push('/');
    },
  }
});
</script>

<style lang="scss">
@import '~/static/scss/header.scss';
</style>
