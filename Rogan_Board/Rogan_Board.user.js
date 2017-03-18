// ==UserScript==
// @name        Rogan Board
// @namespace   http://forums.joerogan.net/
// @description Thread mod.
// @version     0.0.1
// @grant       GM_getResourceURL
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @include     http://forums.joerogan.net/*
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// @require     http://js.nicedit.com/nicEdit-latest.js
// @resource    rogan https://raw.githubusercontent.com/AmishNazi/AlienPoop/master/Rogan_Board/rogan.css
// @run-at      document-start
// ==/UserScript==

GM_addStyle(GM_getResourceText('rogan'));
$(document).ready(function () {
    $.expr[':'].textEquals = function (a, i, m) {
    return $(a).text().match('^' + m[3] + '$');
  };
    $("body").fadeIn(1500);
    var tits  = 'https://raw.githubusercontent.com/AmishNazi/AlienPoop/master/Rogan_Board/80085.jpg';
    var panel = 'https://raw.githubusercontent.com/AmishNazi/AlienPoop/master/Rogan_Board/panel.png';
  $('#vbulletin_css').remove();
  $('iframe').removeAttr('height');
  $('iframe').removeAttr('width');
  $('iframe').css('max-width', '100%');
  $('#vB_Editor_QR_textarea').removeAttr('cols');
  $('#vB_Editor_QR_textarea').removeAttr('rows');
  $('.page').css('background-image', 'url("' + panel + '")');
  $('#vB_Editor_QR').css('background-image', 'url("' + panel + '")');
  $('html').css('background-image', 'url("' + tits + '")');
  $('.posts').removeAttr('style');
  $('.bigusername').removeAttr('style');
  $('.bigusername').parent().css('font-size', '18px');
  $('tbody[id="qr_error_tbody"]').toggle();
  $('tbody[id="collapseobj_forumrules"]').toggle();
  $('div:textEquals("Quote:")').next().css('border', 'dashed');
  $('div:textEquals("Quote:")').next().css('border-width', '1.25px');
  $('div:textEquals("Quote:")').next().css('margin-bottom', '16px');
  $('img[title="Reply With Quote"]').replaceWith('<button class="fa fa-mail-reply"></button>');
  $('img[title="Multi-Quote This Message"]').addClass('fa');
  $('img[title="Quick reply to this message"]').replaceWith('<button class="fa fa-rocket"></button>');
  $('img[title="Edit/Delete Message"]').replaceWith('<button class="fa fa-pencil-square-o"></button>');
  $('html').css('visibility', 'visible');
  $('tbody#qr_error_tbody').detach();
  $(".thead:contains('PM')").wrapInner("<div class=date></div>");
  $(".thead:contains('AM')").wrapInner("<div class=date></div>");
  $('map[name="vb_headmap"]').remove();
    $('pre.alt2').attr('style');
    $('pre.alt2').removeAttr('style').toggleClass('alt2');
});
