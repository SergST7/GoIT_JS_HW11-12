/**
 * Created by SergST on 06.09.2016.
 */
"use strict";

$(function () {

  $('.carousel-list').myCarousel();

  var data = {
    name: 'Стельмах Сергей Иванович',
    fotoSrc: "img/MyFoto.png",
    job: 'Студент заборостроительного университета',
    goal: 'Хочу учить фронтенд, потому что:',
    reasons: [
      'Заборы строить не интерестно',
      'Платят мало',
      'Приходится работать по ночам'
    ],
    phoneTitle: 'Мой контактный телефон',
    phone: '+380503665036',
    webTitle: 'Мой профиль в контакте',
    vkLink: "http://vk.com/id174074548",
    feedTitle:'Мой фидбек:',
    feed:'Если нужно могу построить вам забор'
  };

  var tmplLodush = _.template($('#authorInfo').html());

  $('button').click(function () {
    var result;
    $(this).hide();
    if(confirm('Отрендерить страницу с помощью шаблонизатора Джона Резига?')){
      result = tmpl("authorInfo", data);
    } else {
      result = tmplLodush(data);
    }

    $('.wrapper').append( result );
  });
  
});
