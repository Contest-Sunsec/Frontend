
import { GetterTree, MutationTree, ActionTree } from 'vuex';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NuxtCookies } from 'cookie-universal-nuxt';
import { getSensorById, getUserData } from '~/api';

export const state = () => ({
  userData: null || {} as any,
  hardwareData: null || {} as any,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  getUserData: (state) => state.userData,
  getHardwareData: (state) => state.hardwareData,
};

export const mutations: MutationTree<RootState> = {
  setUserData(state, payload) {
    state.userData = payload;
  },

  setHardwareData(state, payload) {
    state.hardwareData = payload;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async getUserData({ commit }) {
    const res = await getUserData();
    if (res.status === 200) {
      commit('setUserData', res.data.responseData.user);
    } else {
      console.log('error');
      window.$nuxt.$cookies.remove('token');
    }
  },

  getHardwareData({ commit }) {
    const check = () => {
      setTimeout(async () => {
        if(this.state.userData.hardwareId) {
          await getSensorById(this.state.userData.hardwareId).then((res) => {
            if(res.status === 200) {
              commit('setHardwareData', res.responseData);
              console.log(res.responseData);
            }
          });
        } else {
          check();
        }
      }, 500);
    };
    check();
  }
};
