<template>
  <div class="guide-bar">
    <!-- <div class="guide-bar__expand" @click="expand = !expand">
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

      <div>
        <v-tooltip right color="black">
          <template v-slot:activator="{ on, attrs }"
            ><v-icon v-bind="attrs" color="#404142" class="guide-bar__sidebar-icon" v-on="on"
              >mdi-bell-outline</v-icon
            >
          </template>
          <span>Notifications </span>
        </v-tooltip>
      </div>

      <v-divider />
      <div>
        <v-tooltip right color="black">
          <template v-slot:activator="{ on, attrs }"
            ><v-icon v-bind="attrs" color="blue" class="guide-bar__sidebar-icon" v-on="on"
              >mdi-monitor-dashboard</v-icon
            >
          </template>
          <span>Monitor Program</span>
        </v-tooltip>
      </div>

      <v-divider />

      <div>
        <v-tooltip right color="black">
          <template v-slot:activator="{ on, attrs }"
            ><v-icon v-bind="attrs" color="#404142" class="guide-bar__sidebar-icon" v-on="on"
              >mdi-fingerprint</v-icon
            >
          </template>
          <span>My Portfolio</span>
        </v-tooltip>
      </div>

      <div>
        <v-tooltip right color="black">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" color="#404142" class="guide-bar__sidebar-icon" v-on="on"
              >mdi-telegram</v-icon
            >
          </template>
          <span>Explore Programs</span>
        </v-tooltip>
      </div>
    </div> -->
    <v-card class="program-card">
      <v-expand-x-transition>
        <div v-show="expand" class="guide-bar__container">
          <v-list class="guide-bar__list">
            <div class="guide-bar__monitor-participants-title">
              <v-icon large color="black">mdi-telegram</v-icon>
              Explore Programs
            </div>

            <v-container fluid>
              <div class="">
                <v-icon class="mt-1 mb-1" x-small color="black" dark depressed>mdi-gear</v-icon>
                <v-btn class="mt-1 mb-1" x-small color="black" dark depressed
                  >PilotCity Flagship Program</v-btn
                >
              </div>

              <v-combobox
                v-model="model2"
                :filter="filter"
                :hide-no-data="!search"
                :items="items"
                :search-input.sync="search"
                hide-selected
                label="Filter by programs"
                multiple
                small-chips
                hide-details
                solo
                outlined
                class="guide-bar__combobox mt-4 mb-4"
              >
                <template v-slot:selection="{ attrs, item, parent, selected }">
                  <v-chip
                    v-if="item === Object(item)"
                    v-bind="attrs"
                    :color="`${item.color} lighten-2`"
                    :input-value="selected"
                    label
                    small
                    dark
                  >
                    <span class="pr-2">
                      {{ item.text }}
                    </span>
                    <v-icon small @click="parent.selectItem(item)"> mdi-close </v-icon>
                  </v-chip>
                </template>

                <template v-slot:item="{ index, item }">
                  <v-text-field
                    v-if="editing === item"
                    v-model="editing.text"
                    autofocus
                    flat
                    background-color="transparent"
                    hide-details
                    solo
                    @keyup.enter="edit(index, item)"
                  ></v-text-field>
                  <v-chip v-else :color="`${item.color} lighten-2`" dark label small>
                    {{ item.text }}
                  </v-chip>
                  <v-spacer></v-spacer>
                </template>
              </v-combobox>
              <div class="">
                <template>
                  <div class="">
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn class="mt-1 mb-1" x-small outlined depressed v-bind="attrs" v-on="on"
                          >Sort</v-btn
                        >
                      </template>
                      <v-list>
                        <v-list-item v-for="(item, index) in sortitems" :key="index" link small>
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <v-btn class="mt-1 mb-1 ml-2" color="green" x-small outlined depressed
                      >By Progress<v-icon small right dark> mdi-close</v-icon></v-btn
                    >
                  </div>
                </template>
              </div>
            </v-container>

            <!-- <v-list-group
              v-for="item in items2"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item class="guide-bar__list-item-title">
                  <v-list-item-avatar size="36">
                    <v-img
                      src="https://media-exp1.licdn.com/dms/image/C5603AQEq9BL9NuOBAQ/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=XLeDuOV5B9rNOG4CrSQLh1sKeftfzBUwHd3M-y_CRKM"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      class="guide-bar__list-item-title"
                      v-text="item.title"
                    ></v-list-item-title
                    ><v-progress-linear color="green" class="mt-2" value="50"></v-progress-linear>
                  </v-list-item-content>
                </v-list-item>
              </template>

              <div v-for="child in item.items" :key="child.title" class="guide-bar__sub">
                <v-chip-group
                  ><v-chip
                    x-small
                    disabled
                    label
                    color="black"
                    outlined
                    v-text="child.title"
                  ></v-chip
                ></v-chip-group>
              </div>
            </v-list-group> -->
          </v-list>
        </div>
      </v-expand-x-transition>
    </v-card>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from '@vue/composition-api';

