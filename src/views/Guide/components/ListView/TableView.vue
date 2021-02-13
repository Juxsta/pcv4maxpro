<template>
  <div class="explore-program__explore-card">
    <!-- <explore-card v-for="item in items" :key="item.title"></explore-card> -->

    <v-card tile class="explore-card__card" elevation="0">
      <v-card tile class="mx-auto pb-3" color="#eda1bf" elevation="0" dark max-width="400">
        <v-card-title>
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

      <!-- <v-card-actions>
        <v-list-item>
          <v-chip-group class=""
            ><v-chip small>Mon, Oct 18</v-chip> <v-chip small>Mon, Apr 18</v-chip></v-chip-group
          >
        </v-list-item>
      </v-card-actions> -->

      <!-- <v-stepper v-model="e6" non-linear class="explore-card__timeline pb-0" vertical>
        <v-stepper-step
          class="explore-card__timeline-step"
          color="#6fba7f"
          :complete="e6 > 0"
          step="1"
          non-linear
        >
          Project
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

        <v-stepper-content step="2"> </v-stepper-content>

        <v-stepper-step
          class="explore-card__timeline-step"
          color="#ae92b1"
          :complete="e6 > 0"
          step="3"
          non-linear
          >Internship</v-stepper-step
        >

        <v-stepper-content step="3"> </v-stepper-content>
      </v-stepper> -->

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
    </v-card>

    <v-card tile class="explore-card__card" elevation="0">
      <v-card tile class="mx-auto pb-3" color="#eda1bf" elevation="0" dark max-width="400">
        <v-card-title>
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

      <!-- <v-card-actions>
        <v-list-item>
          <v-chip-group class=""
            ><v-chip small>Mon, Oct 18</v-chip> <v-chip small>Mon, Apr 18</v-chip></v-chip-group
          >
        </v-list-item>
      </v-card-actions> -->

      <!-- <v-stepper v-model="e6" non-linear class="explore-card__timeline pb-0" vertical>
        <v-stepper-step
          class="explore-card__timeline-step"
          color="#6fba7f"
          :complete="e6 > 0"
          step="1"
          non-linear
        >
          Project
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

        <v-stepper-content step="2"> </v-stepper-content>

        <v-stepper-step
          class="explore-card__timeline-step"
          color="#ae92b1"
          :complete="e6 > 0"
          step="3"
          non-linear
          >Internship</v-stepper-step
        >

        <v-stepper-content step="3"> </v-stepper-content>
      </v-stepper> -->

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
    </v-card>

    <v-card tile class="explore-card__card" elevation="0">
      <v-card tile class="mx-auto pb-3" color="#eda1bf" elevation="0" dark max-width="400">
        <v-card-title>
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

      <!-- <v-card-actions>
        <v-list-item>
          <v-chip-group class=""
            ><v-chip small>Mon, Oct 18</v-chip> <v-chip small>Mon, Apr 18</v-chip></v-chip-group
          >
        </v-list-item>
      </v-card-actions> -->

      <!-- <v-stepper v-model="e6" non-linear class="explore-card__timeline pb-0" vertical>
        <v-stepper-step
          class="explore-card__timeline-step"
          color="#6fba7f"
          :complete="e6 > 0"
          step="1"
          non-linear
        >
          Project
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

        <v-stepper-content step="2"> </v-stepper-content>

        <v-stepper-step
          class="explore-card__timeline-step"
          color="#ae92b1"
          :complete="e6 > 0"
          step="3"
          non-linear
          >Internship</v-stepper-step
        >

        <v-stepper-content step="3"> </v-stepper-content>
      </v-stepper> -->

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
    </v-card>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { items, HEADER } from './const';

export default {
  name: 'TableView',
  setup() {
    return { header: ref(HEADER), items };
  }
};
</script>

<style lang="scss">
.monitor {
  &__activities {
    width: 100%;
  }
}

.explore-program {
  &__entire-body {
    width: 100%;
  }

  &__title {
    display: flex;
    justify-content: center;
    margin-top: 126px;
    margin-bottom: 47px;
  }

  &__image-card {
    // margin-left: 145px;
    // margin-right: 145px;
  }

  &__explore-card {
    margin-top: 50px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: repeat(3, 325px);
    // grid-template-rows: repeat(10, 375px);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    justify-content: center;
  }

  // &__explore-card {
  //   margin-top: 50px;
  //   margin-left: 50px;
  //   margin-bottom: 42px;
  //   display: grid;
  //   grid-template-columns: repeat(3, 375px);
  //   grid-template-rows: repeat(3, 275px);
  //   grid-column-gap: 42px;
  //   grid-row-gap: 42px;
  // }

  &__filter {
    margin-top: 50px;
  }

  &__filter-buttons {
    margin-left: 0.5%;
    margin-right: 0.5%;
  }
}

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
