<template>
  <v-toolbar flat color="grey darken-3" class="">
    <v-btn icon depressed>
      <img src="@/assets/Pilotcity_logo.png" class="signup__image" />
    </v-btn>

    <!-- <v-toolbar-title
      ><span class="text-h5 signup__header font-weight-black text-sm-h4"
        >PilotCity</span
      ></v-toolbar-title
    > -->

    <v-progress-linear
      v-if="loading"
      :active="loading"
      :indeterminate="loading"
      absolute
      bottom
      color="blue"
    ></v-progress-linear>

    <v-spacer></v-spacer>

    <!-- <v-btn v-if="!getUser" depressed color="white" outlined :to="{ name: 'login' }" :ripple="false">
      <span class="font-weight-black">Login</span>
    </v-btn>
    <v-btn
      v-if="!getUser"
      class="signup__signupbutton rounded-lg"
      depressed
      color="#828282"
      :ripple="false"
      :to="{ name: 'signup' }"
    >
      <span class="font-weight-black">Signup</span>
    </v-btn>
    <v-btn v-if="getUser" depressed color="#828282" :ripple="false" @click="logout">
      <span class="font-weight-black">Logout</span>
    </v-btn> -->
  </v-toolbar>
</template>
<script lang="ts">
import { useGetters as useAuthGetters, useActions as useAuthActions } from '@/store/modules/auth';
import { useGetters as useToolGetters } from '@/store/modules/tools';

export default {
  setup() {
    // Auth configuration
    const { getUser } = useAuthGetters(['getUser']);
    const { logout } = useAuthActions(['logout']);
    // Global Tooling for linear progression
    const { getLinearLoading: loading } = useToolGetters(['getLinearLoading']);
    return {
      getUser,
      logout,
      loading
    };
  }
};
</script>

<style lang="scss"></style>
