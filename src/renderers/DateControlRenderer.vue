<template>
  <v-text-field
    type="date"
    variant="outlined"
    :label="`${control.label}${control.required ? ' *' : ''}`"
    outlined
    @change="onChange"
    v-model="control.data"
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
      v-if="hasError({ data: control.data, errors: control.errors })"
    >
      <span class="text-red-accent-3">
        {{ control.errors }}
      </span>
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { ControlElement } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import { defineComponent, markRaw } from "vue";
import { toPlainObject } from "lodash";

const controlRenderer = defineComponent({
  name: "DateControlRenderer",
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
  },
});

export default markRaw(controlRenderer);
</script>