(() => {
    const q = document.querySelector("[data-menu-button]");
    const w = document.querySelector("[data-menu]");
    const e = document.querySelector("[data-menu-open]");

    q.addEventListener("click", () => {
        const expanded = q.getAttribute("aria-expanded") === "true" || false;

        q.classList.toggle("is-open")

    }
     )
})