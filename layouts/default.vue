<template>
  <div class="default">
    <Header />

    <div class="default_padding">
      <nuxt />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Header from '../components/header.vue'

export default Vue.extend({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Default",
    components: { Header }
})
</script>

<style lang='scss'>
@import '~/static/scss/default.scss';
</style>
