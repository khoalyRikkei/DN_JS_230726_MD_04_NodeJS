import { routes } from "./routes.js";

export function matchRoute(path) {
  let content = "Page not found";
  routes.forEach((route) => {
    if (route.path === path) {
      content = route.content;
    }
  });
  return content;
}
