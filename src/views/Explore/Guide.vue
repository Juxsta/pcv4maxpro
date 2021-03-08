<template>
  <div class="guide__container">
    <div class="guide__bar">
      <guide-bar
        :program-filter.sync="programFilter"
        :age-filter.sync="ageFilter"
        :residence-filter.sync="residenceFilter"
        :pathways-filter.sync="pathwaysFilter"
      />
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
      <ListView
        :employers="filteredPrograms"
        :loves="loved"
        :bookmarks="bookmarked"
        @loveProgram="loveProgram"
        @bookmarkProgram="bookmarkProgram"
        v-on="$listeners"
      />
      <!-- <component :is="currentUnit" :employers="employers" /> -->
    </div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import Test from '@/components/Test.vue';
import { ref, reactive, toRefs, computed, defineComponent } from '@vue/composition-api';
import { useDbGetters } from '@/store';
import Bar from './Bar.vue';
import ListView from './components/ListView/TableView.vue';

const dummyEmployerData = [
  {
    programName: 'Artemys Foods',
    programDesc:
      'Help a biotech startup interview, evaluate & understand attitudes towards cell-based meats by determining age, demographics & reasons consumers would choose it over animal-based meats',
    avatar:
      'https://specials-images.forbesimg.com/imageserve/5e4830a66895e00006834fdd/960x0.jpg?fit=scale',
    tokens: 1,
    ageRange: [15, 18],
    requiredResidency: ['Alameda County, CA', 'San Leandro, CA'],
    pathways: ['Public Services', 'Transportation']
  },
  {
    programName: 'Picterra',
    programDesc:
      'Use the Picterra platform to develop a machine learning based solution that uses aerial, satellite or drone imagery to support the Climate Action Plan of your city, county or region',
    avatar:
      'http://ifnk2kzc2lrg7y02yhzokml4-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/Diverse-detection-outputs_Picterra_01.jpg',
    tokens: 1,
    ageRange: [20, 22],
    requiredResidency: ['Albany, CA'],
    pathways: ['Transportation']
  },
  {
    programName: 'Cognixion',
    programDesc:
      'Assist in the development of a high-tech communication system for people with disabilities. We need students to record their own communications and aid with design so those who do not have the privilege to speak can be better connected with their culture and community.',
    avatar: 'https://sociable.co/wp-content/uploads/2019/01/MainPhone-750x450.png',
    tokens: 1,
    ageRange: [12, 15],
    requiredResidency: ['Alameda County, CA', 'San Leandro, CA'],
    pathways: ['Public Services', 'Transportation']
  },
  {
    programName: 'Mayor Pauline Cutter',
    programDesc:
      'Innovate access to the Mayor of San Leandro by utilizing VideoAsk.com, a face-to-face video interaction app, to improve the dialogue, relationships & communications with constituents of the city',
    avatar: 'https://www.civicbusinessjournal.com/wp-content/uploads/2018/02/San-Leandro-Seal.jpg',
    tokens: 1,
    ageRange: [15, 18],
    requiredResidency: ['San Leandro, CA'],
    pathways: ['Public Services']
  },
  {
    programName: 'Uber',
    programDesc:
      'Design and code a copywriting assistant with natural language processing to optimize Uber localization efforts in customer support, marketing and product',
    avatar:
      'https://cnet1.cbsistatic.com/img/N_2AKaW9QFaEPiALqhMarCDx_Sg=/1200x675/2019/08/27/8f91f34c-927f-4056-90b4-25f9d5a9df7d/uber-logo-map-1.jpg',
    tokens: 1,
    requiredResidency: ['Alameda County, CA', 'San Leandro, CA'],
    ageRange: [16, 18],
    pathways: ['Public Services', 'Transportation']
  },
  {
    programName: 'Litterati',
    programDesc:
      'Stop litter at its source by using the Litterati app to document brands, materials & objects of litter to inspire local leaders to make better-informed decisions & investments towards a clean, litter-free city',
    avatar:
      'https://cdn.shopify.com/s/files/1/0098/1362/2848/products/Litterati_2048x.jpg?v=1582885474',
    tokens: 1,
    ageRange: [16, 18],
    requiredResidency: ['Alameda County, CA', 'San Leandro, CA'],
    pathways: ['Transportation']
  },
  {
    programName: 'Purely Drinks',
    programDesc:
      'Produce a viral (and even comedic) 30-second video marketing the variety of ways Purely Drinks can be used in daily diets to better brand vinegar-based beverages to opportunity markets (Signup for Feb 26th launch now)',
    avatar: 'https://i.pinimg.com/236x/66/17/a6/6617a670ba0ed929c38ea5297f723879.jpg',
    tokens: 1,
    ageRange: [16, 18],
    requiredResidency: ['San Leandro, CA'],
    pathways: ['Public Services', 'Transportation']
  },
  {
    programName: 'Typeform',
    programDesc:
      'Transform the way your favorite local businesses interact with their customers in a post-pandemic society by utilizing VideoAsk.com to prototype face-to-face video experiences',
    avatar:
      'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5f5ab9ce1f1a5e0001389958/picture',
    tokens: 1,
    ageRange: [16, 18],
    requiredResidency: ['Alameda County, CA', 'San Leandro, CA'],
    pathways: [
      'Agriculture & Natural Resources',
      'Arts, Media & Entertainment',
      'Building & Construction Trades',
      'Business & Finance',
      'Education, Childhood Development & Family Services'
    ]
  }
];

