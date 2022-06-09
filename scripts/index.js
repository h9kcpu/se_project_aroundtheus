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
        link: 'https://code.s3.yandex.net/web-code/latemar.jng',
    },
    {
        name: 'Vanoise National Park',
        link: 'https://code.s3.yandex.net/web-code/vanoise.jng',
    },
    {
        name: 'Lago di Braies',
        link: 'https://code.s3.yandex.net/web-code/lago.jng',
    },
]

const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

const cardsWrap = document.querySelector('.card__list');
const modal = document.querySelector('.modal');
const profileFormElement = document.querySelector('.modal__form');

const profileEditButton = document.querySelector('.profile__button-edit');
const modalCloseButton = document.querySelector('.modal__close');
const profileTitle = document.querySelector('.profile__info-title');
const profileDescription = document.querySelector('.profile__info-description');

const nameInput = profileFormElement.querySelector('.modal__input-name');
const jobInput = profileFormElement.querySelector('.modal__input-description');

function closeModal() {
    modal.style.display = 'none';
}

function openModal() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;

    modal.style.display = 'flex';

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
profileEditButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);


for (let i = 0; i < initialCards.length; i++) {
    cardsWrap.prepend(getCardElement(initialCards[i]));
} 