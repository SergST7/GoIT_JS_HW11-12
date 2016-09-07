/**
 * Created by SergST on 06.09.2016.
 */
"use strict";

(function ($) {

  $.fn.myCarousel = function () {
    
   var self = this;
    var currentLeftVal = 0;
    var pixelsOffset = 125;
    var imagesCollection = this.find('li');
    var minimumOffset = - ((imagesCollection.length - 5) * pixelsOffset);
    var $body = $('body');

    if((this.length != 1)
        || (this.is(':not(ul)'))
        || (this.is(':not(.carousel-list)'))) return;


    this.wrap('<div class="carousel-wrap"></div>')
        .wrap('<div class="carousel-hider"></div>');

    // добавим  кнопки управления
    $('.carousel-wrap').append('<a class="prev" href="#">‹</a>' +
        '<a class="next" href="#">›</a>');

    //обработчики событий управления
    $('.prev').click(function () {
      if(currentLeftVal != 0) {
        currentLeftVal += pixelsOffset;
        self.animate({left : currentLeftVal + "px"}, 700);
      }
    });

    $('.next').click(function () {
      if(currentLeftVal != minimumOffset) {
        currentLeftVal -= pixelsOffset;
        self.animate({ left : currentLeftVal + "px"}, 700);
      }
    });

    imagesCollection.click(function () {
      var imageSrc = $(this).find('img').attr('src');
      var $overlay = $('<div class="overlay">');
      var $fancyWindow = $('<div class="fancyWindow"><img src="' + imageSrc +
          '"></div>');

      $body.append($overlay);
      $body.append($fancyWindow);

      $overlay.click(function () {
        $fancyWindow.remove();
        $overlay.remove();
      })

    });

    return this

  };

})(jQuery);