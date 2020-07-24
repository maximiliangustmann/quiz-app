import { get } from './util'
export function answer() {
  const cardButton1 = get('.card__button')
  const cardAnswer1 = get('.card__answer')

  cardButton1.addEventListener('click', () => {
    cardAnswer1.classList.toggle('hide')

    if (cardButton1.textContent === 'Show answer') {
      cardButton1.textContent = 'Hide Answer'
    } else cardButton1.textContent = 'Show answer'
  })
}

//Martins Lösung
/* import { get, getAll } from './utility'

export function answer() {
  const cards = getAll('.card')

  cards.forEach(toggleAnswer)

  function toggleAnswer(card) {
    const buttonAnswer = card.querySelector('[class*="card__button--"]')
    const answer = card.querySelector('.card__answer')
    buttonAnswer.addEventListener(
      'click',
      showAnswerForCard(buttonAnswer, answer)
    )
  }

  function showAnswerForCard(button, answerCard) {
    return () => {
      if (button.classList.contains('card__button--answer')) {
        answerCard.classList.remove('hide')
        button.classList.remove('card__button--answer')
        button.classList.add('card__button--hide-answer')
      } else {
        answerCard.classList.add('hide')
        button.classList.add('card__button--show-answer')
        button.classList.remove('card__button--hide-answer')
      }
    }
  }
}

*/
