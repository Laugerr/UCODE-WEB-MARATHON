let rombs = document.querySelectorAll('.stone');
for (let i = 0; i < 6; i++) {
  rombs[i].setAttribute('click', '0');
}
rombs[0].setAttribute('click', '1');
function drag(romb) {
  romb.onmousedown  = function mousedown(event) { 
    if (romb.getAttribute('click') == '0') {
      romb.addEventListener('mouseup',()=> {
      romb.style.border = 'none';
      romb.setAttribute('click', '1');
      });
    }
    else {
      let top = event.pageY;
      let left = event.pageX;
      event.preventDefault();
      romb.style.zIndex = 1000;

      function mouse_move(event) {
        romb.style.left = event.pageX - romb.offsetWidth / 2 + 'px';
        romb.style.top = event.pageY - romb.offsetHeight / 2 + 'px';
      }
      document.addEventListener('mousemove', mouse_move);
      romb.addEventListener('mouseup',(event)=> {
        document.removeEventListener('mousemove', mouse_move);
        if (top == event.pageY && left == event.pageX) {
          romb.setAttribute('click', '0');
          romb.style.border = '3px dashed black';
        }
      });
    }
  }
}

for (let i = 0; i < 6; i++) {
    drag(rombs[i]);
}