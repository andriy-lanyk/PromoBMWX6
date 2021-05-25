const server = 'https://jsonplaceholder.typicode.com/posts';
const message = document.createElement('message');

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);
            callBack(response.id);
        } else {
            falseCallBack(request.status);
            throw new Error(request.status);
        }
    });

    request.send(data);
};

const formElements = document.querySelectorAll('.form');
formElements.forEach(formHandler);

function formHandler(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {};
        let flag = true;
        
        for (const element of form.elements) {
            const { name, value } = element;
            if (name) {
                if (value.trim()) {
                    element.style.border = '';
                    data[name] = value.trim();
                } else {
                    element.style.border = '1px solid red';
                    element.value = '';
                    flag = false;
                };
            };
        };
        
        if (!flag) {
            createWarningMessage(e);
            return
        };

        sendData(JSON.stringify(data), (id) => createSuccessMessage(id, e), (err) => createErrorMessage(e));

        form.reset();
    });
};

function createWarningMessage(e) {
    const target = e.target;
    const button = e.submitter;
    message.textContent = 'Введите корректные значения';
    message.style.color = 'orange';
    target.append(message);
    button.setAttribute('disabled', false)

    setTimeout(() => {
        deleteMessage(e)
    }, 5000);
};

function createSuccessMessage(id, e) {
    const target = e.target;
    const button = e.submitter;
    message.innerHTML = `Ваша заявка №${id}!
    В ближайшее время с Вами свяжемся!`;
    message.style.color = 'green';
    target.append(message);
    button.setAttribute('disabled', false)

    setTimeout(() => {
        deleteMessage(e)
    }, 5000);
};

function createErrorMessage(e) {
    const target = e.target;
    const button = e.submitter;
    message.textContent = 'К сожалению, технические неполадки, попробуйте отправить повторно через 5 секунд';
    message.style.color = 'red';
    target.append(message);
    button.setAttribute('disabled', false)

    setTimeout(() => {
        deleteMessage(e)
    }, 5000);
};

function deleteMessage(e) {
    const button = e.submitter;
    message.textContent = '';
    button.removeAttribute('disabled');
};