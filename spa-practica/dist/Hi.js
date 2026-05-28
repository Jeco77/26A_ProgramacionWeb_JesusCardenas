"use strict";
function createButtonEvP(text, id, css_class, evt) {
    const button = document.createElement("button");
    button.textContent = text;
    button.id = id;
    button.classList.add(css_class);
    button.addEventListener(evt.event, evt.handler);
    return button;
}
// Ejemplo: botón que imprime en consola
let buttonConsole = createButtonEvP("Console", "btnConsole", "clb", {
    event: "click",
    handler: () => { console.log("evento ejecutado"); }
});
document.body.appendChild(buttonConsole);
// Función para inyectar HTML dinámico
function createInjectorButton(text, html) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", () => {
        const appDiv = document.getElementById("App");
        if (appDiv) {
            appDiv.innerHTML = html;
        }
    });
    document.body.appendChild(button);
}
// Botones de navegación simulada
createInjectorButton("Inyectar HTML", "<p style='background-color: yellow; padding: 20px;'>¡HTML inyectado!</p>");
createInjectorButton("Página Azul", "<p style='background-color: blue; padding: 20px;'>Contenido Azul</p>");
createInjectorButton("Página Roja", "<div style='background-color: red; padding: 20px;'>Contenido Rojo</div>");
function navigate(route) {
    const appDiv = document.getElementById("App");
    if (!appDiv)
        return;
    switch (route) {
        case "home":
            appDiv.innerHTML = "<h2>🏠 Home</h2><p>Bienvenido a la página principal.</p>";
            break;
        case "about":
            appDiv.innerHTML = "<h2>ℹ️ About</h2><p>Esta es una SPA básica hecha en TypeScript.</p>";
            break;
        case "contact":
            appDiv.innerHTML = "<h2>📞 Contact</h2><p>Correo: ejemplo@correo.com</p>";
            break;
        default:
            appDiv.innerHTML = "<h2>404</h2><p>Página no encontrada.</p>";
    }
}
// Función para crear botones que cambian el hash
function createRouteButton(text, route) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", () => {
        window.location.hash = route; // cambia la URL
        navigate(route);
    });
    document.body.appendChild(button);
}
// Escuchar cambios en el hash
window.addEventListener("hashchange", () => {
    const route = window.location.hash.replace("#", "");
    navigate(route);
});
// Crear botones del router
createRouteButton("Home", "home");
createRouteButton("About", "about");
createRouteButton("Contact", "contact");
// Navegar a la ruta inicial si existe
if (window.location.hash) {
    navigate(window.location.hash.replace("#", ""));
}
else {
    navigate("home");
}
