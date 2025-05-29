document.addEventListener("DOMContentLoaded", () => {
    // Animações de entrada ao rolar a página
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("is-visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("is-visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 75)) { // Elemento aparece quando 75% dele está visível
                displayScrollElement(el);
            } 
        })
    }

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });
    // Para animar elementos já visíveis no carregamento da página
    setTimeout(handleScrollAnimation, 250);
});