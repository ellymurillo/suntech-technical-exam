<template>
  <v-card class="pl-8 pr-8 pb-8">
    <template v-slot:title>
      <div class="mb-5 text-h5 text-uppercase">Profile Information</div>
    </template>

    <div class="text-left">
      <v-row class="name-detail-container">
        <v-col>
          <label class="font-weight-bold">Name: </label>
          <span>{{ `${getFirstName || ""} ${getLastName || ""}` }}</span>
        </v-col>
      </v-row>

      <v-row class="birthday-detail-container">
        <v-col>
          <label class="font-weight-bold">Birthday: </label>
          <span>{{ formatDate(getBirthday) || "" }}</span>
        </v-col>
      </v-row>

      <v-row class="email-detail-container">
        <v-col>
          <label class="font-weight-bold">Email: </label>
          <span>{{ getEmail || "" }}</span>
        </v-col>
      </v-row>

      <v-row class="age-detail-container">
        <v-col>
          <label class="font-weight-bold">Age: </label>
          <span>{{ getAge || "" }}</span>
        </v-col>
      </v-row>

      <v-row class="otherinfo-detail-container">
        <v-col>
          <label class="font-weight-bold">Other Info: </label>
          <div
            class="info-container"
            v-html="`${renderWithBreaks(getOtherInfo)}`"
          ></div>
        </v-col>
      </v-row>
    </div>

    <v-row class="text-right mt-5">
      <v-col>
        <v-btn
          class="mr-2 edit-btn"
          @click="router.push('/edit')"
          flat
          :disabled="disableEdit"
          >Edit</v-btn
        >
        <v-btn color="primary" class="newentry-btn" @click="onNewEntry"
          >New Entry</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import stores from "@/stores";

import { renderWithBreaks, formatDate } from "@/composables";

const {
  getFirstName,
  getLastName,
  getBirthday,
  getEmail,
  getAge,
  getOtherInfo,
  $reset,
} = stores();
const router = useRouter();

const disableEdit =
  !getFirstName.value ||
  !getLastName.value ||
  !getBirthday.value ||
  !getEmail.value;

const onNewEntry = () => {
  $reset();
  router.push("/");
};
</script>

<style scoped>
.info-container {
  height: 146px;
  overflow-y: auto;
  margin-top: 10px;
}
</style>
