import { get } from './util'
export function card() {
  const placeholder = get('[data-js=placeholder]')
  const card = [
    {
      type: 'h2',
      className: 'card__headline',
      text: 'Question',
    },
    {
      type: 'paragraph',
      className: 'card__text card__text--question',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nesciunt adipisci? Quia voluptate voluptas harum eius vel, error qui natus ipsam. Natus nulla harum in quas sit dicta sequi facilis!',
    },

    {
      type: 'button',
      className: 'card_button card__button--answer',
      text: 'Show Answer',
    },

    {
      type: 'button',
      className: 'card_button card__button--hide-answer',
      text: 'Hide Answer',
    },
    {
      type: 'paragraph',
      className: 'card__answer hide',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, exercitationem consectetur!',
    },
    {
      type: 'li',
      className: 'card__tag',
      text: 'tag 1',
    },
    {
      type: 'li',
      className: 'card__tag',
      text: 'tag 2',
    },
  ]

  card.forEach(({ type, className, text }) => {
    const el = createElement({ type, className, target: placeholder })
    el.textContent = text
  })

  createElement()

  function createElement({
    type = 'div',
    className = ' ',
    target = document.body,
  } = {}) {
    const el = document.createElement(type)
    el.className = className
    target.appendChild(el)
    return el
  }
}
