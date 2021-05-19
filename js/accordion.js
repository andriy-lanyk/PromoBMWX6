const featureButtonElements = document.querySelectorAll('[data-atribut="featureButton"]');
const featureSubElements = document.querySelectorAll('.feature-sub');

featureButtonElements.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        btn.classList.toggle('feature__link_active');featureSubElements[i].classList.toggle('hidden');

        featureButtonElements.forEach((btn, i) => {
            if (btn.classList.contains('feature__link_active') && btn != e.currentTarget) {
                featureSubElements[i].classList.toggle('hidden');
                btn.classList.remove('feature__link_active');
            }
        });
    });
});