export default defineComponent({
  components: {
    'guide-bar': Bar,
    ListView
    // Test
  },
  setup(_props, ctx) {
    const { collection } = useDbGetters(['collection']);
    const employerData = ref([]);
    // const employerData = ref(dummyEmployerData);
    collection.value!('Program')
      .find({
        // published: true
      })
      .then(programs => {
        employerData.value = programs;
      });

    const state = reactive({
      programFilter: 'All' as 'All' | 'Loved' | 'Bookmarked',
      ageFilter: null,
      residenceFilter: null,
      pathwaysFilter: [],
      bookmarked: [],
      loved: []
    });

    if (ctx.root._route.query) {
      let query = ctx.root._route.query.pathway;
      if (!Array.isArray(query)) query = [query];
      console.log(query);
      state.pathwaysFilter = query.map(pathway => ({
        text: pathway as string,
        color: 'grey darken-1'
      }));
    }

    const currentUnit = ref(ListView);

    const filteredPrograms = computed(() => {
      let visiblePrograms = [];
      if (state.programFilter === 'Loved') {
        visiblePrograms = state.loved;
      } else if (state.programFilter === 'Bookmarked') {
        visiblePrograms = state.bookmarked;
      } else {
        visiblePrograms = employerData.value;
      }

      if (state.residenceFilter && state.residenceFilter !== 'None') {
        visiblePrograms = visiblePrograms.filter(program =>
          program.requiredResidency.includes(state.residenceFilter)
        );
      }

      if (state.ageFilter && state.ageFilter !== 'All') {
        visiblePrograms = visiblePrograms.filter(
          program =>
            program.ageRange[0] <= parseInt(state.ageFilter, 10) &&
            program.ageRange[1] >= parseInt(state.ageFilter, 10)
        );
      }

      if (state.pathwaysFilter.length && !state.pathwaysFilter.some(obj => obj.text === 'All')) {
        const filters = state.pathwaysFilter.map(obj => obj.text);
        visiblePrograms = visiblePrograms.filter(program =>
          program.pathways.some(pathway => filters.includes(pathway))
        );
      }

      return visiblePrograms;
    });

    // ! mock functions to simulation liking/bookmarking.
    // ! change these to something that will actually store in db
    const loveProgram = program => {
      // add to loved if not there, else remove it
      if (state.loved.some(obj => obj.programName === program.programName))
        state.loved.splice(
          state.loved.findIndex(obj => {
            return obj.programName === program.programName;
          }),
          1
        );
      else state.loved.push(program);
    };

    const bookmarkProgram = program => {
      // add to bookmarked if not there, else remove it
      if (state.bookmarked.some(obj => obj.programName === program.programName))
        state.bookmarked.splice(
          state.bookmarked.findIndex(obj => {
            return obj.programName === program.programName;
          }),
          1
        );
      else state.bookmarked.push(program);
    };

    return {
      filteredPrograms,
      ...toRefs(state),
      loveProgram,
      bookmarkProgram,
      currentUnit
    };
  }
});
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
    overflow-y: scroll;
  }
}
</style>
