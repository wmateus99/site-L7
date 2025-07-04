// Seleciona elementos do DOM
const paralaxImage = document.getElementById("paralax")
const paralaxImage2 = document.getElementById("paralax-2")
const header = document.getElementById("headerTop")
const logo = document.getElementById("logoL7")
const btnMobile = document.getElementById("btn-menu")
const menuMobile = document.getElementById("menuMobile")

// Evento de scroll para efeito de paralaxe e alteração do cabeçalho
window.addEventListener("scroll", () => {
    const scroll = window.scrollY

    // Aplica efeito paralaxe nas imagens
    paralaxImage.style.transform = `translateY(${scroll * 0.5}px)`
    paralaxImage2.style.transform = `translateY(${scroll * 0.5}px)`

    // Modifica o estilo do header e menu quando o scroll ultrapassa 750px
    if (scroll > 750) {
        header.style.height = "50px"
        header.style.position = "fixed"
        header.style.background = "#033468a7"
        header.style.backdropFilter = "blur(50px)"

        menuMobile.style.top = "50px"
        menuMobile.style.position = "fixed"
    } else {
        header.style.height = "100px"
        header.style.position = "absolute"
        header.style.background = "transparent"
        header.style.backdropFilter = "blur(0px)"

        menuMobile.style.top = "0px"
        menuMobile.style.position = "relative"
    }
})

// Evento de clique no botão do menu mobile
btnMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("active-menu-mobile")
})

// Fecha o menu mobile se o clique for fora do menu e do botão
document.addEventListener("click", (e) => {
    const isClickInsideMenu = menuMobile.contains(e.target)
    const isClickOnButton = btnMobile.contains(e.target)

    if (!isClickInsideMenu && !isClickOnButton) {
        menuMobile.classList.remove("active-menu-mobile")
    }
})

// Atualiza o ano atual automaticamente no elemento com id "ano-atual"
document.getElementById("ano-atual").textContent = new Date().getFullYear()
