import { Module } from 'vuex';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { RootState } from '@/store/state';
import { AuthGetters, getters } from './getters';
import { actions, AuthActions } from './actions';
import { mutations } from './mutations';
import state from './state';

// Returns the shared instance of the Realm app.
const auth: Module<typeof state, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
export default auth;
export const { useState, useGetters, useMutations, useActions } = createNamespacedHelpers<
  typeof state,
  AuthGetters,
  AuthActions,
  any
>('auth');
