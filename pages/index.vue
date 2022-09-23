<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="index">
    <div class="index_title">
      <h1>남영재님, 환영합니다.</h1>

      <div class="index_info">
        <button class="index_info_item index_btn">
          <img src="~/static/images/power.svg">
          <p>ON</p>
        </button>

        <div class="index_info_item">
          <img src="~/static/images/bettery.svg">
          <p>42%</p>
        </div>

        <div class="index_info_item index_info_item_model">
          <p>Farmsert-M14598U</p>
        </div>
      </div>
    </div>

    <div class="index_hardware">
      <div class="index_hardware_top">
        <div class="index_box index_hardware_temp">
          <p>서울 용산구</p>
          <h1>27°C</h1>
          <p>(최저기온 24°C)</p>
          <p>습함, 매우 더움</p>
        </div>
        
        <div class="index_box index_hardware_humidity">
          <div class="index_hardware_humidity_default">
            <div>
              <p>습도</p>
              <h1>73%</h1>
              <p>매우 습함</p>
              <p>불쾌한 습도</p>
            </div>

            <div>
              <p>체감온도</p>
              <h1>28°C</h1>
              <p>기존 온도 27°C</p>
              <p>체감시 더 높음</p>
            </div>
          </div>
          <div id="map"></div>
        </div>

        <div class="index_box index_hardware_info">
          <img src="~/static/images/hardware.svg" class="index_hardware_image">
          <div class="index_hardware_info_box">
            <div class="index_hardware_info_title">
              <p>Farmsert-M14598U</p>
              <p>정상 연결됨</p>
            </div>
            <div class="index_hardware_info_description">
              <div class="index_hardware_info_item">
                <div class="index_hardware_info_item_img">
                  <img src="~/static/images/power.svg">
                </div>
                <p>기기 전원 켜짐</p>
              </div>

              <div class="index_hardware_info_item">
                <div class="index_hardware_info_item_img">
                  <img src="~/static/images/bettery.svg">
                </div>
                <p>배터리 42%</p>
              </div>

              <div class="index_hardware_info_item">
                <div class="index_hardware_info_item_img">
                  <img src="~/static/images/sensor.svg">
                </div>
                <p>센서 정상 작동</p>
              </div>
              
              <div class="index_hardware_info_item">
                <div class="index_hardware_info_item_img">
                  <img src="~/static/images/safety.svg">
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
              <img src="~/static/images/water.svg">
              <p>산성도 센서</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 작동중</p>
            <div class="index_hardware_sensor_description">
              <p>산성도 /</p>
              <p>7pH</p>
            </div>
          </div>

          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/water.svg">
              <p>조도 센서</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 작동중</p>
            <div class="index_hardware_sensor_description">
              <p>밝음 /</p>
              <p>밝음</p>
            </div>
          </div>

          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/water.svg">
              <p>온습도 센서</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 작동중</p>
            <div class="index_hardware_sensor_description">
              <p>습도 /</p>
              <p>32%</p>
            </div>
          </div>
          
          <div class="index_hardware_sensor">
            <div class="index_hardware_sensor_title">
              <img src="~/static/images/water.svg">
              <p>토양 습도 센서</p>
            </div>
            <p class="index_hardware_sensor_status">센서 정상 작동중</p>
            <div class="index_hardware_sensor_description">
              <p>토양 습도 /</p>
              <p>30cmHg</p>
            </div>
          </div>
        </div>

        <div class="index_box index_hardware_speed">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

declare global {
  interface Window {
    kakao: any
  }
}

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  data() {
    return {
      map: null,
    }
  },
  mounted () {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script')
      script.src =
        `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.KAKAO_API_KEY}`
      script.addEventListener('load', () => {
        window.kakao.maps.load(() => {
          this.initMap()
        })
      })
      document.head.appendChild(script)
      // 카카오 맵 sdk 를 불러옴
    } else {
      this.initMap()
    }
    // 카카오 맵을 불러옴
  },
  methods: {
    initMap() {
      const container = document.getElementById('map')
      const options = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      }
      this.map = new window.kakao.maps.Map(container, options)
    }
  }
})
</script>

<style lang='scss'>
@import '~/static/scss/index.scss';
</style>
