const clear = document.querySelector('.clear');
const add = document.querySelector('.add');
let notes = document.querySelector('.output-text');
let j = 0;

function toDay() {
  const date = new Date();
  let todate = date.getDate()<10?("0" + date.getDate()):date.getDate();
  let tomonth = date.getMonth()<10?("0" + date.getMonth()):date.getMonth();
  let tohours = date.getHours()<10?("0" + date.getHours()):date.getHours();
  let tominutes = date.getMinutes()<10?("0" + date.getMinutes()):date.getMinutes();
  let tosecond = date.getSeconds()<10?("0" + date.getSeconds()):date.getSeconds();
  const date3 = ` [${todate}.${tomonth}.${date.getFullYear()}, ${tohours}:${tominutes}:${tosecond}]`;
  return date3;
}
function translation() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.getItem(i.toString());
    if(i === 0) {
      notes.innerHTML = `--> ${key}`
    } else {
      notes.innerHTML += `<div>--> ${key}</div>`
    }
  }
}

function clearLocalStorage() {
  let question = confirm('Delete cookies?')
  if (question === true) {
    localStorage.clear();
    notes.innerHTML = '[Empty]';
  }
}

function getLocalStorage() {
  let textAreaValue = document.querySelector('.text-color').value;
  if (textAreaValue === "") {
    alert('It\'s empty. Try to input something in "Text input"')
  }else {
    localStorage.setItem( j.toString(), textAreaValue+toDay() );
    if (notes.innerHTML === '[Empty]') {
      notes.innerHTML = '';
      notes.insertAdjacentHTML('beforeend', `<div>--> ${localStorage.getItem(j.toString())}</div>`);
    }else {
      notes.insertAdjacentHTML('beforeend', `<div>--> ${localStorage.getItem(j.toString())}</div>`);
    }
    j++;
  }
}

if (localStorage.length === 0) {
  notes.innerHTML = '[Empty]';
} else {
  translation();
}

add.addEventListener('click', getLocalStorage);
clear.addEventListener('click', clearLocalStorage);