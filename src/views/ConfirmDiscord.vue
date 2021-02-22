<template>
  <div class="confirmemail__background">
    <div class="confirmemail__box accent">
      <div :class="`${color}--text`" class="confirmemail__title text-h4 font-weight-black">
        <div>{{ displayMessage }}</div>
      </div>
      <div v-if="color === 'red'" class="mt-8 d-flex flex-column justify-center">
        <p>Please try again later</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from '@vue/composition-api';
import { useAuthGetters, useDbActions, useToolActions } from '@/store';
import axios from 'axios';

export default {
  name: 'ConfirmDiscord',
  props: {
    code: {
      type: String,
      required: true
    }
  },
  setup(props, vm) {
    const { getObjectId } = useAuthGetters(['user']);
    const { update } = useDbActions(['update']);

    // *Confirm Signup
    const color = ref('blue');
    const email = ref('');
    const displayMessage = ref('Hang on while we talk with discord');
    const confirmationError = ref(false);
    const loading = ref(false);
    const verifyToken = async () => {
      const API_ENDPOINT = 'https://discord.com/api/v8';
      try {
        const resp = await axios.post(API_ENDPOINT, {
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: 'refresh_token',
          code: props.code,
          redirect_uri: '',
          scope: 'identify email connections'
        });
        await update({
          collection: 'User',
          payload: {
            discordAccessToken: resp.data.access_token,
            discordRefreshToken: resp.data.refresh_token
          },
          filter: {
            _id: getObjectId.value
          }
        });
      } catch (err) {
        confirmationError.value = true;
      }
    };
    const { setLinearLoader } = useToolActions(['setLinearLoader']);
    onMounted(async () => {
      await setLinearLoader({ func: verifyToken });
      if (confirmationError.value) {
        color.value = 'red';
        displayMessage.value = 'Something went wrong verifying your discord acccount';
      } else {
        color.value = 'green';
        displayMessage.value = 'Your account has been linked, close this tab.';
        vm.root.$router.push({ name: 'login' });
      }
    });

    return {
      confirmationError,
      displayMessage,
      color,
      email
    };
  }
};
</script>

<style lang="scss">
.confirmemail {
  &__background {
    height: 100%;
    background-color: #4f4f4f;
    display: flex;
    justify-content: center;
  }

  &__box {
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 20%;
    background: #c4c4c4;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 25px;
  }

  &__title {
    display: flex;
    flex: column;
    color: #3c9dcd;
    margin-top: 15%;
    width: 70%;
    text-align: center;
  }
}
</style>
