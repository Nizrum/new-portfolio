const links = document.querySelectorAll(".menu__link");

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const ID = event.target.getAttribute("href").slice(1);

        seamless.scrollIntoView(document.getElementById(ID), {
            behavior: "smooth",
            block: "start",
        });
    });
});