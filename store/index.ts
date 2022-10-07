
import { GetterTree, MutationTree, ActionTree } from 'vuex';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NuxtCookies } from 'cookie-universal-nuxt';
import { getUserData } from '~/api';

export const state = () => ({
  userData: null || {},
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  getUserData: (state) => state.userData,
};

export const mutations: MutationTree<RootState> = {
  setUserData(state, payload) {
    state.userData = payload;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async getUserData({ commit }) {
    const res = await getUserData();
    if (res.status === 200) {
      commit('setUserData', res.data.responseData.user);
    } else {
      window.$nuxt.$cookies.remove('token');
    }
  }
};
