<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="alert">
    <div class="alert_title">
      <h1>현재 총 <strong>{{  }}개의 알람</strong>이 와있어요</h1>
      <div class="alert_title_btns">
        <button>알람</button>
        <button>통계</button>
      </div>
    </div>
    <div class="alert_wrapper">
      <div class="alert_box">
        <div class="alert_box_title">
          <div class="alert_box_title_img">
            <img src="@/static/images/bettery.svg" />
          </div>
          <h1>(하드웨어) 배터리의 값이 잘 맞지 않는거 같아요, 기기 상태를 확인해주세요.</h1>
        </div>
        <div class="alert_box_button">
          <button>확인완료</button>
          <button>보고하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Alert',
  layout: 'alert',
});
</script>

<style lang="scss" scoped>
.alert {
  width: 100%;

  &_title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 40px;
    padding-bottom: 40px;

    h1 {
      font-size: 24px;
      font-weight: 700;
    }

    strong {
      color: #21AB82;
      font-weight: 700;
    }

    &_btns {
      display: flex;
      gap: 5px;

      button {
        padding: 13px 15px;
        border-radius: 15px;
        border: 0;
        border: 0.5px solid #E4E4E4;
        color: #9C9C9C;
        background-color: white;
        cursor: pointer;

        font-weight: 600;
        font-size: 15px;

        &:first-child {
          color: #21AB82;
        }
      }
    }
  }

  &_wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }

  &_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    background-color: white;
    border-radius: 15px;
    padding: 15px;
    border: 1px solid #EEEEEE;

    &_title {
      display: flex;
      align-items: center;
      gap: 15px;

      h1 {
        font-size: 18px;
        font-weight: 700;
      }

      &_img {
        padding: 10px;
        background: #21AB82;
        border-radius: 15px;
        height: 44px;

        img {
          width: 24px;
          height: 24px;

          filter: brightness(0) invert(1);
        }
      }
    }

    &_button {
      display: flex;
      gap: 6px;

      button {
        border: 0;
        border-radius: 15px;
        color: #21AB82;
        font-weight: 600;
        font-size: 15px;
        line-height: 19px;
        padding: 10px 19px;
        cursor: pointer;

        &:first-child {
          background-color: white;
          border: 0.5px solid #E9E9E9;
        }

        &:last-child {
          background: #F4FFF9;
          border: 0.5px solid #21AB82;
        }
      }
    }
  }
}
</style>
