  window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  // ハンバーガーアイコン
  function menuToggle(){
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('toggle');
    nav.classList.toggle("active")
    toggle.classList.toggle("active")}