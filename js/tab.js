const tabFieldElements = document.querySelectorAll('[data-tabs-field]');
const tabHandlerElements = document.querySelectorAll('[data-tabs-handler]');
const tabTitleElements = document.querySelectorAll('.design__title');

tabHandlerElements.forEach(element => {
    element.addEventListener('click', changeButtonOnClick)
});

function changeButtonOnClick(e) {
    const target = e.target;
    for (const item of tabHandlerElements) {
        if (target === item) {
            item.classList.add('design-list__item_active')
        } else {
            item.classList.remove('design-list__item_active')
        };
    };

    changeElements(e);
    changeTitle(e);
};

function changeElements(e) {
    const target = e.target;
    tabFieldElements.forEach(field => {
        if (field.dataset.tabsField === target.dataset.tabsHandler) {
            field.classList.remove('hidden')
        } else {
            field.classList.add('hidden')
        }
    });
};

function changeTitle(e) {
    const target = e.target;
    if (target.dataset.tabsHandler === 'interior') {
        tabTitleElements[0].classList.remove('hidden')
        tabTitleElements[1].classList.add('hidden')
    } else {
        tabTitleElements[1].classList.remove('hidden')
        tabTitleElements[0].classList.add('hidden')
    };
};
