<template>
  <v-row class="layout-wrapper">
    <v-col
      v-for="(element, index) in elements()"
      :key="`${layout.path}-${index}`"
      :cols="`${element.type == 'HorizontalLayout' ? 6 : 12}`"
    >
      <dispatch-renderer
        :schema="layout.schema"
        :uischema="element"
        :path="layout.path"
        :enabled="layout.enabled"
        :renderers="layout.renderers"
        :cells="layout.cells"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Layout } from "@jsonforms/core";
import { defineComponent, markRaw } from "vue";
import {
  DispatchRenderer,
  rendererProps,
  useJsonFormsLayout,
} from "@jsonforms/vue";
import { toPlainObject } from "lodash";

const layoutRenderer = defineComponent({
  name: "LayoutRenderer",
  components: {
    DispatchRenderer,
  },
  props: {
    ...rendererProps<Layout>(),
  },
  setup(props) {
    return useJsonFormsLayout(props);
  },
  methods: {
    elements() {
      const uischema = this.layout.uischema;
      return toPlainObject(uischema).elements;
    },
  },
});

export default markRaw(layoutRenderer);
</script>
