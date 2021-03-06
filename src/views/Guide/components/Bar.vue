<template>
  <div class="guide-bar">
    <div class="guide-bar__expand" @click="expand = !expand">
      <div>
        <v-tooltip right color="black">
          <template v-slot:activator="{ on, attrs }"
            ><v-icon v-bind="attrs" color="#404142" class="guide-bar__sidebar-icon" v-on="on"
              >mdi-drag-vertical</v-icon
            >
          </template>
          <span>Collapse</span>
        </v-tooltip>
      </div>

      <v-divider />
      <div @click="activeStep = unlockedStep">
        <v-tooltip right color="black">
          <template v-slot:activator="{ on, attrs }"
            ><v-icon v-bind="attrs" color="orange" class="guide-bar__sidebar-icon" v-on="on"
              >mdi-progress-wrench</v-icon
            >
          </template>
          <span>Setup Program</span>
        </v-tooltip>
      </div>

      <v-divider />

      <router-link :to="{ name: 'portfolio' }">
        <v-tooltip right color="black">
          <template v-slot:activator="{ on, attrs }"
            ><v-icon v-bind="attrs" color="#404142" class="guide-bar__sidebar-icon" v-on="on"
              >mdi-fingerprint</v-icon
            >
          </template>
          <span>My Portfolio</span>
        </v-tooltip>
      </router-link>
    </div>
    <v-card class="program-card">
      <v-expand-x-transition>
        <div v-show="expand" class="guide-bar__container">
          <div><v-btn rounded disabled x-small outlined depressed>PilotCity Flagship</v-btn></div>
          <div class="guide-bar__title">{{ title }}</div>

          <!-- ORGANIZER SETUP MODE -->
          <div class="guide-bar__stepper">
            <div class="guide-bar__stepper-content">
              <v-stepper vertical>
                <template v-for="n in steps">
                  <v-stepper-step
                    :key="`${n}-step`"
                    color="green"
                    :step="''"
                    :complete="activeStep > n"
                    @click="activeStep = timeline[n - 1].unlocked ? n + 1 : activeStep"
                  >
                    <div class="guide-bar__timeline-item">
                      {{ timeline[n - 1].step }}
                      <div>
                        <v-btn
                          class="guide-bar__timeline-item-setup"
                          color="orange"
                          outlined
                          x-small
                          depressed
                          :disabled="!timeline[n - 1].unlocked"
                          >Setup</v-btn
                        >
                      </div>
                    </div>
                  </v-stepper-step>
                  <v-stepper-content :key="`${n}-content`" :step="n" />
                </template>
              </v-stepper>
            </div>
          </div>

          <!-- READY TO PUBLISH PROGRAM BUTTON -->
          <v-dialog v-model="dialog" persistent max-width="350px">
            <template v-slot:activator="{ on, attrs }">
              <div class="d-flex justify-center">
                <div v-if="isPublished">
                  <v-btn min-width="225px" v-bind="attrs" rounded outlined depressed v-on="on"
                    >UnPublish Program</v-btn
                  >
                </div>
                <div v-else>
                  <!-- <v-btn
                    min-width="225px"
                    v-bind="attrs"
                    :disabled="!timeline.slice(0, timeline.length).every(adk => adk.unlocked)"
                    rounded
                    outlined
                    depressed
                    v-on="on"
                    >Publish Program</v-btn
                  > -->
                  <v-btn min-width="225px" v-bind="attrs" rounded outlined depressed v-on="on"
                    >Publish Program</v-btn
                  >
                </div>
              </div>
            </template>
            <v-card>
              <v-card-title>
                <div class="overline font-weight-bold">
                  {{ isPublished ? 'unpublish' : 'publish' }} your program?
                </div>

                <div class="ml-auto">
                  <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
                </div>
              </v-card-title>

              <v-divider></v-divider>

              <v-container>
                <div class="d-flex justify-center flex-row">
                  <v-btn class="ma-2" x-large rounded depressed outlined @click="dialog = false"
                    >Not yet</v-btn
                  >

                  <v-dialog v-model="dialog2" persistent max-width="400px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        class="ma-2"
                        x-large
                        color="green"
                        rounded
                        depressed
                        dark
                        v-on="on"
                        @click="changePublishStatus"
                        >{{ isPublished ? 'Unpublish' : 'Publish' }}</v-btn
                      >
                    </template>
                    <v-card>
                      <v-card-title>
                        <div class="overline font-weight-bold">
                          {{
                            isPublished
                              ? 'Your program will be published!'
                              : 'Your program has been unpublished'
                          }}
                        </div>

                        <div class="ml-auto">
                          <v-btn icon @click="dialog2 = false"><v-icon>mdi-close</v-icon></v-btn>
                        </div>
                      </v-card-title>

                      <v-divider></v-divider>

                      <v-container>
                        <div class="d-flex justify-center flex-column">
                          <v-btn
                            class="ma-2"
                            x-large
                            color="orange"
                            rounded
                            outlined
                            depressed
                            @click="
                              () => {
                                dialog2 = false;
                                dialog = false;
                              }
                            "
                            >Continue setting up</v-btn
                          >
                          <v-btn
                            class="ma-2"
                            x-large
                            rounded
                            dark
                            depressed
                            @click="$router.push({ name: 'portfolio' })"
                          >
                            <span>Goto My Portfolio</span>
                          </v-btn>
                        </div>
                      </v-container>
                    </v-card>
                  </v-dialog>
                </div>
              </v-container>
            </v-card>
          </v-dialog>

          <!-- ORGANIZER SETUP MODE -->
        </div>
      </v-expand-x-transition>
    </v-card>
  </div>
