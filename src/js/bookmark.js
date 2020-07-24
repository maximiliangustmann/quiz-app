import { get } from './util'

export function bookmark() {
  const cardBookmark1 = get('.card__bookmark--1')
  const cardBookmark2 = get('.card__bookmark--2')
  const cardBookmark3 = get('.card__bookmark--3')
  const cardBookmark4 = get('.card__bookmark--4')

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
}
