const scrollElements = document.querySelectorAll('a[href^="#"]:not(a[href="#"]')

scrollElements.forEach(element => {
    element.addEventListener('click', scrollToElement)
});

function scrollToElement(e) {
    e.preventDefault();

    const target = e.target;
    const id = target.getAttribute('href').slice(1)

    console.log(id)
    
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}