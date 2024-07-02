var username = document.getElementById('username')
var name_err = document.getElementById('name_err')

var email = document.getElementById('email')
var email_err = document.getElementById('email_err')
var email_regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function signup() {
  if (username.value == "") {
    name_err.innerHTML = "put your name"
    username.style.border = "1px solid red"
    username.focus()
    return false
  }

  if (email.value == "") {
    email_err.innerHTML = "put your email"
    email.style.border = "1px solid red"
    email.focus()
    return false
  }
  if (!email_regex.text(email.value)) {
    email_err.innerHTML = "put your email"
    email.style.border = "1px solid red"
    email.focus()
    return false
  }
}


$(function () {
  $('.show').on('click',function(){
    $('.slidebar').css('left','0px')
  })
  $('.close').on('click',function(){
    $('.slidebar').css('left','-100%')
  })
  // $('.btt').on('click',function(){
  //   $('html,body').animate({scrollTop:0},1000)
  // })

  $('.team-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover:false,
    prevArrow:".left_arrow",
    nextArrow:".right_arrow",
  });

  $('.brand_wrepper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  });
  // $(window).on('scroll',function(){
  //   var scroll=(this).scrollTop()
  //   if (scroll >50) {
  //     $('.btt').fadeIn(500)
  //   }
  //   else {
  //     $('.btt').fadeOut(500)
  //   }
  // });
});
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})