import "../dist/polyfills";
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand();

Cypress.Commands.add("keydown", (key) => {
  cy.get("body").trigger("keydown", { key });
});

Cypress.Commands.add("keyup", (key) => {
  cy.get("body").trigger("keyup", { key });
});

Cypress.Commands.add("createCanvas", () => {
  cy.get("body").then((body$) => {
    const body = body$[0];

    body.innerHTML = "";

    const canvas = body.ownerDocument.createElement("canvas");
    canvas.id = "canvas";

    body.appendChild(canvas);

    return canvas;
  });
});
