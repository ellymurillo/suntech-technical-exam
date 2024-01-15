import { createAjv } from "@jsonforms/core";
import ajvErrors from "ajv-errors";
import { SchemaValidateFunction } from "ajv/dist/types";

const ajv = createAjv({ allErrors: true, verbose: true, strict: false });

const formValidator = (keyword: string, validateFnc: SchemaValidateFunction) => {
  if (!ajv.getKeyword(keyword)) {
    ajv.addKeyword({
      keyword: keyword,
      validate: validateFnc,
      errors: true,
    });
  }
}

ajvErrors(ajv);

export { ajv, formValidator };