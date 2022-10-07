<template>
  <div class="default">
    <Header />

    <div class="default_padding">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '../components/header.vue';
import { getAPI } from '~/api';

export default Vue.extend({
  name: 'Default',
  components: { Header },
  data() {
    return {
      userData: null,
    };
  },
  watch: {
    '$cookies.token' () {
      getAPI.defaults.headers.common.Authorization = this.$cookies.get('token');
    },
  },
  mounted() {
    if (!this.$cookies.get('token')) {
      this.$router.push('/login');
      return;
    }

    getAPI.defaults.headers.common.Authorization = this.$cookies.get('token');
    this.$store.dispatch('getUserData');
    this.$store.dispatch('getHardwareData');
  }
});
</script>

<style lang="scss">
@import '~/static/scss/default.scss';
</style>
