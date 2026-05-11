import {
  createDivButton,
  createSpanButton,
  createImageButton,
  createParagraphButton,
  createLinkButton,
  createArticleButton,
  createHeaderButton,
  createListButton,
  createSectionButton
} from "./buttons.js"

const app = document.getElementById("app")!

app.appendChild(createDivButton("Div botón"))
app.appendChild(createSpanButton("Span botón"))
app.appendChild(createParagraphButton("P botón"))
app.appendChild(createLinkButton("Link botón"))
app.appendChild(createArticleButton("Article botón"))
app.appendChild(createHeaderButton("Header botón"))
app.appendChild(createListButton("Lista botón"))
app.appendChild(createSectionButton("Section botón"))
app.appendChild(createImageButton("https://via.placeholder.com/100"))