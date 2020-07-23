"use strict";

var index = document.querySelector('.index');
var bookmarks = document.querySelector('.bookmarks');
var create = document.querySelector('.create');
var profile = document.querySelector('.profile');
var buttonIndex = document.querySelector('.button__index');
var buttonBookmarks = document.querySelector('.button__bookmarks');
var buttonCreate = document.querySelector('.button__create');
var buttonProfile = document.querySelector('.button__profile');
var headline = document.querySelector('h1');
var cardBookmark = document.querySelector('.card__bookmark');
var cardBookmark1 = document.querySelector('.card__bookmark--1');
var cardBookmark2 = document.querySelector('.card__bookmark--2');
var cardBookmark3 = document.querySelector('.card__bookmark--3');
var cardBookmark4 = document.querySelector('.card__bookmark--4');
var cardButton = document.querySelector('.card__button');
var cardButton1 = document.querySelector('.card__button--1');
var cardAnswer1 = document.querySelector('.card__answer--1');
var buttonSubmit = document.querySelector('.button__submit');
buttonIndex.addEventListener('click', function () {
  bookmarks.classList.add('hide');
  create.classList.add('hide');
  profile.classList.add('hide');
  index.classList.remove('hide');
  headline.textContent = 'Home';
});
buttonBookmarks.addEventListener('click', function () {
  index.classList.add('hide');
  create.classList.add('hide');
  profile.classList.add('hide');
  bookmarks.classList.remove('hide');
  headline.textContent = 'Bookmarks';
});
buttonCreate.addEventListener('click', function () {
  bookmarks.classList.add('hide');
  index.classList.add('hide');
  profile.classList.add('hide');
  create.classList.remove('hide');
  headline.textContent = 'Create';
});
buttonProfile.addEventListener('click', function () {
  bookmarks.classList.add('hide');
  create.classList.add('hide');
  index.classList.add('hide');
  profile.classList.remove('hide');
  headline.textContent = 'Profile';
});
cardBookmark1.addEventListener('click', function () {
  cardBookmark1.classList.toggle('card__bookmark--active');
});
cardBookmark2.addEventListener('click', function () {
  cardBookmark2.classList.toggle('card__bookmark--active');
});
cardBookmark3.addEventListener('click', function () {
  cardBookmark3.classList.toggle('card__bookmark--active');
});
cardBookmark4.addEventListener('click', function () {
  cardBookmark4.classList.toggle('card__bookmark--active');
});
cardButton1.addEventListener('click', function () {
  cardAnswer1.classList.toggle('hide');

  if (cardButton1.textContent === 'Show answer') {
    cardButton1.textContent = 'Hide Answer';
  } else cardButton1.textContent = 'Show answer';
});