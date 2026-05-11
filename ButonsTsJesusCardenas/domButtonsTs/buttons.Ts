function baseButton(element: HTMLElement, text: string, type: string): HTMLElement {
  element.textContent = text
  element.classList.add("fake-button")

  element.addEventListener("click", () => {
    console.log(`Botón ${type} presionado`)
  })

  return element
}

export function createDivButton(text: string): HTMLElement {
  return baseButton(document.createElement("div"), text, "DIV")
}

export function createSpanButton(text: string): HTMLElement {
  return baseButton(document.createElement("span"), text, "SPAN")
}

export function createParagraphButton(text: string): HTMLElement {
  return baseButton(document.createElement("p"), text, "P")
}

export function createLinkButton(text: string): HTMLElement {
  const a = document.createElement("a")
  a.href = "#"
  return baseButton(a, text, "A")
}

export function createArticleButton(text: string): HTMLElement {
  return baseButton(document.createElement("article"), text, "ARTICLE")
}

export function createHeaderButton(text: string): HTMLElement {
  return baseButton(document.createElement("h3"), text, "HEADER")
}

export function createListButton(text: string): HTMLElement {
  const li = document.createElement("li")
  return baseButton(li, text, "LI")
}

export function createSectionButton(text: string): HTMLElement {
  return baseButton(document.createElement("section"), text, "SECTION")
}

export function createImageButton(src: string): HTMLElement {
  const img = document.createElement("img")
  img.src = src
  img.classList.add("fake-button")
  img.style.width = "100px"

  img.addEventListener("click", () => {
    console.log("Botón IMG presionado")
  })

  return img
}