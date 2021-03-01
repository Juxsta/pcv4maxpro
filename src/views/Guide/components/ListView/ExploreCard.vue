<template>
  <v-card hover class="explore-card__card">
    <div class="pl-5 pt-5 pr-5">
      <v-avatar size="50">
        <v-img :src="employer.avatar"></v-img>
      </v-avatar>
    </div>
    <div :class="`explore-card__employer-title-${color}`">{{ employer.programName }}</div>
    <v-card flat tile :color="color">
      <div class="explore-card__text-background">
        {{ employer.programDesc }}
      </div>
    </v-card>
    <v-list-item class="justify-end">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" icon v-on="on" @click="loveProgram">
            <v-icon :color="loved ? '#eda1bf' : 'grey'">mdi-heart</v-icon>
          </v-btn>
        </template>
        <span>Love</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" icon v-on="on" @click="bookmarkProgram">
            <v-icon :color="bookmarked ? '#fdd35a' : 'grey'">mdi-bookmark</v-icon>
          </v-btn>
        </template>
        <span>Bookmark</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" icon v-on="on">
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </template>
        <span>Copy Share Link</span>
      </v-tooltip>
    </v-list-item>

    <v-list-item class="justify-end">
      <v-btn
        class="explore-card__button font-weight-bold ml-1 mr-1"
        small
        disabled
        depressed
        :ripple="false"
        >{{ employer.tokens }} Tokens</v-btn
      >

      <v-btn
        class="explore-card__button font-weight-bold ml-1 mr-1"
        small
        outlined
        depressed
        :ripple="false"
        >Start Program</v-btn
      >
    </v-list-item>

    <v-list-item class="justify-end">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#6fba7f" v-bind="attrs" icon v-on="on">
            <v-icon small>mdi-account-check</v-icon>
          </v-btn>

          <!-- <v-btn color="#ea6764" v-bind="attrs" icon v-on="on">
                <v-icon small>mdi-account-off</v-icon>
              </v-btn> -->
        </template>
        <span>You're a Student</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#6fba7f" v-bind="attrs" icon v-on="on">
            <v-icon small>mdi-map-marker-check</v-icon>
          </v-btn>

          <!-- <v-btn color="#ea6764" v-bind="attrs" icon v-on="on">
                <v-icon small>mdi-map-marker-remove-variant</v-icon>
              </v-btn> -->
        </template>
        <span>No Location Requirement</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#6fba7f" v-bind="attrs" icon v-on="on">
            <v-icon small>mdi-calendar-check</v-icon>
          </v-btn>

          <!-- <v-btn color="#ea6764" v-bind="attrs" icon v-on="on">
                <v-icon small>mdi-calendar-remove</v-icon>

              </v-btn> -->
        </template>
        <span>Age Requirement Met</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn color="#6fba7f" icon v-bind="attrs" v-on="on">
                <v-icon small>mdi-hammer-wrench</v-icon>
              </v-btn> -->

          <v-btn color="#fdd35a" icon v-bind="attrs" v-on="on">
            <v-icon small>mdi-hammer-wrench</v-icon>
          </v-btn>
        </template>
        <!-- <span>No Specific Skills Required</span> -->
        <span>Specific Skills Required</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn color="#6fba7f" icon v-bind="attrs" v-on="on">
                <v-icon small>mdi-laptop-windows</v-icon>
              </v-btn> -->

          <v-btn color="#fdd35a" icon v-bind="attrs" v-on="on">
            <v-icon small>mdi-laptop-windows</v-icon>
          </v-btn>
        </template>
        <!-- <span>No Specific Tech Required</span> -->
        <span>Specific Tech Required</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn color="#6fba7f" icon v-bind="attrs" v-on="on">
                <v-icon small>mdi-cash-usd</v-icon>
              </v-btn> -->

          <v-btn color="#fdd35a" icon v-bind="attrs" v-on="on">
            <v-icon small>mdi-trophy</v-icon>
          </v-btn>
        </template>
        <!-- <span>Win Paid Opportunities</span> -->
        <!-- <span>Win Paid or Unpaid Opportunities</span> -->
        <span>Win Unpaid Opportunities</span>
      </v-tooltip>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed } from '@vue/composition-api';

const colors = ['red', 'purple', 'orange', 'blue', 'green', 'pink', 'yellow'];

export default defineComponent({
  name: 'ExploreCard',
  props: {
    employer: {
      required: true,
      type: Object as PropType<Record<string, any>>
    },
    loves: {
      required: true,
      type: Array as PropType<Array<Record<string, any>>>
    },
    bookmarks: {
      required: true,
      type: Array as PropType<Array<Record<string, any>>>
    }
  },
  setup(props, ctx) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const loved = computed(() =>
      props.loves.some(program => program.programName === props.employer.programName)
    );
    const bookmarked = computed(() =>
      props.bookmarks.some(program => program.programName === props.employer.programName)
    );
    const loveProgram = () => {
      ctx.emit('loveProgram', props.employer);
    };
    const bookmarkProgram = () => {
      ctx.emit('bookmarkProgram', props.employer);
    };
    return { color, loved, bookmarked, loveProgram, bookmarkProgram };
  }
});
</script>
