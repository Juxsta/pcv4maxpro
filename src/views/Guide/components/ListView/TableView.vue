<template>
  <v-container class="explore-program__explore-card">
    <v-card hover class="explore-card__card">
      <div class="pl-5 pt-5 pr-5">
        <v-avatar size="50">
          <v-img
            src="https://specials-images.forbesimg.com/imageserve/5e4830a66895e00006834fdd/960x0.jpg?fit=scale"
          ></v-img>
        </v-avatar>
      </div>
      <div class="explore-card__employer-title-red">Artemys Foods</div>
      <v-card flat tile color="#ff6666">
        <div class="explore-card__text-background">
          Help a biotech startup interview, evaluate & understand attitudes towards cell-based meats
          by determining age, demographics & reasons consumers would choose it over animal-based
          meats
        </div>
      </v-card>
      <v-list-item class="justify-end">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Love</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-bookmark</v-icon>
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
          >1 Token</v-btn
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

    <v-card hover class="explore-card__card">
      <div class="pl-5 pt-5 pr-5">
        <v-avatar size="50">
          <v-img
            src="http://ifnk2kzc2lrg7y02yhzokml4-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/Diverse-detection-outputs_Picterra_01.jpg"
          ></v-img>
        </v-avatar>
      </div>
      <div class="explore-card__employer-title-purple">Picterra</div>

      <v-card flat tile color="#ae92b0">
        <div class="explore-card__text-background">
          Use the Picterra platform to develop a machine learning based solution that uses aerial,
          satellite or drone imagery to support the Climate Action Plan of your city, county or
          region
        </div>
      </v-card>
      <v-list-item class="justify-end">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Love</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-bookmark</v-icon>
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
          >1 Token</v-btn
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

    <v-card hover class="explore-card__card">
      <div class="pl-5 pt-5 pr-5">
        <v-avatar size="50">
          <v-img src="https://sociable.co/wp-content/uploads/2019/01/MainPhone-750x450.png"></v-img>
        </v-avatar>
      </div>
      <div class="explore-card__employer-title-orange">Cognixion</div>

      <v-card flat tile color="#f79961">
        <div class="explore-card__text-background">
          Assist in the development of a high-tech communication system for people with
          disabilities. We need students to record their own communications and aid with design so
          those who do not have the privilege to speak can be better connected with their culture
          and community.
        </div>
      </v-card>

      <v-list-item class="justify-end">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Love</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-bookmark</v-icon>
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
          >1 Token</v-btn
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

    <v-card hover class="explore-card__card">
      <div class="pl-5 pt-5 pr-5">
        <v-avatar size="50">
          <v-img
            src="https://www.civicbusinessjournal.com/wp-content/uploads/2018/02/San-Leandro-Seal.jpg"
          ></v-img>
        </v-avatar>
      </div>

      <div class="explore-card__employer-title-blue">Mayor Pauline Cutter</div>

      <v-card flat tile color="#3ea7d9">
        <div class="explore-card__text-background">
          Innovate access to the Mayor of San Leandro by utilizing VideoAsk.com, a face-to-face
          video interaction app, to improve the dialogue, relationships & communications with
          constituents of the city
        </div>
      </v-card>

      <v-list-item class="justify-end">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Love</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-bookmark</v-icon>
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
          >1 Token</v-btn
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
    <v-card hover class="explore-card__card">
      <div class="pl-5 pt-5 pr-5">
        <v-avatar size="50">
          <v-img
            src="https://cnet1.cbsistatic.com/img/N_2AKaW9QFaEPiALqhMarCDx_Sg=/1200x675/2019/08/27/8f91f34c-927f-4056-90b4-25f9d5a9df7d/uber-logo-map-1.jpg"
          ></v-img>
        </v-avatar>
      </div>

      <div class="explore-card__employer-title-green">Uber</div>

      <v-card flat tile color="#6fc284">
        <div class="explore-card__text-background">
          Design and code a copywriting assistant with natural language processing to optimize Uber
          localization efforts in customer support, marketing and product
        </div>
      </v-card>

      <v-list-item class="justify-end">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Love</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-bookmark</v-icon>
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
          >1 Token</v-btn
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

    <v-card hover class="explore-card__card">
      <div class="pl-5 pt-5 pr-5">
        <v-avatar size="50">
          <v-img
            src="https://cdn.shopify.com/s/files/1/0098/1362/2848/products/Litterati_2048x.jpg?v=1582885474"
          ></v-img>
        </v-avatar>
      </div>

      <div class="explore-card__employer-title-pink">Litterati</div>

      <v-card flat tile color="#eda1bf">
        <div class="explore-card__text-background">
          Stop litter at its source by using the Litterati app to document brands, materials &
          objects of litter to inspire local leaders to make better-informed decisions & investments
          towards a clean, litter-free city
        </div>
      </v-card>

      <v-list-item class="justify-end">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Love</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-bookmark</v-icon>
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
          >1 Token</v-btn
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

    <v-card hover class="explore-card__card">
      <div class="pl-5 pt-5 pr-5">
        <v-avatar size="50">
          <v-img
            src="https://i.pinimg.com/236x/66/17/a6/6617a670ba0ed929c38ea5297f723879.jpg"
          ></v-img>
        </v-avatar>
      </div>

      <div class="explore-card__employer-title-yellow">Purely Drinks</div>

      <v-card flat tile color="#fdd35a">
        <div class="explore-card__text-background">
          Produce a viral (and even comedic) 30-second video marketing the variety of ways Purely
          Drinks can be used in daily diets to better brand vinegar-based beverages to opportunity
          markets (Signup for Feb 26th launch now)
        </div>
      </v-card>

      <v-list-item class="justify-end">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Love</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-bookmark</v-icon>
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
          >1 Token</v-btn
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

    <v-card hover class="explore-card__card">
      <div class="pl-5 pt-5 pr-5">
        <v-avatar size="50">
          <v-img
            src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5f5ab9ce1f1a5e0001389958/picture"
          ></v-img>
        </v-avatar>
      </div>

      <div class="explore-card__employer-title-red">Typeform</div>

      <v-card flat tile color="#ff6666">
        <div class="explore-card__text-background">
          Transform the way your favorite local businesses interact with their customers in a
          post-pandemic society by utilizing VideoAsk.com to prototype face-to-face video
          experiences
        </div>
      </v-card>

      <v-list-item class="justify-end">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Love</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-bookmark</v-icon>
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
          >1 Token</v-btn
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
  </v-container>
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
    // flex-direction: row;
    display: grid;
    grid-template-columns: repeat(3, 325px);
    // grid-template-rows: repeat(3, 325px);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    justify-content: center;
    align-items: center;
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
  &__employer-title-red {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #ff6666;
    letter-spacing: 0.0125em;
    padding: 15px;
  }
  &__text-background {
    font-family: Raleway;
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.02em;
    padding: 30px;
  }

  &__employer-title-green {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #6fc284;
    letter-spacing: 0.0125em;
    padding: 15px;
  }

  &__employer-title-blue {
    font-family: Raleway;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: #3ea7d9;
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
    color: #fdd35a;
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
      height: fit-content;
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
