<template>
  <div class="index">
    <div class="index_title">
      <h1>{{ userData.name }}님, 환영합니다.</h1>
      <div class="index_info">
        <button class="index_info_item index_btn">
          <img src="~/static/images/power.svg" />
          <p>{{ !hardwareData?.status?'ON':'OFF' }}</p>
        </button>

        <div class="index_info_item index_info_item_model">
          <p>Farmsert-{{ userData.hardwareId }}</p>
        </div>
      </div>
    </div>

    <div class="index_hardware">
      <div class="index_hardware_top">
        <div class="index_box index_hardware_temp">
          <p>{{ hardwareData?.position }}</p>
          <h1>{{ Math.round(hardwareData?.weather?.temp) }}°C</h1>
          <p>(최저기온 {{ Math.round(hardwareData?.weather?.min) }}°C)</p>
        </div>

        <div class="index_box index_hardware_humidity">
          <div class="index_hardware_humidity_default">
            <div>
              <p>습도</p>
              <h1>{{ hardwareData?.weather?.humidity }}%</h1>
              <p>{{ hardwareData?.weather?.humidity_message}}</p>
            </div>

            <div>
              <p>체감온도</p>
              <h1>{{ Math.round(hardwareData?.weather?.feel) }}°C</h1>
              <p>기존 온도 {{ Math.round(hardwareData?.weather?.temp) }}°C</p>
              <p>체감시 더 {{ Math.round(hardwareData?.weather?.feel) > Math.round(hardwareData?.weather?.temp) ? '높음' : '낮음'}}</p>
            </div>
          </div>
          <div id="map"></div>
        </div>

        <div class="index_box index_hardware_info">
          <img
            src="~/static/images/hardware.svg"
            class="index_hardware_image"
          />
          <div class="index_hardware_info_box">
            <div class="index_hardware_info_title">
              <p>Farmsert-{{ userData.hardwareId }}</p>
              <p>정상 연결됨</p>
            </div>
            <div class="index_hardware_info_description">
              <div class="index_hardware_info_item">
                <div class="index_hardware_info_item_img">
                  <img src="~/static/images/power.svg" />
                </div>
                <p>기기 전원 켜짐</p>
              </div>

              <div class="index_hardware_info_item">
                <div class="index_hardware_info_item_img">
                  <img src="~/static/images/bettery.svg" />
                </div>
                <p>정상 작동 중</p>
              </div>

              <div class="index_hardware_info_item">
                <div class="index_hardware_info_item_img">
                  <img src="~/static/images/sensor.svg" />
                </div>
                <p>센서 정상 작동</p>
              </div>

              <div class="index_hardware_info_item">
                <div class="index_hardware_info_item_img">
                  <img src="~/static/images/safety.svg" />
                </div>
                <p>매우 안전함</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index_hardware_bottom">
        <div class="index_box index_hardware_sensors">
          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/water.svg" />
              <p>산성도 센서</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 {{ !hardwareData?.status?'작동중':'문제 발생' }}</p>
            <div class="index_hardware_sensor_description">
              <p>센서가 안전함</p>
            </div>
          </div>

          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/sun.svg" />
              <p>조도 센서</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 {{ !hardwareData?.status?'작동중':'문제 발생' }}</p>
            <div class="index_hardware_sensor_description">
              <p>센서가 안전함</p>
            </div>
          </div>

          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/sun.svg" />
              <p>온습도 센서</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 {{ !hardwareData?.status?'작동중':'문제 발생' }}</p>
            <div class="index_hardware_sensor_description">
              <p>센서가 안전함</p>
            </div>
          </div>

          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/water.svg" />
              <p>토양 습도 센서</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 {{ !hardwareData?.status?'작동중':'문제 발생' }}</p>
            <div class="index_hardware_sensor_description">
              <p>센서가 안전함</p>
            </div>
          </div>
        </div>

        <div class="index_box index_hardware_speed">
          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/wifi.svg" />
              <p>전송 속도</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 {{ !hardwareData?.status?'작동중':'문제 발생' }}</p>
            <div class="index_hardware_sensor_description index_hardware_speed_p">
              <p>속도 / </p>
              <p>{{ hardwareData?.speed }} Mbps</p>
            </div>
          </div>

          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/wifi.svg" />
              <p>응답 속도</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 {{ !hardwareData?.status?'작동중':'문제 발생' }}</p>
            <div class="index_hardware_sensor_description index_hardware_speed_p">
              <p>속도 / </p>
              <p>{{ hardwareData?.ping }} ms</p>
            </div>
          </div>

          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/bettery2.svg" />
              <p>배터리 상태</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 {{ !hardwareData?.status?'작동중':'문제 발생' }}</p>
            <div class="index_hardware_sensor_description index_hardware_speed_rev">
              <p>{{ hardwareData?.bettery }} V</p>
              <p>사용중</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="index_title">
      <h1>센서 현황</h1>
    </div>

    <div class="index_sensor_wrapper">

      <div class="index_sensor">
        <div class="index_sensor_title">
          <h1>토양 EC</h1>
          <h1>{{ !hardwareData?.status ? '측정 중' : '문제 발생' }}</h1>
        </div>

        <h1>{{ hardwareData?.soilEc }}dS/m</h1>
        <div class="index_sensor_sub">
          <p>제배에 적합함</p>
          <p>{{ Math.round((now - Date.parse(hardwareData?.updatedAt)) / 1000 / 60) }}분 전</p>
        </div>
      </div>

      <div class="index_sensor">
        <div class="index_sensor_title">
          <h1>토양 온도</h1>
          <h1>{{ !hardwareData?.status ? '측정 중' : '문제 발생' }}</h1>
        </div>

        <h1>{{ hardwareData?.soilTemp }}°C</h1>
        <div class="index_sensor_sub">
          <p>제배에 적합함</p>
          <p>{{ Math.round((now - Date.parse(hardwareData?.updatedAt)) / 1000 / 60) }}분 전</p>
        </div>
      </div>

      <div class="index_sensor">
        <div class="index_sensor_title">
          <h1>토양 습도</h1>
          <h1>{{ !hardwareData?.status ? '측정 중' : '문제 발생' }}</h1>
        </div>

        <h1>{{ hardwareData?.soilHum }}%</h1>
        <div class="index_sensor_sub">
          <p>제배에 적합함</p>
          <p>{{ Math.round((now - Date.parse(hardwareData?.updatedAt)) / 1000 / 60) }}분 전</p>
        </div>
      </div>

      <div class="index_sensor">
        <div class="index_sensor_title">
          <h1>대기 온도</h1>
          <h1>{{ !hardwareData?.status ? '측정 중' : '문제 발생' }}</h1>
        </div>

        <h1>{{ hardwareData?.airTemp }}°C</h1>
        <div class="index_sensor_sub">
          <p>제배에 적합함</p>
          <p>{{ Math.round((now - Date.parse(hardwareData?.updatedAt)) / 1000 / 60) }}분 전</p>
        </div>
      </div>

      <div class="index_sensor">
        <div class="index_sensor_title">
          <h1>대기 습도</h1>
          <h1>{{ !hardwareData?.status ? '측정 중' : '문제 발생' }}</h1>
        </div>

        <h1>{{ hardwareData?.airHum }}%</h1>
        <div class="index_sensor_sub">
          <p>제배에 적합함</p>
          <p>{{ Math.round((now - Date.parse(hardwareData?.updatedAt)) / 1000 / 60) }}분 전</p>
        </div>
      </div>

      <div class="index_sensor">
        <div class="index_sensor_title">
          <h1>일사량</h1>
          <h1>{{ !hardwareData?.status ? '측정 중' : '문제 발생' }}</h1>
        </div>

        <h1>{{ hardwareData?.solar }}w/㎡</h1>
        <div class="index_sensor_sub">
          <p>제배에 적합함</p>
          <p>{{ Math.round((now - Date.parse(hardwareData?.updatedAt)) / 1000 / 60) }}분 전</p>
        </div>
      </div>
    </div>


    <div class="index_title index_feedback_title">
      <h1>작물 점수 보고</h1>
      <h1 v-if="hardwareData?.message?.data">피드백</h1>
    </div>

    <div class="index_crops_wrapper">
      <div class="index_crops">
        <div class="index_crops_title">
          <img src="~/static/images/leaf.svg">
          <h1>토마토</h1>
        </div>
        <div class="index_crops_temp">
          <div class="index_crops_temp_in">
            <h1>{{ hardwareData?.message?.score }}점</h1>
            <p>{{ hardwareData?.message?.scoreMessage }}</p>
          </div>
        </div>
      </div>

      <div class="index_feedback_wrapper">

        <div v-for="(i, k) in hardwareData?.message?.data" :key="k" class="index_feedback">
          <div class="index_feedback_block">
            <div class="index_feedback_left">
              <div class="index_feedback_left_title">
                <h1>{{ i.title[0] }}</h1>
                <h2 :class="[i.standard ? 'index_feedback_red' : 'index_feedback_blue']">{{ i.title[1] }}</h2>
              </div>
              <div class="index_feedback_left_desc">
                <p>{{ i.message }}</p>
              </div>
            </div>

            <div class="index_feedback_right">
              <div class="index_feedback_right_item">
                <p>현재</p>
                <h1 :class="[i.standard ? 'index_feedback_red' : 'index_feedback_blue']">{{ hardwareData[i.type] + hardwareData?.message?.messageUnit[i.type] }}</h1>
              </div>

              <div class="index_feedback_right_item">
                <p>기준</p>
                <h1 class="index_feedback_green">{{ hardwareData?.message?.defaultData[i.type] + hardwareData?.message?.messageUnit[i.type] }}</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

declare global {
  interface Window {
    kakao: any
  }
}

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      map: null,
      hardware: {},
      now: new Date(),
    };
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    hardwareData() {
      return this.$store.state.hardwareData;
    }
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.KAKAO_API_KEY}`;
      script.addEventListener('load', () => {
        window.kakao.maps.load(() => {
          this.initMap();
        });
      });
      document.head.appendChild(script);
      // 카카오 맵 sdk 를 불러옴
    } else {
      this.initMap();
    }
    // 카카오 맵을 불러옴
  },
  methods: {
    initMap() {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      };
      this.map = new window.kakao.maps.Map(container, options);
    },
  },
});
</script>

<style lang="scss">
@import '~/static/scss/index.scss';
</style>
