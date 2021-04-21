const btnMoMenu = document.querySelector('.btn-mo-menu');
const moMenu = document.querySelector('.mo-menu');
const body = document.querySelector('body');
const menuListLink = document.querySelectorAll('.menu-list .link');
const mMenuListLink = document.querySelectorAll('.mo-menu-list .link');


// 모바일 메뉴 열기/닫기
btnMoMenu.addEventListener('click', function(){
  btnMoMenu.classList.toggle('is-active');
  moMenu.classList.toggle('is-active');
  body.classList.toggle('is-active');
});

// 메뉴 인터렉션
for(let i = 0; i < menuListLink.length; i++) {
  menuListLink[i].addEventListener('click', function(event){
    for(let j = 0; j < menuListLink.length; j++) {
      menuListLink[j].classList.remove('is-active');
    }
      event.target.classList.add('is-active');
  });

  mMenuListLink[i].addEventListener('click', function(event){
    for(let j = 0; j < mMenuListLink.length; j++) {
      mMenuListLink[j].classList.remove('is-active');
    }
      event.target.classList.add('is-active');
  });
};
