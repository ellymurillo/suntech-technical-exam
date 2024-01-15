import { UISchemaElement } from "@jsonforms/core";

export default <UISchemaElement>{
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/firstName",
          tabIndex: 1
        },
        {
          type: "Control",
          scope: "#/properties/birthday",
          tabIndex: 3
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/lastName",
          tabIndex: 2
        },
        {
          type: "Control",
          scope: "#/properties/email",
          tabIndex: 4,
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/properties/age",
              schema: {
                minimum: 18,
                maximum: 100
              },
            }
          },
        },
      ]
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/otherInfo",
          tabIndex: 5,
          options: {
            multi: true
          }
        },
        {
          type: "Control",
          scope: "#/properties/submit",
          rule: {
            effect: "ENABLE",
            condition: {
              scope: "#",
              schema: {
                allOf: [
                  {
                    properties: {
                      firstName: {
                        minLength: 1,
                        pattern: "^[a-zA-Z ]*$"
                      }
                    }
                  },
                  {
                    properties: {
                      lastName: {
                        minLength: 1,
                        pattern: "^[a-zA-Z' ]*$"
                      }
                    }
                  },
                  {
                    properties: {
                      age: {
                        minimum: 18,
                        maximum: 100
                      }
                    }
                  },
                  {
                    properties: {
                      email: {
                        pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  ]
};