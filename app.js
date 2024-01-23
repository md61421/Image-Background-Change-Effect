let imgBox = document.querySelector(".img__box");
let imgWrap = document.querySelector(".img__wrap");
let originalImg = document.querySelector("#originalImg");
let line = document.querySelector("#line");

originalImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = (e) => {
  let boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};

function handleMoveEvent(e) {
  const touch = e.touches ? e.touches[0] : e;

  let boxWidth = touch.pageX - leftSpace + "px";

  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
}

imgBox.addEventListener("touchmove", handleMoveEvent);
