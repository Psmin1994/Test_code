// 변수 지정
var sliderWrapper = document.getElementsByClassName('container'), //클래스명 container
    sliderContainer = document.getElementsByClassName('slider_container'), //클래스명 slider-container
    slides = document.getElementsByClassName('slide'), //클래스명 slide
    slideCount = slides.length, //슬라이드의 개수
    currentIndex = 0, //현재 슬라이드 인덱스
    topHeight = 0, //슬라이드 중 제일 큰 높이
    navPrev = document.getElementById('prev'), //아이디명 prev
    navNext = document.getElementById('next'); //아이디명 next


// 슬라이더 높이 확인하기  - 높이 구하는 함수 만들기

function calculaterTallestSlide() {
    for (var i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) topHeight = slides[i].offsetHeight + 1;
        console.log(topHeight);
    }

    sliderWrapper[0].style.height = topHeight + 'px';
    sliderContainer[0].style.height = topHeight + 'px';
}

calculaterTallestSlide();

// 슬라이드 가로로 배열하기 - 반목문으로 left값 주기
for (var i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 100 + '%';
}

// 슬라이더 이동 함수
function goToSlide(idx) {
    sliderContainer[0].style.left = idx * -100 + '%';
    sliderContainer[0].classList.add('animated');
    currentIndex = idx;

    // updateNav(); // 버튼 비활성화 함수 삭제
}

// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentIndex == 0) {
        goToSlide(slideCount - 1);
    } else {
        goToSlide(currentIndex - 1);
    }
});

navNext.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentIndex == slideCount - 1) {
        goToSlide(0);
    } else {
        goToSlide(currentIndex + 1);
    }
});

// 버튼기능 업데이트 함수 - 처음과 끝에 버튼 비활성화
function updateNav() {
    if (currentIndex == 0) {
        navPrev.classList.add('disabled');
    } else {
        navPrev.classList.remove('disabled');
    }

    if (currentIndex == slideCount - 1) {
        navNext.classList.add('disabled');
    } else {
        navNext.classList.remove('disabled');
    }
}

//첫 번쨰 슬라이드 먼저 보이도록 하기
goToSlide(0);