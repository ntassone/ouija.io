/* jshint browser: true */
/* global $ */

$(function() {
  'use strict';

  //Menu Toggle
  var $menu = $('.main-nav ul'),
      $menulink = $('.menu-toggle');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });

/* Clipboard functionality */

  var _ = window._;
  var $clipboard = $('.copy-code-snip');
  var ZeroClipboard = window.ZeroClipboard;

  var clipper = new ZeroClipboard($clipboard, {
    moviePath: 'js/vendor/ZeroClipboard.swf'
  });

  clipper.on('complete', function() {
    var self = this;
    $(self).addClass('copied');
    setTimeout(function() {
      $(self).removeClass('copied');
    }, 1000);
  });

  clipper.on('noflash', function() {
    $clipboard.each(function() {
      var newEl = this.cloneNode(true);
      this.parentNode.replaceChild(newEl, this);
    });
    $clipboard.text('Select all').click(function() {
      $(this).prev()[0].select();
    });
  });

  $(window).resize(clipper.reposition);


});
