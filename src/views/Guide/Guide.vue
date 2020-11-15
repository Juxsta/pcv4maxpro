<template>
  <div class="guide__container">
    <div class="guide__bar">
      <guide-bar />
    </div>
    <div class="guide__page">
      <div class="guide__locks guide__locks--left unlocked">
        <v-icon large color="grey lighten-1" class="guide__lock">mdi-chevron-left</v-icon>
        <!-- STUDENT VIEW -->
        <v-icon large color="green" class="guide__lock">mdi-lock-open</v-icon>
        <!-- <v-icon large color="green" class="guide__lock">mdi-check-circle</v-icon> -->
      </div>
      <component :is="currentUnit" />
      <div class="guide__locks guide__locks--right locked">
        <!-- STUDENT VIEW -->
        <v-icon large color="red" class="guide__lock">mdi-lock</v-icon>
        <!-- <v-icon large color="orange" class="guide__lock">mdi-progress-wrench</v-icon> -->

        <v-icon large color="grey lighten-1" class="guide__lock">mdi-chevron-right</v-icon>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.guide__ {
  &container {
    width: 100%;
    height: 100vh;
    display: flex;
    // border: 12px solid #000000;
    background-color: transparent;
  }
  &bar {
    // max-width: fit-content;
    // min-width: fit-content;
    width: fit-content;
    height: fit-content;
  }
  &page {
    width: 100%;
    height: fit-content;
    display: flex;
    position: relative;
  }
  &locks {
    height: 95vh;
    width: 70px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    &--left {
      left: 0;
      top: 0;
    }
    &--right {
      right: 0;
      top: 0;
    }
  }
  &lock {
    color: var(--v-accent-base);
    &.unlocked {
      &:hover {
        color: var(--v-success-base);
      }
    }

    &.locked {
      &:hover {
        color: var(--v-error-base);
      }
    }
  }
}
</style>
<script>
import Test from '@/components/Test.vue';
import { ref } from '@vue/composition-api';
import Bar from './Bar.vue';

export default {
  setup() {
    const currentUnit = ref(Test);
    return {
      currentUnit
    };
  },
  components: {
    'guide-bar': Bar,
    Test
  }
};
</script>
