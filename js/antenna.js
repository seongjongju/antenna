//로딩화면
window.addEventListener('load', function () {
  /* alert("이 페이지는 포트폴리오 제출 용입니다.") */
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

//index
/* a태그 클릭 이벤트 차단 */
$('.feed_swiper .swiper-slide > a').click(function (e) {
  e.preventDefault();
});
/* a태그 클릭 이벤트 차단 */

/* feed_slide */
var swiper = new Swiper(".feed_swiper", {
    // 슬라이드의 기본 설정
    watchSlidesProgress: true,
    autoplay: {
      delay: 3000, // 지연 시간을 0으로 설정하여 즉시 시작
      disableOnInteraction: false, // 사용자 상호작용 후에도 자동 슬라이드 계속
    },
    loop: true, // 슬라이드가 끝나면 처음으로 돌아가도록 설정
  
    // 반응형 설정
    breakpoints: {
      375: {
        slidesPerView: 2, // 모바일
      },
      1024: {
        slidesPerView: 3, // 태블릿
      },
      1440: {
        slidesPerView: 4, // 노트북
      },
      1441: {
        slidesPerView: 5, // pc
      }
    },
  });
/* feed_slide */

/* artist Initialize Swiper */
var swiper = new Swiper(".artist_swiper", {
    // 슬라이드의 기본 설정
    watchSlidesProgress: true,
    autoplay: {
      delay: 3000, // 지연 시간을 0으로 설정하여 즉시 시작
      disableOnInteraction: false, // 사용자 상호작용 후에도 자동 슬라이드 계속
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
    loop: true, // 슬라이드가 끝나면 처음으로 돌아가도록 설정
  
    // 반응형 설정
    breakpoints: {
      375: {
        slidesPerView: 2, // 모바일
      },
      1024: {
        slidesPerView: 3, // 태블릿
      },
      1440: {
        slidesPerView: 4, // 노트북
      },
      1441: {
        slidesPerView: 5, // pc
      }
    }
  });
/* artist Initialize Swiper */
//index

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


