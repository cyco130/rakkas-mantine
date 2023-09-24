import { createRequestHandler } from "rakkasjs";
import { ColorSchemeScript } from "@mantine/core";

// @ts-expect-error: Rakkas uses react-dom/server.browser because it uses
// the fetch API and not node:http. But react-dom/server.browser does not
// expose types, so we use @ts-expect-error to suppress the error.
import { renderToStaticMarkup } from "react-dom/server.browser";

// Render the <script> tag to a string because emitToDocumentHead can only
// return a string at the moment.
const colorSchemeHtml = renderToStaticMarkup(<ColorSchemeScript />);

export default createRequestHandler({
  createPageHooks() {
    return {
      emitToDocumentHead() {
        return colorSchemeHtml;
      },
    };
  },
});
