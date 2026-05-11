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
} from "./buttons";

const app = document.getElementById("app");

if(app){

    app.appendChild(createDivButton("Botón DIV"));

    app.appendChild(createSpanButton("Botón SPAN"));

    app.appendChild(
        createImageButton(
            "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
        )
    );

    app.appendChild(createParagraphButton("Botón P"));

    app.appendChild(createLinkButton("Botón A"));

    app.appendChild(createArticleButton("Botón ARTICLE"));

    app.appendChild(createHeaderButton("Botón HEADER"));

    app.appendChild(createListButton("Botón LI"));

    app.appendChild(createSectionButton("Botón SECTION"));
}