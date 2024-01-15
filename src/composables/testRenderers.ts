import {
  JsonFormsRendererRegistryEntry,
  rankWith,
  Tester
} from '@jsonforms/core';

const testRenderer: (renderer: object, controlType: Tester, rank?: number) => object = function (renderer, controlType, rank): object {
  return <JsonFormsRendererRegistryEntry>{
    renderer,
    tester: rankWith(rank || 2, controlType)
  }
}

export default testRenderer;