</template>

<script lang="ts">
import { useDbGetters } from '@/store';
import { ObjectId } from 'bson';
import { ref, defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'Bar',

  props: {
    timeline: {
      required: true,
      type: Array as () => {
        step: string;
        unlocked: boolean;
      }[]
    },
    value: {
      required: true,
      type: Number
    },
    title: {
      default: 'Program Setup'
    }
  },
  setup(props, ctx) {
    const vertical = ref(true);
    const expand = ref(true); // open or closed sidebar
    const steps = ref(props.timeline.length); // number of lines
    const { collection } = useDbGetters(['collection']);

    // get publish status of program
    const isPublished = ref(false);
    collection.value!('Program')
      .findOne(
        {
          _id: new ObjectId(ctx.root.$route.params.programId)
        },
        {
          projection: {
            _id: 0,
            published: 1
          }
        }
      )
      .then(res => {
        isPublished.value = res.published;
      })
      .catch(e => {
        // most likely this key doesn't exist in the db
        // TODO: send error report
        console.log(e);
      });

    const activeStep = computed({
      get: () => props.value + 1,
      set: newPage => {
        ctx.emit('input', newPage - 2);
      }
    });
    const actions = ref([
      {
        icon: 'account-group',
        fn: 'my-portfolio'
      },
      {
        icon: 'message-outline',
        fn: 'my-chat'
      },
      {
        icon: 'square-edit-outline',
        fn: 'my-post'
      },
      {
        icon: 'cog',
        fn: 'my-settings'
      }
    ]);
    const sequence = ref({
      Project: {
        icon: '',
        color: 'green',
        submodule: [
          {
            title: 'Launch Day'
          },
          {
            title: 'Cowork'
          },
          {
            title: 'Research & Practice'
          },
          {
            title: 'Ideate'
          },
          {
            title: 'Hack Day'
          },
          {
            title: 'Reflection'
          },
          {
            title: 'Design & Prototype'
          },
          {
            title: 'Package'
          },
          {
            title: 'Demo Day'
          },
          {
            title: 'Finish Lane'
          }
        ]
      },
      Internship: {
        icon: '',
        color: 'purple',
        submodule: [
          {
            title: 'Auto-App'
          },
          {
            title: 'Interviews'
          },
          {
            title: 'Offers'
          }
        ]
      }
    });
    const unlockedStep = computed(() => {
      let whichStep = 0;
      for (let i = props.timeline.length - 1; i > 0; i--) {
        if (props.timeline[i].unlocked) {
          whichStep = i;
          break;
        }
      }
      return whichStep;
    });
    const changePublishStatus = () => {
      collection.value!('Program')
        .findOneAndUpdate(
          {
            _id: new ObjectId(ctx.root.$route.params.programId)
          },
          { $set: { published: !isPublished.value } }
        )
        .then(() => {
          isPublished.value = !isPublished.value;
        });
    };
    return {
      steps,
      expand,
      activeStep,
      sequence,
      actions,
      vertical,
      dialog: ref(false),
      dialog2: ref(false),
      unlockedStep,
      isPublished,
      changePublishStatus
    };
  }
});
</script>

<style scoped lang="scss">
$stepper-step-step-width: 100px;
$stepper-step-step-height: 50px;
.v-application a {
  color: transparent;
}

.program-card {
  // height: 100%;
  // height: 100vh;
}
.v-application--is-ltr .guide-bar .v-stepper--vertical .v-stepper__content {
  margin: -16px -12px -24px 12px;
}
.theme--light.v-stepper
  .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error)
  .v-stepper__step__step {
  // width: 16px;
  // height: 16px;
  // width: 16px;
  // border-radius: 50%;
  // display: inline-block;
  // height: 50%;
  // weight: 50%;
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  font-size: 0.75rem;
  justify-content: center;
  height: 16px;
  min-width: 16px;
  width: 16px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.v-application--is-ltr .v-stepper--vertical .v-stepper__step__step {
  // margin-right: 12px;
}

.theme--light.v-stepper
  .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error)
  .v-stepper__step__step {
  // background: rgba(0, 0, 0, 0.38);
  background: #ffffff !important;
  border: 1px solid #dedede;
  margin-left: 5px;
}

