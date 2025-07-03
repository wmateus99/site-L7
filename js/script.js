const paralaxImage = document.getElementById("paralax")
const header = document.getElementById("headerTop")
const logo = document.getElementById("logoL7")

window.addEventListener("scroll", () => {
    const scroll = window.scrollY
    paralaxImage.style.transform = `translateY(${scroll * .5}px)`;

    if(scroll > 750) {
        header.style.height = "50px"
        header.style.position = "fixed"
        header.style.background = "#033468a7"
        header.style.backdropFilter = 'blur(50px)';
    } else {
        header.style.height = "100px"
        header.style.position = "absolute"
        header.style.background = "transparent"
        header.style.backdropFilter = 'blur(0px)';
    }
})