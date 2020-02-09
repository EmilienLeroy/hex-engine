import { createRoot, useNewComponent, Canvas } from "@hex-engine/2d";

it("canvas background color", () => {
  cy.createCanvas().then(($canvas) => {
    createRoot(() => {
      const canvas = useNewComponent(() =>
        Canvas({ backgroundColor: "green", element: $canvas[0] })
      );
      canvas.fullscreen();
    });
  });
  cy.matchImageSnapshot();
});
