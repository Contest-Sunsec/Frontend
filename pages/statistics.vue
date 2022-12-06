<template>
  <div class="stat">
    <div class="stat_title">
      <h1>통계</h1>
      <div>
        <button @click="gotoAlert">알림</button>
        <button>통계</button>
      </div>
    </div>
    <div class="stat_btns">
      <button @click="changeService('대기 습도')">대기 습도</button>
      <button @click="changeService('대기 온도')">대기 온도</button>
      <button @click="changeService('토양 EC')">토양 EC</button>
      <button @click="changeService('토양 습도')">토양 습도</button>
      <button @click="changeService('토양 온도')">토양 온도</button>
      <button @click="changeService('일사량')">일사량</button>
    </div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';
import { getInfor } from '~/api';

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Statistics',
  layout: 'alert',
  data() {
    return {
      selected: '대기 습도',
      ctx: null as any,
      keys: {} as any,
      data: [] as any[]
    };
  },
  async mounted() {
    this.keys = {
      '대기 습도': 'airHum',
      '대기 온도': 'airTemp',
      '토양 EC': 'soilEc',
      '토양 습도': 'soilHum',
      '토양 온도': 'soilTemp',
      '일사량': 'solar'
    };

    this.data = await getInfor(this.$cookies.get('token'));
    this.ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
    this.ctx.width = window.innerWidth;
    this.reloadChart();
  },
  methods: {
    changeService(service: string) {
      this.selected = service;
      this.reloadChart();
    },
    reloadChart() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: this.data.map((i: any) => (i.createdAt).replace('T', ' ').replace(/\..*/, '')),
          datasets: [{
            label: `${this.selected}`,
            data: this.data.map((i: any) => i[this.keys[this.selected]]),
            backgroundColor: [
              'rgba(124, 208, 183, 0.2)'
            ],
            borderColor: [
              'rgba(124, 208, 183, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    },
    gotoAlert() {
      this.$router.push('/alert');
    }
  }
});
</script>

<style lang="scss">
@import "@/static/scss/statistics.scss";
</style>
