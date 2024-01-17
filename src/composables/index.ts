import testRenderer from "./testRenderers";
import emitter from "./emitter";
import { ajv, formValidator } from "./ajvErrors";
import { renderWithBreaks, formatDate, strToCamelCase } from "./stringFormatter";

const parse: (obj: object) => object = function (obj): object {
  return JSON.parse(JSON.stringify(obj));
}

export { parse, testRenderer, ajv, formValidator, emitter, renderWithBreaks, formatDate, strToCamelCase };