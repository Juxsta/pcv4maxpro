<template>
  <div class="forgotpassword__background">
    <div class="forgotpassword__content">
      <ValidationObserver v-slot="{ invalid }" class="forgotpassword_inputs1">
        <div class="forgotpassword__newpassword"></div>

        <div class="forgotpassword__textfield">
          <validation-provider v-slot="{ errors }" rules="required|min:6">
            <v-text-field
              v-model="password"
              rounded
              x-large
              type="password"
              :error-messages="errors"
              label="Enter new password"
              class=""
              single-line
              outlined
            ></v-text-field>
          </validation-provider>
          <span v-if="valid && score < 3">Your password is not strong enough</span>
        </div>

        <v-btn
          class="forgotpassword__button"
          depressed
          dark
          x-large
          rounded
          color="blue"
          :disabled="invalid"
          :loading="loading"
          @click="submit"
          >Reset Password</v-btn
        >
        <v-alert v-if="msg" :type="type">{{ msg }}</v-alert>
      </ValidationObserver>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from '@vue/composition-api';
import { useAuthActions } from '@/store';

export default {
  props: {
    token: {
      type: String,
      default: ''
    },
    tokenId: {
      type: String,
      default: ''
    }
  },
  setup(props, { root: { $router } }) {
    // reset password logic
    const state = reactive({
      password: '',
      msg: '',
      type: 'success',
      loading: false
    });
    const { resetPassword } = useAuthActions(['resetPassword']);
    async function submit() {
      state.loading = true;
      try {
        await resetPassword({
          token: props.token as string,
          tokenId: props.tokenId as string,
          password: state.password
        });
        state.msg = 'Your password has been changed';
        state.type = 'success';
        $router.push({ name: 'login' });
      } catch (err) {
        state.msg = err;
        state.type = 'error';
      }
      state.loading = false;
    }
    // validation logic
    return { ...toRefs(state), submit };
  }
};
</script>

<style lang="scss">
.forgotpassword {
  &__newpassword {
    text-align: center;
    padding-top: 15%;
    color: #6fba7f;
  }

  &__textfield {
    margin-top: 1%;
    width: 30%;
    margin-left: 35%;
    align-content: center;
    text-align: center;
    align-items: center;
    & .v-text-field--outlined > .v-input__control > .v-input__slot {
      background: white;
    }
  }

  &__input {
    align-items: center;
    align-content: center;
    text-align: center;
    align-items: center;
  }

  &__background {
    height: 100;
    background-color: #4f4f4f;
  }

  &__button {
    width: 30%;
    margin-bottom: 50%;
    margin-left: 35%;
    & .v-btn__content {
      // color: white;
    }
  }

  &__inputs1 {
    display: flex;
    text-align: center;
    align-content: center;
  }

  &__content {
    align-content: center;
  }
}
</style>
