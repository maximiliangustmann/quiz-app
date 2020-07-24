import { getAll } from './util'

export function initBookmarkToggle() {
  const cardBookmark = getAll('.card__bookmark')
  cardBookmark.forEach((bookmark) => {
    bookmark.addEventListener(
      'click',
      bookmarkToggle(bookmark, 'card__bookmark--active')
    )
  })

  function bookmarkToggle(bookmark, classname) {
    return () => {
      bookmark.classList.toggle(classname)
    }
  }
}
