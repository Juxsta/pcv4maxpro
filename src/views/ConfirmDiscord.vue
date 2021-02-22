<template>
  <div class="confirmemail__background">
    <h2>Hang on while we verify your Discord</h2>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from '@vue/composition-api';
import { useAuthActions, useToolActions } from '@/store';
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
    // *Confirm Signup
    const color = ref('blue');
    const email = ref('');
    const confirmationError = ref(false);
    const displayMessage = ref('Hang on while we verify your email');
    const resendConfirmation = async () => {
      const { resendEmailConfirmation } = useAuthActions(['resendEmailConfirmation']);
      await resendEmailConfirmation(email.value);
    };
    const verifyToken = async () => {
      const API_ENDPOINT = 'https://discord.com/api/v8';
      try {
           url: API_ENDPOINT,
        data: {
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: 'refresh_token',
          code: props.code,
          redirect_uri: '',
          scope: 'identify email connections'
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
        await axios.post(API_ENDPOINT,{
                    client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: 'refresh_token',
          code: props.code,
          redirect_uri: '',
          scope: 'identify email connections'
        })
      }
    };
    const { setLinearLoader } = useToolActions(['setLinearLoader']);
    onMounted(async () => {
      await setLinearLoader({ func: verifyUser });
      if (confirmationError.value) {
        color.value = 'red';
        displayMessage.value = 'We could not verify your email at this time';
      } else {
        color.value = 'green';
        displayMessage.value = 'Your email has been verified, you will be redirected shortly';
        vm.root.$router.push({ name: 'login' });
      }
    });

    return {
      confirmationError,
      displayMessage,
      color,
      email,
      resendConfirmation
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
