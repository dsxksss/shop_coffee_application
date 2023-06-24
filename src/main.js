import { createApp } from "vue";
import router from "./router"
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

// 使用vue-router插件
app.use(router)

// 使用vue-toastification插件
app.use(Toast, {});

app.mount("#app");