const initialCards = [
    {
        name: 'Yosemite Valley',
        link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
    },
    {
        name: 'Lake Louise',
        link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
    },
    {
        name: 'Bald Mountains',
        link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
    },
    {
        name: 'Latemar',
        link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
    },
    {
        name: 'Vanoise National Park',
        link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
    },
    {
        name: 'Lago di Braies',
        link: 'https://code.s3.yandex.net/web-code/lago.jpg ',
    },
]

const cardTemplate = document.querySelector('#card-template').content.querySelector('.card__content');

const cardsWrap = document.querySelector('.card__list');
const modal = document.querySelector("#edit-modal");
const addModal = document.querySelector("#add-modal");
const profileFormElement = document.querySelector('.modal__form');

const profileEditButton = document.querySelector('.profile__button-edit');
const profileAddButton = document.querySelector('.profile__button-add');
const modalCloseButton = document.querySelector('.modal__close');
const profileTitle = document.querySelector('.profile__info-title');
const profileDescription = document.querySelector('.profile__info-description');

const nameInput = profileFormElement.querySelector('.modal__input_type_name');
const jobInput = profileFormElement.querySelector('.modal__input_type_description');
const addModalCloseButton = document.querySelector('.modal__close');

function closeModal(modal) {
    modal.classList.remove('modal__is-opened');
}

function openModal(modal) {
    modal.classList.add('modal__is-opened');

}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal();
}

function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = data.link;
    cardImage.alt = data.name;

    cardTitle.textContent = data.name;

    return cardElement;
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

modalCloseButton.addEventListener('click', function() {
    closeModal(modal);
});

addModalCloseButton.addEventListener('click', function() {
    closeModal(addModal);
});


profileEditButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openModal(modal);
});

profileAddButton.addEventListener('click', () => {

    openModal(addModal);
});

    


for (let i = 0; i < initialCards.length; i++) {
    cardsWrap.prepend(getCardElement(initialCards[i]));
    console.log("loop", i);
} 

initialCards.forEach(function(getCardElement) {
    cardsWrap.prepend(getCardElement(initialCards[i]));
    console.log(getCardElement);
})

