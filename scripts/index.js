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
const modalCloseButton = document.querySelector('.modal__close');

const profileFormElement = document.querySelector('.modal__form');
const profileEditButton = document.querySelector('.profile__button-edit');
const profileAddButton = document.querySelector('.profile__button-add');
const profileTitle = document.querySelector('.profile__info-title');
const profileDescription = document.querySelector('.profile__info-description');

const nameInput = profileFormElement.querySelector('.modal__input_type_name');
const jobInput = profileFormElement.querySelector('.modal__input_type_description');

const titleInput = profileFormElement.querySelector('.modal__input_type_title');
const linkInput = profileFormElement.querySelector('.modal__input_type_link');

const cardTitle = cardTemplate.querySelector('.card__title');
const cardLink = cardTemplate.querySelector('.card__image');

const addModal = document.querySelector("#add-modal");
const addModalCloseButton = document.querySelector('#add-close');
const cardAddForm = document.querySelector('#add-card-form');

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

function handleAddFormSubmit(evt) {
    evt.preventDefault();

    cardTitle.textContent = titleInput.value;
    cardLink = linkInput.value;

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

function renderCard(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = data.link;
    cardImage.alt = data.name;

    cardTitle.textContent = data.name;

    return cardElement;
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

cardAddForm.addEventListener('submit', handleAddFormSubmit);

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
 

initialCards.forEach(function(card) {
    cardsWrap.prepend(getCardElement(card));
    console.log(card);
})

initialCards.forEach(function (data) {
    renderCard(data)
})
