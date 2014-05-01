/* jshint browser: true */
/* global $ */

$(function() {
  'use strict';

  $('.sign-up input[type="email"]').select();

  $('body').removeClass('preload');

  setTimeout(function() {
    $('.main-wrapper').removeClass('preload');
  }, 900);

  //Tabs
  $("#tabs-content").find("[id^='tab']").hide();
  $("#tabs li:first").attr("id","current");
  $("#tabs-content #tab1").fadeIn();

  $('#tabs a').click(function(e) {
    e.preventDefault();
    if ($(this).closest("li").attr("id") == "current"){
     return;
    }
    else{
      $("#tabs-content").find("[id^='tab']").hide();
      $("#tabs li").attr("id","");
      $(this).parent().attr("id","current");
      $('#' + $(this).attr('name')).fadeIn();
    }
  });

});
