<template>
  <v-card hover class="explore-card__card">
    <div class="pl-5 pt-5 pr-5">
      <!-- <v-avatar size="50">
        <v-img :src="employer.avatar"></v-img>
      </v-avatar> -->
    </div>
    <div :class="`explore-card__employer-title-${color}`">{{ employer.programName }}</div>
    <v-card flat tile :color="color">
      <div class="explore-card__text-background">
        {{ employer.programDesc }}
      </div>
    </v-card>
    <v-list-item class="justify-end">
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" icon v-on="on" @click="loveProgram">
            <v-icon :color="loved ? '#eda1bf' : 'grey'">mdi-heart</v-icon>
          </v-btn>
        </template>
        <span>Love</span>
      </v-tooltip>

      <!-- <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" icon v-on="on" @click="bookmarkProgram">
            <v-icon :color="bookmarked ? '#fdd35a' : 'grey'">mdi-bookmark</v-icon>
          </v-btn>
        </template>
        <span>Bookmark</span>
      </v-tooltip> -->

      <!-- <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" icon v-on="on">
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </template>
        <span>Copy Share Link</span>
      </v-tooltip> -->
    </v-list-item>

    <v-list-item class="justify-end">
      <v-btn
        class="explore-card__button font-weight-bold ml-1 mr-1"
        rounded
        small
        disabled
        depressed
        :ripple="false"
        ><v-icon left>mdi-set-none</v-icon>{{ employer.tokens }}1 Token</v-btn
      >

      <router-link
        :to="{
          name: 'guide',
          params: {
            programId: employer._id.toString(),
            page: 0,
            join: true
          }
        }"
      >
        <v-btn
          class="explore-card__button font-weight-bold ml-1 mr-1"
          outlined
          rounded
          small
          depressed
          :ripple="false"
          >Start Program</v-btn
        >
      </router-link>
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

<style lang="scss">
.explore-card {
  &__employer-title-red {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #ea6764;
    letter-spacing: 0.0125em;
    padding: 15px;
  }
  &__employer-title-green {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #6eba80;
    letter-spacing: 0.0125em;
    padding: 15px;
  }

  &__employer-title-blue {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #3c9dcd;
    letter-spacing: 0.0125em;
    padding: 15px;
  }

  &__employer-title-orange {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #f79961;

    letter-spacing: 0.0125em;
    padding: 15px;
  }

  &__employer-title-yellow {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #fec34b;
    letter-spacing: 0.0125em;
    padding: 15px;
  }

  &__employer-title-purple {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #ae92b0;
    letter-spacing: 0.0125em;
    padding: 15px;
  }

  &__employer-title-pink {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #eda1bf;
    letter-spacing: 0.0125em;
    padding: 15px;
  }
}
</style>
