/* jshint browser: true */
/* global $ */

$(function() {
  'use strict';

  $('.sign-up input[type="email"]').select();

  $('body').removeClass('preload');

  setTimeout(function() {
    $('.main-wrapper').removeClass('preload');
  }, 900);

});
