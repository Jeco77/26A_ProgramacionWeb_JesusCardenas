import { JSDOM } from "jsdom"

const dom = new JSDOM(`<!DOCTYPE html><body></body>`)
const document = dom.window.document

// ===== FUNCIONES =====

function createDiv(
  document: Document,
  id: string,
  className: string
): HTMLDivElement {
  const element = document.createElement("div")
  element.id = id
  element.classList.add(className)
  return element
}

function createSpan(
  document: Document,
  className: string,
  text: string
): HTMLSpanElement {
  const element = document.createElement("span")
  element.classList.add(className)
  element.textContent = text
  return element
}

function createSection(
  document: Document,
  id: string
): HTMLElement {
  const element = document.createElement("section")
  element.id = id
  return element
}

function createHeader(
  document: Document,
  className: string
): HTMLElement {
  const element = document.createElement("header")
  element.classList.add(className)
  return element
}

function createNav(
  document: Document,
  ariaLabel: string
): HTMLElement {
  const element = document.createElement("nav")
  element.setAttribute("aria-label", ariaLabel)
  return element
}

const header = createHeader(document, "mainHeader")
const nav = createNav(document, "menu principal")
const div = createDiv(document, "container", "main")
const span = createSpan(document, "text", "Hola mundo")
const section = createSection(document, "about")

document.body.appendChild(header)
header.appendChild(nav)
document.body.appendChild(div)
div.appendChild(span)
document.body.appendChild(section)

console.log(document.body.innerHTML)