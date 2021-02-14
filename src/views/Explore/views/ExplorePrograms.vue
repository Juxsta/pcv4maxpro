<template>
  <div class="explore-program__entire-body">
    <!-- <div class="explore-program__title text-h3 font-weight-black">Explore Programs</div> -->
    <div class="explore-program__image-card">
      <ImageCard> </ImageCard>
    </div>

    <!-- FILTER STARTS -->

    <v-row justify="center" class="explore-program__filter">
      <!-- FILTER 1 START -->
      <div class="explore-program__filter-buttons">
        <v-dialog scrollable max-width="300px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#a7a9ac" large rounded outlined v-bind="attrs" v-on="on"> Type </v-btn>
          </template>
          <v-card>
            <v-card-title>Select Country</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px">
              <v-radio-group v-model="dialogm1" column>
                <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                <v-radio label="Bahrain" value="bahrain"></v-radio>
                <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                <v-radio label="Barbados" value="barbados"></v-radio>
                <v-radio label="Belarus" value="belarus"></v-radio>
                <v-radio label="Belgium" value="belgium"></v-radio>
                <v-radio label="Belize" value="belize"></v-radio>
                <v-radio label="Benin" value="benin"></v-radio>
                <v-radio label="Bhutan" value="bhutan"></v-radio>
                <v-radio label="Bolivia" value="bolivia"></v-radio>
                <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
                <v-radio label="Botswana" value="botswana"></v-radio>
                <v-radio label="Brazil" value="brazil"></v-radio>
                <v-radio label="Brunei" value="brunei"></v-radio>
                <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                <v-radio label="Burkina Faso" value="burkina"></v-radio>
                <v-radio label="Burma" value="burma"></v-radio>
                <v-radio label="Burundi" value="burundi"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <!-- FILTER 1 END -->

      <!-- FILTER 2 START -->
      <div class="explore-program__filter-buttons">
        <v-dialog v-model="dialog" scrollable max-width="300px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#a7a9ac" large rounded outlined v-bind="attrs" v-on="on">
              Location
            </v-btn>
          </template>
          <v-card>
            <v-card-title>Select Country</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px">
              <v-radio-group v-model="dialogm1" column>
                <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                <v-radio label="Bahrain" value="bahrain"></v-radio>
                <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                <v-radio label="Barbados" value="barbados"></v-radio>
                <v-radio label="Belarus" value="belarus"></v-radio>
                <v-radio label="Belgium" value="belgium"></v-radio>
                <v-radio label="Belize" value="belize"></v-radio>
                <v-radio label="Benin" value="benin"></v-radio>
                <v-radio label="Bhutan" value="bhutan"></v-radio>
                <v-radio label="Bolivia" value="bolivia"></v-radio>
                <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
                <v-radio label="Botswana" value="botswana"></v-radio>
                <v-radio label="Brazil" value="brazil"></v-radio>
                <v-radio label="Brunei" value="brunei"></v-radio>
                <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                <v-radio label="Burkina Faso" value="burkina"></v-radio>
                <v-radio label="Burma" value="burma"></v-radio>
                <v-radio label="Burundi" value="burundi"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <!-- FILTER 2 END -->

      <!-- FILTER 3 START -->
      <div class="explore-program__filter-buttons">
        <v-dialog v-model="dialog" scrollable max-width="300px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#a7a9ac" large rounded outlined v-bind="attrs" v-on="on"> Age </v-btn>
          </template>
          <v-card>
            <v-card-title>Select Country</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px">
              <v-radio-group v-model="dialogm1" column>
                <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                <v-radio label="Bahrain" value="bahrain"></v-radio>
                <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                <v-radio label="Barbados" value="barbados"></v-radio>
                <v-radio label="Belarus" value="belarus"></v-radio>
                <v-radio label="Belgium" value="belgium"></v-radio>
                <v-radio label="Belize" value="belize"></v-radio>
                <v-radio label="Benin" value="benin"></v-radio>
                <v-radio label="Bhutan" value="bhutan"></v-radio>
                <v-radio label="Bolivia" value="bolivia"></v-radio>
                <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
                <v-radio label="Botswana" value="botswana"></v-radio>
                <v-radio label="Brazil" value="brazil"></v-radio>
                <v-radio label="Brunei" value="brunei"></v-radio>
                <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                <v-radio label="Burkina Faso" value="burkina"></v-radio>
                <v-radio label="Burma" value="burma"></v-radio>
                <v-radio label="Burundi" value="burundi"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <!-- FILTER 3 END -->

      <!-- FILTER 4 START -->
      <div class="explore-program__filter-buttons">
        <v-dialog v-model="dialog" scrollable max-width="300px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#a7a9ac" large rounded outlined v-bind="attrs" v-on="on">
              Interests
            </v-btn>
          </template>
          <v-card>
            <v-card-title>Select Country</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px">
              <v-radio-group v-model="dialogm1" column>
                <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                <v-radio label="Bahrain" value="bahrain"></v-radio>
                <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                <v-radio label="Barbados" value="barbados"></v-radio>
                <v-radio label="Belarus" value="belarus"></v-radio>
                <v-radio label="Belgium" value="belgium"></v-radio>
                <v-radio label="Belize" value="belize"></v-radio>
                <v-radio label="Benin" value="benin"></v-radio>
                <v-radio label="Bhutan" value="bhutan"></v-radio>
                <v-radio label="Bolivia" value="bolivia"></v-radio>
                <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
                <v-radio label="Botswana" value="botswana"></v-radio>
                <v-radio label="Brazil" value="brazil"></v-radio>
                <v-radio label="Brunei" value="brunei"></v-radio>
                <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                <v-radio label="Burkina Faso" value="burkina"></v-radio>
                <v-radio label="Burma" value="burma"></v-radio>
                <v-radio label="Burundi" value="burundi"></v-radio>
              </v-radio-group>
            </v-card-text> 
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <!-- FILTER 4 END -->
    </v-row>

    <!-- FILTER ENDS -->

    <div class="explore-program__explore-card">
      <explore-card v-for="item in items" :key="item.title"></explore-card>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { ImageCard, ExploreCard } from '../components';

export default {
  name: 'ExploreProgram',
  components: {
    ImageCard,
    ExploreCard
  },
  setup() {
    const items = ref([
      { title: 'Detail', image: 'https://picsum.photos/510/300?random' },
      { title: 'Manage', image: 'https://picsum.photos/510/300?random' },
      { title: 'Participant', image: 'https://picsum.photos/510/300?random' },
      { title: 'Detail', image: 'https://picsum.photos/510/300?random' },
      { title: 'Manage', image: 'https://picsum.photos/510/300?random' },
      { title: 'Participant', image: 'https://picsum.photos/510/300?random' }
    ]);
    return { items };
  }
};
</script>

<style lang="scss">
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
    grid-template-columns: repeat(3, 375px);
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
</style>
