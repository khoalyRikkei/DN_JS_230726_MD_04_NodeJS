import { renderHTML } from "../views/html.js";
import { routes } from "./route.js";

export function matchRoute(path) {
  let html = renderHTML("Trang không tìm thấy");
  routes.forEach((route) => {
    if (route.path === path) {
      html = renderHTML(route.content);
    }
  });

  return html;
}
