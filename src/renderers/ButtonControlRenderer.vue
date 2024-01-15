<template>
  <div class="text-right">
    <v-btn :disabled="!control.enabled" color="primary" @click="onSubmit"
      >Next</v-btn
    >
  </div>
</template>

<script lang="ts">
import { ControlElement } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import { defineComponent, markRaw } from "vue";

import { emitter } from "@/composables";

const controlRenderer = defineComponent({
  name: "ButtonControlRenderer",
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props) {
    return useJsonFormsControl(props);
  },
  methods: {
    onSubmit() {
      emitter.emit("onSubmit");
    },
  },
});

export default markRaw(controlRenderer);
</script>