export default {
  name: 'Bar',

  data: () => ({
    activator: null,
    attach: null,
    colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
    editing: null,
    editingIndex: -1,
    sortitems: [
      { title: 'School' },
      { title: 'Grade' },
      { title: 'Team' },
      { title: 'Completion' }
    ],
    items2: [
      {
        items: [
          { title: 'Irvington High School' },
          { title: '9th Grade' },
          { title: 'City of Fremont' }
        ],
        title: 'Prajit Saravanan'
      },
      {
        items: [{ title: 'Arroyo High School' }, { title: '12th Grade' }, { title: 'Team Drones' }],
        title: 'Eric Reyes'
      },
      {
        items: [
          { title: 'Irvington High School' },
          { title: '12th Grade' },
          { title: 'City of Fremont' }
        ],
        title: 'Akheel Shaik'
      },
      {
        items: [{ title: 'Hillsdale High School' }, { title: '10th Grade' }, { title: 'Typeform' }],
        title: 'Noah MacLean'
      },
      {
        items: [
          { title: 'Irvington High School' },
          { title: '12th Grade' },
          { title: 'Kaiser Permanente' }
        ],
        title: 'Eric Xie'
      },
      {
        items: [
          { title: 'Washington High School' },
          { title: '11th Grade' },
          { title: 'Strategy of Things' }
        ],
        title: 'Maya Campos'
      },
      {
        items: [
          { title: 'Irvington High School' },
          { title: '9th Grade' },
          { title: 'City of Fremont' }
        ],
        title: 'Prajit Saravanan'
      },
      {
        items: [{ title: 'Arroyo High School' }, { title: '12th Grade' }, { title: 'Team Drones' }],
        title: 'Eric Reyes'
      },
      {
        items: [
          { title: 'Irvington High School' },
          { title: '12th Grade' },
          { title: 'City of Fremont' }
        ],
        title: 'Akheel Shaik'
      },
      {
        items: [{ title: 'Hillsdale High School' }, { title: '10th Grade' }, { title: 'Typeform' }],
        title: 'Noah MacLean'
      },
      {
        items: [
          { title: 'Irvington High School' },
          { title: '12th Grade' },
          { title: 'Kaiser Permanente' }
        ],
        title: 'Eric Xie'
      },
      {
        items: [
          { title: 'Washington High School' },
          { title: '11th Grade' },
          { title: 'Strategy of Things' }
        ],
        title: 'Maya Campos'
      },
      {
        items: [
          { title: 'Irvington High School' },
          { title: '9th Grade' },
          { title: 'City of Fremont' }
        ],
        title: 'Prajit Saravanan'
      },
      {
        items: [{ title: 'Arroyo High School' }, { title: '12th Grade' }, { title: 'Team Drones' }],
        title: 'Eric Reyes'
      },
      {
        items: [
          { title: 'Irvington High School' },
          { title: '12th Grade' },
          { title: 'City of Fremont' }
        ],
        title: 'Akheel Shaik'
      },
      {
        items: [{ title: 'Hillsdale High School' }, { title: '10th Grade' }, { title: 'Typeform' }],
        title: 'Noah MacLean'
      },
      {
        items: [
          { title: 'Irvington High School' },
          { title: '12th Grade' },
          { title: 'Kaiser Permanente' }
        ],
        title: 'Eric Xie'
      },
      {
        items: [
          { title: 'Washington High School' },
          { title: '11th Grade' },
          { title: 'Strategy of Things' }
        ],
        title: 'Maya Campos'
      }
    ],

    model2: [
      {
        text: 'All Programs',
        color: 'blue'
      }
    ],

    items: [
      // { header: 'Filter by programs' },
      {
        text: 'All Programs',
        color: 'blue'
      },
      {
        text: 'Lawrence Berkeley National Laboratory',
        color: 'blue'
      },
      {
        text: 'Alan AI',
        color: 'indigo'
      },
      {
        text: 'Office of Congresswoman Barbara Lee',
        color: 'teal'
      },
      {
        text: 'Kaiser Permanente',
        color: 'orange'
      },
      {
        text: 'Typeform',
        color: 'cyan'
      }
    ],
    nonce: 1,
    menu: false,
    model: [
      // {
      //   text: 'Foo',
      //   color: 'blue'
      // }
    ],
    x: 0,
    search: null,
    y: 0
  }),

  // watch: {
  //   model(val, prev) {
  //     if (val.length === prev.length) return;

  //     this.model = val.map(v => {
  //       if (typeof v === 'string') {
  //         v = {
  //           text: v,
  //           color: this.colors[this.nonce - 1]
  //         };

  //         this.items.push(v);

  //         this.nonce++;
  //       }

  //       return v;
  //     });
  //   }
  // },

  methods: {
    edit(index, item) {
      if (!this.editing) {
        this.editing = item;
        this.editingIndex = index;
      } else {
        this.editing = null;
        this.editingIndex = -1;
      }
    },
    filter(item, queryText, itemText) {
      if (item.header) return false;

      const hasValue = val => (val != null ? val : '');

      const text = hasValue(itemText);
      const query = hasValue(queryText);

      return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
    }
  },

  setup() {
    function logThis(val: string) {
      console.log(val);
    }
    const vertical = ref(true);
    const expand = ref(true); // open or closed sidebar
    const steps = ref(15); // number of lines
    const activeStep = ref(1); // open line
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
    return { steps, expand, activeStep, sequence, actions, logThis, vertical };
  }
};
</script>

