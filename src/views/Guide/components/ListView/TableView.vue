<template>
  <div class="monitor__activities">
    <v-data-table
      dense
      :headers="header"
      :items="filteredActivities"
      sort-by="resource"
      :items-per-page="100"
      :hide-default-footer="true"
    >
      <template v-slot:item.click>
        <v-btn outlined depressed x-small :ripple="false">Monitor Activity</v-btn>
      </template>

      <template v-slot:item.progress>
        <v-progress-linear color="green" value="90"></v-progress-linear>
      </template>

      <template v-slot:item.status="{ item }">
        <v-icon v-if="item.completion === 100" color="green" dark
          >mdi-checkbox-marked-circle</v-icon
        >
        <v-icon v-if="item.completion === 0" color="orange" dark>mdi-alert-circle</v-icon>
        <v-icon v-if="item.completion === -1" color="grey" dark>mdi-close-circle</v-icon>
      </template>

      <template v-slot:item.type>
        <!-- <v-chip color="red darken-4" dark small label disabled>Activity</v-chip> -->
        <v-chip color="purple darken-4" dark outlined small disabled>Deliverable</v-chip>
        <!-- <v-chip color="orange darken-4" dark small label disabled>Tool</v-chip> -->
      </template>

      <template v-slot:item.group>
        <v-chip color="blue darken-4" dark x-small label disabled>Research</v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import { items, HEADER } from './const';

export default defineComponent({
  name: 'TableView',
  props: {
    activityFilter: {
      required: true,
      type: Object
    }
  },
  setup(props) {
    const filteredActivities = computed(() => {
      if (!props.activityFilter) return items;
      const index = items.findIndex(item => item.activity === props.activityFilter.text) + 1;
      return items.slice(0, index >= 0 ? index : items.length - 1);
    });
    return { header: ref(HEADER), items, filteredActivities };
  }
});
</script>

<style lang="scss">
.monitor {
  &__activities {
    width: 100%;
  }
}
</style>
