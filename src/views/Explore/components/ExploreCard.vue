<template>
  <div class="explore-card__entire-body">
    <v-card tile class="explore-card__card" elevation="0">
      <!-- <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
          <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item> -->

      <v-card tile class="mx-auto pb-3" color="#eda1bf" elevation="0" dark max-width="400">
        <v-card-title>
          <!-- <v-icon large left> mdi-apple </v-icon> -->
          <!-- <span class="title font-weight-light">City of East Palo Alto</span> -->
          <div class="overline font-weight-bold">City of East Palo Alto</div>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
          Use human-centered design to engage the diverse, multi-cultural community of East Palo
          Alto
        </v-card-text>

        <v-list-item class="justify-end">
          <v-btn class="explore-card__button font-weight-bold" outlined depressed :ripple="false"
            >Start Program</v-btn
          >

          <!-- <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn> -->
        </v-list-item>
      </v-card>

      <v-card-actions>
        <v-list-item class="">
          <v-list-item-avatar color="grey lighten-2">
            <v-img
              class="elevation-6"
              src="https://www.fusecorps.org/wp-content/uploads/2018/10/Jerry-T.-Chang-e1539383876714.jpg"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jerry Chang</v-list-item-title>
          </v-list-item-content>

          <!-- <v-row align="center" justify="end">
            <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">45</span>
          </v-row> -->

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-list-item>
      </v-card-actions>

      <!-- <v-img class="explore-card__image" height="210px" src="https://picsum.photos/510/300?random">
      </v-img> -->

      <!-- <v-card-title class="explore-card__title font-weight-bold">Program Title</v-card-title> -->
      <v-card-actions>
        <v-list-item>
          <v-chip-group class=""
            ><v-chip small>Mon, Oct 18</v-chip> <v-chip small>Mon, Apr 18</v-chip></v-chip-group
          >
        </v-list-item>
      </v-card-actions>
      <!-- TIMELINE START -->

      <v-stepper v-model="e6" non-linear class="explore-card__timeline pb-0" vertical>
        <v-stepper-step
          class="explore-card__timeline-step"
          color="#6fba7f"
          :complete="e6 > 0"
          step="1"
          non-linear
        >
          Project
          <!-- <small>Summarize if needed</small> -->
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card elevation="0" color="grey lighten-3" class="mb-3" height="50px"></v-card>
          <v-btn x-small outlined text @click="e6 = 2">Preview</v-btn>
          <v-btn x-small text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step
          class="explore-card__timeline-step"
          color="#3c9dcd"
          :complete="e6 > 0"
          step="2"
          non-linear
          >Screening</v-stepper-step
        >

        <v-stepper-content step="2">
          <!-- <v-card elevation="0" color="grey lighten-3" class="mb-3" height="50px"></v-card>
          <v-btn x-small outlined text @click="e6 = 3">Preview</v-btn>
          <v-btn x-small text>Cancel</v-btn> -->
        </v-stepper-content>

        <v-stepper-step
          class="explore-card__timeline-step"
          color="#ae92b1"
          :complete="e6 > 0"
          step="3"
          non-linear
          >Internship</v-stepper-step
        >

        <v-stepper-content step="3">
          <!-- <v-card elevation="0" color="grey lighten-3" class="mb-3" height="50px"></v-card>
          <v-btn x-small outlined text @click="e6 = 4">Preview</v-btn>
          <v-btn x-small text>Cancel</v-btn> -->
        </v-stepper-content>

        <!-- <v-stepper-step step="4">View setup instructions</v-stepper-step>
        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content> -->
      </v-stepper>

      <!-- TIMELINE END -->

      <!-- <div class="explore-card__title text-h4 font-weight-bold">
        <slot name="title"> Program Name </slot>
      </div> -->
      <!-- <v-card-actions>
        <v-list-item class="justify-end">
          <v-btn
            large
            class="explore-card__button font-weight-bold"
            outlined
            depressed
            :ripple="false"
            >Start Program</v-btn
          >
        </v-list-item>
      </v-card-actions> -->

      <!-- QUALIFICATIONS START -->

      <v-list-item>
        <v-btn color="#6fba7f" icon>
          <v-icon small>mdi-checkbox-marked-circle</v-icon>
        </v-btn>

        <v-btn color="#6fba7f" icon>
          <v-icon small>mdi-checkbox-marked-circle</v-icon>
        </v-btn>

        <v-btn color="#6fba7f" icon>
          <v-icon small>mdi-checkbox-marked-circle</v-icon>
        </v-btn>

        <v-btn color="#ea6764" icon>
          <v-icon small>mdi-cancel</v-icon>
        </v-btn>

        <v-btn color="#ea6764" icon>
          <v-icon small>mdi-cancel</v-icon>
        </v-btn>
      </v-list-item>

      <!-- QUALIFICATIONS END -->
    </v-card>
  </div>
</template>

<script lang="ts">
import {} from '@vue/composition-api';

export default {
  name: 'PCSelectCard',
  setup() {
    return {};
  },
  data() {
    return {
      e6: 1
    };
  }
};
</script>

<style lang="scss">
.explore-card {
  &__entire-body {
    height: 100%;
  }
  &__card {
    &.v-sheet.v-card {
      border: 1px solid #d1d3d4;
      padding-bottom: 12px;
      // border-radius: 0px;
      // min-height: 375px;
      // max-width: 475px;
    }
  }
  &__title {
    display: flex;
    // justify-content: space-around;
    // margin-top: 38px;
    font-family: 'Raleway';
  }
  &__button {
    // display: flex;
    // justify-content: space-around;
    // border: 1px solid black;
    // margin-top: 32px;

    // margin-left: 138px;

    // width: 200px;
    // height: 40px;
    background: transparent;
    // margin: 18px;
  }

  &__duration {
    display: flex;
  }

  &__timeline {
    box-shadow: none !important;
  }

  &__timeline-step {
    font-family: Raleway;
    font-weight: 800;
  }
}
</style>
