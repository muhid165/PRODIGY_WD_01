

window.addEventListener('scroll', function() {
    var header = document.querySelector('.sticky-header');
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  

window.addEventListener('scroll',function(){
  var myDropDown = document.querySelector('.dropdown');
  if(this.window.scrollY > 0) {
    myDropDown.classList.add('sticky');
  } else {
    myDropDown.classList.remove('sticky');
  }
});