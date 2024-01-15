<template>
  <v-card class="pl-8 pr-8 pb-8">
    <template v-slot:title>
      <div class="mb-5 text-h5 text-uppercase">Profile Information</div>
    </template>

    <div class="text-left">
      <v-row>
        <v-col>
          <label class="font-weight-bold">Name: </label>
          <span>{{ `${getFirstName || ""} ${getLastName || ""}` }}</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <label class="font-weight-bold">Birthday: </label>
          <span>{{ formatDate(getBirthday) || "" }}</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <label class="font-weight-bold">Email: </label>
          <span>{{ getEmail || "" }}</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <label class="font-weight-bold">Age: </label>
          <span>{{ getAge || "" }}</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <label class="font-weight-bold">Other Info: </label>
          <div
            class="info-container"
            v-html="`${formatString(getOtherInfo)}`"
          ></div>
        </v-col>
      </v-row>
    </div>

    <v-row class="text-right mt-5">
      <v-col>
        <v-btn
          class="mr-2"
          @click="router.push('/edit')"
          flat
          :disabled="disableEdit"
          >Edit</v-btn
        >
        <v-btn color="primary" @click="onNewEntry">New Entry</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import moment from "moment";

import stores from "@/stores";

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

const formatString = (value: string | undefined) => {
  return value ? value.replace(/(\r\n|\r|\n)/g, "<br />") : "";
};

const onNewEntry = () => {
  $reset();
  router.push("/");
};

const formatDate = (date: string | undefined) => {
  return date ? moment(date).format("MM/DD/YYYY") : "";
};
</script>

<style scoped>
.info-container {
  height: 146px;
  overflow-y: auto;
  margin-top: 10px;
}
</style>
