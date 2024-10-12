const menuopenbutton = document.querySelector("#menu-open-button");
const menuclosebutton = document.querySelector("#menu-close-button");

menuopenbutton.addEventListener("click", () =>{

    document.body.classList.toggle("show-mobile-menu")
});

menuclosebutton.addEventListener("click", () => menuopenbutton.click());