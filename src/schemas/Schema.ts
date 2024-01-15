import { JsonSchema } from "@jsonforms/core";

export default <JsonSchema>{
  type: "object",
  properties: {
    firstName: {
      type: "string",
      pattern: "^[a-zA-Z ]*$",
      minLength: 1,
      errorMessage: {
        pattern: "Invalid Firstname."
      },
    },
    lastName: {
      type: "string",
      pattern: "^[a-zA-Z' ]*$",
      minLength: 1,
      errorMessage: {
        pattern: "Invalid Lastname."
      },
    },
    otherInfo: {
      type: "string",
    },
    birthday: {
      type: "string",
      format: "date",
      ageRange: {
        min: 18,
        max: 100
      },
      errorMessage: {
        format: "Invalid date format.",
        ageRange: "Invalid age. Must be 18 or equal or less than 100."
      },
    },
    age: {
      type: "number",
    },
    email: {
      type: "string",
      pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
      errorMessage: {
        pattern: "Invalid email format.",
      },
    },
    submit: {
      type: "object",
    }
  },
  required: ["firstName", "lastName", "birthday", "email"],
  additionalProperties: true
};