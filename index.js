"use strict";

var index = document.querySelector('.index');
var bookmarks = document.querySelector('.bookmarks');
var create = document.querySelector('.create');
var profile = document.querySelector('.profile');
var buttonIndex = document.querySelector('.button__index');
var buttonBookmarks = document.querySelector('.button__bookmarks');
var buttonCreate = document.querySelector('.button__create');
var buttonProfile = document.querySelector('.button__profile');
buttonIndex.addEventListener('click', function () {
  bookmarks.classList.add('hide');
  create.classList.add('hide');
  profile.classList.add('hide');
  index.classList.remove('hide');
});
buttonBookmarks.addEventListener('click', function () {
  index.classList.add('hide');
  create.classList.add('hide');
  profile.classList.add('hide');
  bookmarks.classList.remove('hide');
});
buttonCreate.addEventListener('click', function () {
  bookmarks.classList.add('hide');
  index.classList.add('hide');
  profile.classList.add('hide');
  create.classList.remove('hide');
});
buttonProfile.addEventListener('click', function () {
  bookmarks.classList.add('hide');
  create.classList.add('hide');
  index.classList.add('hide');
  profile.classList.remove('hide');
});