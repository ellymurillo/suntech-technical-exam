<template>
  <div class="form-wrapper">
    <json-forms
      :data="newData"
      :renderers="renderers"
      :schema="schema"
      :uischema="uiSchema"
      @change="onChange"
      :ajv="ajv"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { JsonForms, JsonFormsChangeEvent } from "@jsonforms/vue";
import { vanillaRenderers } from "@jsonforms/vue-vanilla";

import {
  isControl,
  isLayout,
  isDateControl,
  isObjectControl,
  isMultiLineControl,
  JsonSchema,
  UISchemaElement,
} from "@jsonforms/core";

import StringControlRenderer from "@/renderers/StringControlRenderer.vue";
import LayoutRenderer from "@/renderers/LayoutRenderer.vue";
import DateControlRenderer from "@/renderers/DateControlRenderer.vue";
import ButtonControlRenderer from "@/renderers/ButtonControlRenderer.vue";
import TextAreaControlRenderer from "@/renderers/TextAreaControlRenderer.vue";

import { testRenderer, ajv } from "@/composables";

import PersonInterface from "@/interfaces/Person";

let { data } = defineProps<{
  data: PersonInterface;
  schema: JsonSchema;
  uiSchema: UISchemaElement;
  validation: Function;
}>();

let newData = ref(data);

const emit = defineEmits<{
  (e: "onChange", value: any): void;
}>();

const controlRenderers = [
  {
    renderer: StringControlRenderer,
    type: isControl,
  },
  {
    renderer: TextAreaControlRenderer,
    type: isMultiLineControl,
    rank: 3,
  },
  {
    renderer: LayoutRenderer,
    type: isLayout,
  },
  {
    renderer: DateControlRenderer,
    type: isDateControl,
    rank: 3,
  },
  {
    renderer: ButtonControlRenderer,
    type: isObjectControl,
    rank: 3,
  },
];

const renderers = [
  ...vanillaRenderers,
  ...controlRenderers.map((item) => {
    const { renderer, type, rank } = item;

    return testRenderer(renderer, type, rank || 0);
  }),
];

const onChange = (event: JsonFormsChangeEvent) => {
  emit("onChange", event.data);
};
</script>
