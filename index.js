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