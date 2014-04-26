/* jshint browser: true */
/* global $ */

$(function() {
  'use strict';

  $('.sign-up input[type="email"]').select();

  setTimeout(function() {
    $('body').removeClass('preload');
  });

});
