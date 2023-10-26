import header from "./header.js";

export function renderHTML(content) {
  return `
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        ul {
          display: flex;
          gap: 20px;
          list-style-type: none;
        }
      </style>
    </head>
    <body>
      ${header}
      <main>
      <h1>  ${content}</h1>
     
      </main>
    </body>
  </html>
`;
}
