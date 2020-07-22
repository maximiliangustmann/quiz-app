const index = document.querySelector('.index')
const bookmarks = document.querySelector('.bookmarks')
const create = document.querySelector('.create')
const profile = document.querySelector('.profile')
const buttonIndex = document.querySelector('.button__index')
const buttonBookmarks = document.querySelector('.button__bookmarks')
const buttonCreate = document.querySelector('.button__create')
const buttonProfile = document.querySelector('.button__profile')

buttonIndex.addEventListener('click', () => {
  bookmarks.classList.add('hide')
  create.classList.add('hide')
  profile.classList.add('hide')
  index.classList.remove('hide')
})

buttonBookmarks.addEventListener('click', () => {
  index.classList.add('hide')
  create.classList.add('hide')
  profile.classList.add('hide')
  bookmarks.classList.remove('hide')
})

buttonCreate.addEventListener('click', () => {
  bookmarks.classList.add('hide')
  index.classList.add('hide')
  profile.classList.add('hide')
  create.classList.remove('hide')
})

buttonProfile.addEventListener('click', () => {
  bookmarks.classList.add('hide')
  create.classList.add('hide')
  index.classList.add('hide')
  profile.classList.remove('hide')
})
