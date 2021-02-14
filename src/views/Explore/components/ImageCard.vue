<template>
  <div class="image-card__entire-body">
    <div class="image-card__content">
      <!-- <v-icon x-large>mdi-chevron-left</v-icon> -->
      <slot name="image">
        <v-img
          class="image-card__image"
          src="https://f.hubspotusercontent00.net/hubfs/2480959/Header%20Background.jpg"
        >
          <div class="image-card__title">Explore Programs</div>
          <div class="image-card__subtitle">
            Build projects for employers. If they dig it, you get an internship.
          </div>

          <div class="image-card__instructions">
            Explore employer projects and start program to begin building.
          </div>
          <div class="image-card__cta">
            <v-btn color="#eda1bf" x-large depressed rounded class="font-weight-bold white--text"
              >Get Started Video</v-btn
            >
          </div>
        </v-img>
      </slot>
      <!-- <v-icon x-large>mdi-chevron-right</v-icon> -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ImageCard'
};
</script>

<style lang="scss">
.image-card {
  &__entire-body {
    width: 100%;
  }

  &__content {
    display: flex;
  }

  &__image {
    // border: 1px solid black;
    max-height: 550px;
    min-height: 450px;
  }

  &__title {
    color: #3c9dcd;
    // font-family: Montserrat;
    font-family: Raleway;
    font-size: 70px;
    font-weight: 800;
    text-align: center;
    margin-top: 125px;
  }

  &__subtitle {
    color: #ffffff;
    // font-family: Montserrat;
    font-family: Raleway;
    font-size: 26px;
    font-weight: 800;
    text-align: center;
    margin-top: 25px;
  }

  &__instructions {
    color: #ffffff;
    // font-family: Montserrat;
    font-family: Raleway;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin-top: 5px;
  }

  &__cta {
    padding-top: 50px;
    padding-bottom: 75px;
    text-align: center;
  }
}
</style>
