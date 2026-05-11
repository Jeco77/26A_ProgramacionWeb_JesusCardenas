function applyButtonStyles(element: HTMLElement, type: string) {

    element.classList.add("fake-button");

    element.addEventListener("click", () => {
        console.log(`Botón ${type} presionado`);
    });

    return element;
}

export function createDivButton(text: string): HTMLElement {

    const div = document.createElement("div");
    div.textContent = text;

    return applyButtonStyles(div, "DIV");
}

export function createSpanButton(text: string): HTMLElement {

    const span = document.createElement("span");
    span.textContent = text;

    return applyButtonStyles(span, "SPAN");
}

export function createImageButton(src: string): HTMLElement {

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Botón Imagen";

    return applyButtonStyles(img, "IMG");
}

export function createParagraphButton(text: string): HTMLElement {

    const p = document.createElement("p");
    p.textContent = text;

    return applyButtonStyles(p, "P");
}

export function createLinkButton(text: string): HTMLElement {

    const a = document.createElement("a");
    a.textContent = text;
    a.href = "#";

    return applyButtonStyles(a, "A");
}

export function createArticleButton(text: string): HTMLElement {

    const article = document.createElement("article");
    article.textContent = text;

    return applyButtonStyles(article, "ARTICLE");
}

export function createHeaderButton(text: string): HTMLElement {

    const h2 = document.createElement("h2");
    h2.textContent = text;

    return applyButtonStyles(h2, "HEADER");
}

export function createListButton(text: string): HTMLElement {

    const li = document.createElement("li");
    li.textContent = text;

    return applyButtonStyles(li, "LI");
}

export function createSectionButton(text: string): HTMLElement {

    const section = document.createElement("section");
    section.textContent = text;

    return applyButtonStyles(section, "SECTION");
}