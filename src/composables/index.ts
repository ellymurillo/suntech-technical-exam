import testRenderer from "./testRenderers";
import emitter from "./emitter";
import { ajv, formValidator } from "./ajvErrors";

const parse: (obj: object) => object = function (obj): object {
  return JSON.parse(JSON.stringify(obj));
}

export { parse, testRenderer, ajv, formValidator, emitter};