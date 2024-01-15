import { createApp } from "vue"
import { JsonForms } from '@jsonforms/vue';
import vuetify from "@/plugins/vuetify";
import { createPinia } from "pinia";

import App from "@/App.vue"
import router from "@/routes/"
import resetStore from "@/plugins/resetStore"
import { JSONForm } from "@/components";

import "@/style.css"

const app = createApp(App);
const pinia = createPinia();

app.component("json-forms", JsonForms);

pinia.use(resetStore);
app.use(vuetify)
app.use(router)
app.use(pinia)

app.component('JSONForm', JSONForm)

app.mount("#app");