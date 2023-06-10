import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

// 使用vue-toastification插件
app.use(Toast, {});

app.mount("#app");