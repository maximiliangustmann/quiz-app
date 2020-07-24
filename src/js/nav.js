import { get } from './util'
export function navigation() {
  const index = get('.index')
  const bookmarks = get('.bookmarks')
  const create = get('.create')
  const profile = get('.profile')

  const buttonIndex = get('.button__index')
  const buttonBookmarks = get('.button__bookmarks')
  const buttonCreate = get('.button__create')
  const buttonProfile = get('.button__profile')
  const headline = get('h1')

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
}
