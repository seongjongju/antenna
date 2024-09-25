//로딩화면
window.addEventListener('load', function () {
    const wrap = document.querySelector('#wrap')
    const pan = document.querySelector('#pan');

    wrap.style.transition = 'all 0.4s 0.4s'
    wrap.style.opacity = '1'
    pan.style.transition = 'all 0.4s'
    pan.style.opacity = '0'
    setTimeout(() => {
        pan.style.display = 'none'
    }, 400);
});
//로딩화면

//artist_sub
/* album_slide */
var swiper = new Swiper(".album_slide", {
    watchSlidesProgress: true,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    // 반응형 설정
    breakpoints: {
        375: {
          slidesPerView: 1, // 모바일
        },
        480: {
          slidesPerView: 2, // 태블릿
        },
        1024: {
          slidesPerView: 3, // 태블릿 가로, 노트북
        },
        1441: {
          slidesPerView: 4, // pc
        }
      }
    });
/* album_slide */

/* video_slide */
var swiper = new Swiper(".video_slide", {
    watchSlidesProgress: true,
    spaceBetween: 80,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    // 반응형 설정
    breakpoints: {
        375: {
          slidesPerView: 1, // 태블릿, 모바일
        },
        1024: {
          slidesPerView: 2, // 노트북
        },
        1441: {
          slidesPerView: 3, // pc
        }
      }
    });
/* video_slide */

/* concert_silde */
var swiper = new Swiper(".concert_slide", {
    spaceBetween: 45,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    // 반응형 설정
    breakpoints: {
        375: {
          slidesPerView: 2, // 모바일
        },
        768: {
          slidesPerView: 3, // 태블릿
        },
        1024: {
          slidesPerView: 4, // 노트북
        },
        1440: {
          slidesPerView: 5, // pc
        }
      }
    });
/* concert_silde */

/* contents_slide */
var swiper = new Swiper(".contents_slide", {
    spaceBetween: 45,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    // 반응형 설정
    breakpoints: {
        375: {
          slidesPerView: 2, // 모바일
        },
        768: {
          slidesPerView: 3, // 태블릿
        },
        1024: {
          slidesPerView: 4, // 노트북
        },
        1440: {
          slidesPerView: 5, // pc
        }
      }
    });
/* contents_slide */
//artist_sub

/* site > a 태그 마우스 이벤트 차단 */
$('.site > a').click(function (e) {
  e.preventDefault();
});
/* site > a 태그 마우스 이벤트 차단 */

//tap
/* 변수 */
const tapKey = $('.title a');
/* 변수 */

$('.title a').click(function (e) {
    e.preventDefault();
});

$(function() {
    tapKey.each(function(index) {
        const $this = $(this);
        
        $this.on('click', function() {
            /* tap1 */
            if(index == 0) {
                $('.title a:nth-child(1)').addClass('active')
                $('.tap1').addClass('on')

                $('.title a:nth-child(2), .title a:nth-child(3), .title a:nth-child(4)').removeClass('active')
                $('.tap2, .tap3, .tap4').removeClass('on')
                 /* tap1 */
                  /* tap2 */
            } else if(index == 1) {
                $('.title a:nth-child(2)').addClass('active')
                $('.tap2').addClass('on')

                $('.title a:nth-child(1), .title a:nth-child(3), .title a:nth-child(4)').removeClass('active')
                $('.tap1, .tap3, .tap4').removeClass('on')
                 /* tap2 */
                  /* tap3 */
            } else if(index == 2) {
                $('.title a:nth-child(3)').addClass('active')
                $('.tap3').addClass('on')

                $('.title a:nth-child(1), .title a:nth-child(2), .title a:nth-child(4)').removeClass('active')
                $('.tap1, .tap2, .tap4').removeClass('on')
                /* tap3 */
                /* tap4 */
            } else if(index == 3) {
                $('.title a:nth-child(4)').addClass('active')
                $('.tap4').addClass('on')

                $('.title a:nth-child(1),  .title a:nth-child(2), .title a:nth-child(3)').removeClass('active')
                $('.tap1, .tap2, .tap3').removeClass('on')
                /* tap4 */
            }
        });
    });
});
//tap

/* 태블릿, 모바일 snb */
$('.menu').click(function (e) {
    e.preventDefault();
});
$('.snb_back').click(function (e) {
    e.preventDefault();
});

const btnMenu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    let snb = document.querySelector('.m_nav');
    snb.classList.add('active');
});
const back = document.querySelector('.snb_back');

back.addEventListener('click', () => {
    let snb = document.querySelector('.m_nav');
    snb.classList.remove('active');
});
/* 태블릿, 모바일 snb */