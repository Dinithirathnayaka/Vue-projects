import { createRouter, createWebHistory } from "vue-router";
import Fruits from "./pages/FruitsList";
import Calendar from "./pages/CalendarCon";
import Home from "./pages/HomeCon";
import Markdown from "./pages/MarkdownCon";
import Slider from "./pages/SliderCon";
import Calculator from "./pages/CalculatorCon";

const routes = [
  { path: "/", component: Home },
  { path: "/fruits", component: Fruits },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