.v-application .green {
  // background-color: #4caf50 !important;
  background-color: #6eba7f !important;
  // background-color: #ffffff !important;
  // border-color: #4caf50 !important;
  border: 1px solid #dedede !important;
  // height: 16px;
  min-width: 16px;
  // width: 16px;
  // margin-left: 5px;
}

.mdi-check::before {
  font-size: 10px;
  font-weight: 900;
}

// .v-stepper__step__step {
//   align-items: center;
//   border-radius: 50%;
//   display: inline-flex;
//   font-size: 0.75rem;
//   justify-content: center;
//   height: 16px;
//   min-width: 16px;
//   width: 16px;
//   transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
// }
.guide-bar {
  // height: fit-content;
  display: flex;
  height: 95vh;
  // background-color: transparent;

  &__cta1 {
    margin-right: auto;
    // text-align: center !important;
    // margin: 10px;
    margin-top: 15px;
    // margin-bottom: 15px;
    // text-align: left !important;
    // margin-left: auto;
    // margin-right: auto;
  }

  &__cta2 {
    margin-bottom: 25px;
    margin-right: auto;
    margin-top: 15px;
  }

  &__cta-button {
    // width: 100%;
    // min-width: 100%;
  }
  &__stepper-content {
    // max-width: 75%;
    height: 95vh;
    // height: fit-content;
  }

  &__timeline-item {
    text-transform: uppercase;
    font-size: 9px;
    color: #939598;
    letter-spacing: 1.5px;
    font-weight: 900;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  &__timeline-item-setup {
    margin-left: 10px;
    margin-right: 10px;
  }
  .v-card.v-sheet {
    display: block;
    -webkit-transition: display 0.35s ease-out;
    transition: display 0.5s ease-in-out;
    height: 100%;
    border-radius: 0;
    box-shadow: none !important;
  }
  .v-stepper {
    box-shadow: none;
    // overflow: visible;
    overflow-x: hidden;
    background-color: transparent !important;
    // width: 80%;

    .v-stepper__step:first-child {
      padding: 0 0 16px 0;
    }
    .v-stepper__step {
      padding: 24px 0 16px 0;
      background-color: transparent !important;
    }
  }
  &__container {
    padding-left: 22px;
    padding-top: 22px;
    padding-bottom: 22px;
    padding-right: 22px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    height: 100vh;
    max-height: 100vh;
    background-color: transparent;
    // border: 1px solid black;
    // border-right: none;
  }
}

.v-stepper__step .v-stepper__step--complete {
  // background-color: transparent;
}
.guide-bar {
  &__container {
    height: 100vh;
    // background-color: transparent !important;
  }
  &__highlight {
    height: 9px;
    width: 90%;
    border-radius: 0 0 5px 5px;
    background-color: #3c9dcd;
    // margin-bottom: 47px;
  }
  &__title {
    max-width: 100%;
    padding-right: 5%;
    display: flex;
    font-family: Raleway;
    font-weight: 800;
    margin-top: 12px;
    margin-bottom: 24px;
    // margin-top: 25px;
    // margin-bottom: 25px;
    font-size: 20px;
    text-align: left !important;
    // align-items: start;
    // justify-content: start;
  }
  &__stepper {
    // display: flex;
    flex: 1 1 auto;
    width: 100%;
    // padding-left: auto !important;
    // padding-right: auto !important;
    // align-items: center !important;
    // align-content: center !important;
    // text-align: center !important;
    // padding-left: 12%;
    // padding-left: auto;
    // padding-right: auto;
    justify-content: center;
    overflow-y: auto;
    // margin-top: 30px;
    background-color: transparent !important;
    &-content {
      width: 100%;
      min-height: webkit-min-content;
      display: flex;
      // padding-left: auto !important;
      // padding-right: auto !important;
      // align-items: center !important;
      // align-content: center !important;
      // text-align: center !important;
      // background-color: transparent !important;
    }
    &-step {
      // background-color: transparent !important;
    }
  }

  &__expand {
    // display: flex;
    // margin-top: auto;
    // margin-bottom: auto;
    height: fit-content;
    // background-color: #000000;
    height: 100vh;
    padding: 12px;
    flex-direction: column;
    display: flex;
    background: #eeeeee;
    // border-right: 1px solid #dedede;
    // flex-direction: column;
    // display: flex;
    // justify-content: end;
    // align-items: end;
    // align-content: end;
    // padding-top: auto;
    // padding-bottom: auto;
    // align-content: center;
    // justify-content: center;
    // border-left: 1px solid black;
    // position: absolute;
  }

  &__expand-icon {
    margin-top: 10px;
    cursor: pointer;
  }

  &__sidebar-icon {
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &__actions {
    width: 90%;

    display: flex;
    justify-content: center;
    // border: 1px dashed #404142;
    background-color: #3c9dcd;
    margin: 10px 10px 10px 10px;
    border-radius: 10px;
    // background-color: #dedede;
    padding: 15px 0 15px 0;
    &-list {
      // flex-direction: row;
      width: 100%;
      max-width: 80%;
      display: flex;
      justify-content: space-around;
      min-width: 200px;
    }
  }
}
</style>
