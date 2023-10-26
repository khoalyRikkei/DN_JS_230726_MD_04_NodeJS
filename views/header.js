import { routes } from "../routes/route.js";
const html = routes
  .map((route) => `<li><a href="${route.path}">${route.title}</a></li>`)
  .join("");

const header = `
<nav>
    <ul>
    ${html}
    </ul>
</nav>
`;

export default header;
