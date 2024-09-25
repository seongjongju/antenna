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

/* a태그 클릭 이벤트 차단 */
$('.inquiry > a').click(function (e) {
  e.preventDefault();
});
/* a태그 클릭 이벤트 차단 */

/* shorts */
var swiper = new Swiper(".shorts_slide", {
  spaceBetween: 50,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      768: {
        slidesPerView: 2, // 태블릿
      },
      1024: {
        slidesPerView: 3, // 태블릿
      },
      1280: {
        slidesPerView: 4, // pc
      },
      1441: {
        slidesPerView: 5, // pc
      }
    },
  });

  var swiper = new Swiper(".m_shorts_slide", {
    direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
/* shorts */

