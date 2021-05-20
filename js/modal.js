const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.more');
const btnCloseModal = document.querySelector('.modal__close');

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

function openModal() {
    modalElement.classList.remove('hidden');
    document.body.addEventListener('keydown', closeModal)
}

modalElement.addEventListener('click', closeModal);

function closeModal(e) {
    if (e.target === btnCloseModal || e.target === overlayElement || e.key === 'Escape') {
        modalElement.classList.add('hidden')
        document.body.removeEventListener('keydown', closeModal);
    }
}