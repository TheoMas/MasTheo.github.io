$(window).on('load', function() {

    $(this).impulse();
    $.fn.impulse.default.tempo = 1;
    $.fn.impulse.default.range = 2000;
    $.fn.impulse.default.leap = 5;
    $.fn.impulse.default.curb = 15;
  });

  /* from http://ataredo.com/morphology/lucidscroll/ */