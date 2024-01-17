import { test, expect, describe } from 'vitest';
import { mount, config } from "@vue/test-utils";
import vuetify from "../src/plugins/vuetify"
import { createPinia } from 'pinia';
import router from "../src/routes/"

import { JSONForm } from "../src/components";
import Form from "../src/pages/Form.vue"

config.global.plugins = [vuetify, createPinia(), router]

const wrapper = mount(Form, {
  global: {
    components: {JSONForm}
  }
});

const title = wrapper.find(".text-h5");
const firstName = wrapper.find("[testid='firstName']");
const lastName = wrapper.find("[testid='lastName']");
const birthday = wrapper.find("[testid='birthday']");
const email = wrapper.find("[testid='email']");
const otherInfo = wrapper.find("[testid='otherInfo']");
const submit = wrapper.find("button");

describe("home page", () => {

  test("rendered elements", () => {
    expect(title.exists()).toBe(true);
    expect(title.text()).toContain(["Profile Info"]);

    expect(firstName.exists()).toBe(true);

    expect(lastName.exists()).toBe(true);

    expect(birthday.exists()).toBe(true);

    expect(email.exists()).toBe(false);

    expect(otherInfo.exists()).toBe(true);

    expect(submit.exists()).toBe(true);
    expect(submit.classes()).toContain('v-btn--disabled');
  });
});  