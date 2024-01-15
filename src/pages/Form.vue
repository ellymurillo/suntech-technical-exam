<template>
  <v-card class="pl-8 pr-8 pb-8">
    <template v-slot:title>
      <div class="mb-5 text-h5 text-uppercase">
        {{ isEdit ? "Edit" : "" }} Profile Info
      </div>
    </template>

    <JSONForm
      :data="data"
      :schema="Schema"
      :uiSchema="UISchema"
      :validation="formValidator"
      @onChange="onChange"
    />
  </v-card>
</template>

<script setup lang="ts">
import moment from "moment";
import { ref } from "vue";
import { onBeforeRouteLeave, useRouter, useRoute } from "vue-router";

import store from "@/stores";

import Person from "@/interfaces/Person";

import Schema from "@/schemas/Schema";
import UISchema from "@/schemas/UISchema";

import { formValidator, emitter } from "@/composables";

const {
  setFirstName,
  setLastName,
  setAge,
  setBirthday,
  setEmail,
  setOtherInfo,
  getFirstName,
  getLastName,
  getAge,
  getBirthday,
  getEmail,
  getOtherInfo,
} = store();
const router = useRouter();
const currentRoute = useRoute();

const data = ref<Person>({
  firstName: getFirstName.value || "",
  lastName: getLastName.value || "",
  email: getEmail.value || "",
  birthday: getBirthday.value || "",
  age: getAge.value || 0,
  otherInfo: getOtherInfo.value || "",
});

const formData = ref<Person>({
  firstName: getFirstName.value || "",
  lastName: getLastName.value || "",
  email: getEmail.value || "",
  birthday: getBirthday.value || "",
  age: getAge.value || 0,
  otherInfo: getOtherInfo.value || "",
});

const isEdit = currentRoute.name === "edit";

const onChange = (value: any) => {
  data.value = value;
  formData.value = value;

  const age = value.birthday?.length ? calculateAge(value.birthday) : 0;

  formData.value.age = age;
  data.value.age = age;
};

const calculateAge = (birthday: string) => {
  const theDate = moment();
  const theBirthDate = moment(new Date(birthday));
  return theDate.diff(theBirthDate, "years");
};

formValidator(
  "ageRange",
  ({ min, max }, age) => calculateAge(age) >= min && calculateAge(age) <= max
);

emitter.on("onSubmit", () => {
  setFirstName(formData.value.firstName || "");
  setLastName(formData.value.lastName || "");
  setEmail(formData.value.email || "");
  setBirthday(formData.value.birthday || "");
  setAge(formData.value.age || 0);
  setOtherInfo(formData.value.otherInfo || "");

  router.push("/details");
});

onBeforeRouteLeave(() => {
  emitter.all.clear();
});
</script>
