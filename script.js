var spanerger = document.querySelector(".spaner");
var naverlist = document.querySelector(".naver");
var links = document.querySelector(".naver li")

spanerger.addEventListener("click", function(){
    this.classList.toggle("click");
    naverlist.classList.toggle("open");
});