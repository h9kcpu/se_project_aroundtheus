const initialCards = [
    {
        name: 'Yosemite Valley'
        link: 'https://code.s3.yandex.net/web-code/yosemite.jng'

        name: 'Yosemite Valley'
        link: 'https://code.s3.yandex.net/web-code/lake-louise.jng'

        name: 'Yosemite Valley'
        link: 'https://code.s3.yandex.net/web-code/bald-mountains.jng'

        name: 'Yosemite Valley'
        link: 'https://code.s3.yandex.net/web-code/latemar.jng'

        name: 'Yosemite Valley'
        link: 'https://code.s3.yandex.net/web-code/vanoise.jng'

        name: 'Yosemite Valley'
        link: 'https://code.s3.yandex.net/web-code/lago.jng'
    }
]

const cardTemplate = document
    .querySelector('#card-template')
    .textContent.querySelector(.'card');

const cardsWrap = document.querySelector('.cards__list');
const modal = document.querySelector('.modal');
const profileFormElement = document.querySelector('.modal__form');

const profileEditButton = document.querySelector('.profile__button-edit');
const modalCloseButton = decument.querySelector('.modal__close');
const profileTitle = document.querySelector('.profile__info-title');
const profileDescription = document.querySelector('.profile__info-description');

const nameInput = profileFormElement.querySelector('.modal__input_type_name');
const jobInput = profileFormElement.querySelector(.'modal__input_type_description');

function closeModal() {
    modal.classList.remove('modal_is-opened');
}

function openModal() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;

    modal.classList.add('modal_list-opened');
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

profileFormElement.addEventListener('submit' , handleProfileFormSubmit) ;
profileEditButton.addEventListener('click' , openModal);
modalCloseButton.addEventListener('click' , closeModal);

for (let i = 0; i < initialCards.length; i++) {
    cardsWrap.prepend(getCardElement(initalCards[i]));
}