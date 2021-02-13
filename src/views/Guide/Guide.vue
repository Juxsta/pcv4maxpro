<template>
  <div class="guide__container">
    <div class="guide__bar">
      <guide-bar />
    </div>
    <!-- <div class="guide__page">
      <div class="guide__activity-title-button">
        <v-avatar size="50">
          <v-img
            src="https://cdn.discordapp.com/attachments/692111176129052712/800962947743875102/Screen_Shot_2021-01-18_at_9.40.44_PM.png"
          ></v-img>
        </v-avatar>
      </div>
      <div class="guide__activity-title">Prajit Saravanan's Progress</div> -->
    <div class="guide__table">
      <component :is="currentUnit" />
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Test from '@/components/Test.vue';
import { ref } from '@vue/composition-api';
import Bar from './Bar.vue';
import ListView from './components/ListView/TableView.vue';

export default {
  setup() {
    const currentUnit = ref(ListView);
    return {
      currentUnit
    };
  },
  components: {
    'guide-bar': Bar,
    ListView
    // Test
  }
};
</script>

<style lang="scss">
.guide {
  &__activity-title-button {
    margin: 25px 25px 0px 25px;
  }

  &__activity-title {
    font-family: Raleway;
    font-size: 28px;
    font-weight: 700;
    margin: 25px;
  }

  &__container {
    width: 100%;
    height: 100vh;
    display: flex;
    // border: 12px solid #000000;
    background-color: transparent;
  }
  &__bar {
    // max-width: fit-content;
    // min-width: fit-content;
    width: fit-content;
    height: fit-content;
  }
  &__page {
    width: 100%;
    height: fit-content;
    //display: flex;
    position: relative;
  }
  &__locks {
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
  &__lock {
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
  &__table {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
  }
}
</style>
