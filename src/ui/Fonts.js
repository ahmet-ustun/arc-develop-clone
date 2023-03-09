const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const linkTag = document.createElement("link");
  const fontUrl =
    "https://fonts.googleapis.com/css?family=Pacifico|Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap";

  linkTag.href = fontUrl;
  linkTag.rel = "stylesheet";

  document.head.appendChild(linkTag);

  const pacifico = new FontFaceObserver("Pacifico");
  pacifico.load().then(() => {
    document.documentElement.classList.add("pacifico");
  });

  const raleway = new FontFaceObserver("Raleway");
  raleway.load().then(() => {
    document.documentElement.classList.add("raleway");
  });

  const roboto = new FontFaceObserver("Roboto");
  roboto.load().then(() => {
    document.documentElement.classList.add("roboto");
  });
};

export default Fonts;
