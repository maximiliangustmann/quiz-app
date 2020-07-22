const index = document.querySelector('.index')
const bookmarks = document.querySelector('.bookmarks')
const create = document.querySelector('.create')
const profile = document.querySelector('.profile')
const buttonIndex = document.querySelector('.button__index')
const buttonBookmarks = document.querySelector('.button__bookmarks')
const buttonCreate = document.querySelector('.button__create')
const buttonProfile = document.querySelector('.button__profile')
const headline = document.querySelector('h1')
const cardBookmark = document.querySelector('.card__bookmark')
const cardBookmark1 = document.querySelector('.card__bookmark--1')
const cardBookmark2 = document.querySelector('.card__bookmark--2')
const cardBookmark3 = document.querySelector('.card__bookmark--3')
const cardBookmark4 = document.querySelector('.card__bookmark--4')

buttonIndex.addEventListener('click', () => {
  bookmarks.classList.add('hide')
  create.classList.add('hide')
  profile.classList.add('hide')
  index.classList.remove('hide')
  headline.textContent = 'Home'
})

buttonBookmarks.addEventListener('click', () => {
  index.classList.add('hide')
  create.classList.add('hide')
  profile.classList.add('hide')
  bookmarks.classList.remove('hide')
  headline.textContent = 'Bookmarks'
})

buttonCreate.addEventListener('click', () => {
  bookmarks.classList.add('hide')
  index.classList.add('hide')
  profile.classList.add('hide')
  create.classList.remove('hide')
  headline.textContent = 'Create'
})

buttonProfile.addEventListener('click', () => {
  bookmarks.classList.add('hide')
  create.classList.add('hide')
  index.classList.add('hide')
  profile.classList.remove('hide')
  headline.textContent = 'Profile'
})

cardBookmark1.addEventListener('click', () => {
  cardBookmark1.classList.toggle('card__bookmark--active')
})

cardBookmark2.addEventListener('click', () => {
  cardBookmark2.classList.toggle('card__bookmark--active')
})

cardBookmark3.addEventListener('click', () => {
  cardBookmark3.classList.toggle('card__bookmark--active')
})

cardBookmark4.addEventListener('click', () => {
  cardBookmark4.classList.toggle('card__bookmark--active')
})
