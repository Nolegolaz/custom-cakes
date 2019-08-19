(function () {
    'use strict';
    let control__left, control__right;
    control__left = document.querySelectorAll('.slider__control-left');
    control__right = document.querySelectorAll('.slider__control-right');
    
    for(var i = 0; i < control__right.length; i++) {
        control__right[i].addEventListener('click', goNextSlide);
    };

    for(var i = 0; i < control__left.length; i++) {
        control__left[i].addEventListener('click', goPreviousSlide);
    };

    function goNextSlide() {
        let currenSlide = this.parentNode.querySelectorAll('.slider__control');

        for (var i = 0; i < currenSlide.length; i++) {
            if (currenSlide[i].checked) {
                currenSlide = currenSlide[i];
            }
        };

        if (currenSlide.nextElementSibling.classList.contains('slider__control')) {
            currenSlide.checked = false;
            currenSlide.nextElementSibling.checked = true;

        }
    };

    function goPreviousSlide() {
        let currenSlide = this.parentNode.querySelectorAll('.slider__control');

        for (var i = 0; i < currenSlide.length; i++) {
            if (currenSlide[i].checked) {
                currenSlide = currenSlide[i];
            }
        };

        if(currenSlide.previousElementSibling) {
            currenSlide.checked = false;
            currenSlide.previousElementSibling.checked = true;
        };
    };
})();