<style lang="scss">
$stepper-step-step-width: 100px;
$stepper-step-step-height: 50px;

.program-card {
  // height: 100%;
  // height: 100vh;
  // width: 25vw;
  max-width: 25vw;
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
  height: 16px;
  min-width: 16px;
  width: 16px;
  margin-left: 5px;
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

.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
}

.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding: 10px !important;
}

.v-list-item__content {
  display: inline !important;
}

.v-application .green {
  margin-left: 0px;
}

.guide-bar {
  // height: fit-content;
  display: flex;
  height: 95vh;
  // background-color: transparent;
  &__monitor-participants-title {
    font-family: Raleway;
    font-size: 28px;
    font-weight: 800;
    padding: 12px;
  }
  &__combobox {
  }

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
    // padding: 22px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    max-height: 100vh;
    background-color: transparent;
    border-right: 1px solid #dedede;
    // border-right: none;
  }

  &__list-item {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 700;
    // letter-spacing: 2px !important;
    // text-transform: uppercase;
  }

  &__list-item-title {
    font-family: Raleway;
    font-weight: 700;
    // letter-spacing: 2px !important;
    // text-transform: uppercase;
    font-size: 14px !important;
    padding: 0px !important;
  }

  &__sortable-chip {
    // width: 20px !important;
  }

  &__list {
    width: 24vw;
    overflow-y: auto;
  }
}

.v-stepper__step .v-stepper__step--complete {
  // background-color: transparent;
}
.guide-bar {
  &__sub {
    padding-left: 67px;
  }
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
    margin-bottom: 12px;
    // margin-top: 25px;
    // margin-bottom: 25px;
    font-size: 18px;
    text-align: left !important;
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
