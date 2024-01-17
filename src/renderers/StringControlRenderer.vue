<template>
  <v-text-field
    :testId="formatTestId(control.label)"
    v-if="control.visible"
    variant="outlined"
    :label="`${control.label}${control.required ? ' *' : ''}`"
    outlined
    @change="onChange"
    :model-value="control.data"
    :color="
      hasError({
        data: control.data,
        errors: control.errors,
      })
        ? 'red-accent-3'
        : ''
    "
    :tabindex="getTabIndex()"
  >
    <template
      v-slot:details
      v-if="
        hasError({
          data: control.data,
          errors: control.errors,
        })
      "
    >
      <span
        class="text-red-accent-3"
        :testId="formatTestId(`${control.label} error`)"
      >
        {{ control.errors }}
      </span>
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { ControlElement } from "@jsonforms/core";
import { defineComponent, markRaw } from "vue";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import { toPlainObject } from "lodash";

import { strToCamelCase } from "@/composables";

const controlRenderer = defineComponent({
  name: "StringControlRenderer",
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props) {
    return useJsonFormsControl(props);
  },
  methods: {
    onChange(event: Event) {
      this.handleChange(
        this.control.path,
        (event.target as HTMLInputElement).value
      );
    },
    hasError({ data, errors }: { data: any; errors: string }) {
      return data?.length && errors;
    },
    getTabIndex() {
      return toPlainObject(this.control.uischema)?.tabIndex || 0;
    },
    formatTestId(value: string | undefined) {
      return strToCamelCase(value);
    },
  },
});

export default markRaw(controlRenderer);
</script>
