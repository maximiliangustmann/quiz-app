import { get } from './util'
export function answer() {
  const cardButton1 = get('.card__button--1')
  const cardAnswer1 = get('.card__answer--1')

  cardButton1.addEventListener('click', () => {
    cardAnswer1.classList.toggle('hide')

    if (cardButton1.textContent === 'Show answer') {
      cardButton1.textContent = 'Hide Answer'
    } else cardButton1.textContent = 'Show answer'
  })
}
