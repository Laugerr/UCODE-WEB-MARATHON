let output = document.querySelector('fieldset');
let textarea = document.getElementsByTagName('textarea');
let buttons = document.querySelectorAll('input');
load();
function phone() {
    setCookie('phone', 1*getCookie('phone') + 1);
    let number = textarea[0].value;
    if (!(/[\d]{10}/.test(number))) {
        output.innerHTML = "invalid phone number";
        return;
    }
    output.innerHTML = number.slice(0, 3) + '-' + number.slice(3, 6) + '-' + number.slice(6);
}
function count_word() {
    let count = textarea[1].value.match(new RegExp('\\b'+textarea[0].value+'\\b', 'g')) || [];
    output.innerHTML = 'Word count: '+count.length;
    setCookie('count', 1*getCookie('count') + 1);
}
function replace() {
    output.innerText = textarea[1].value.replaceAll(/\S*(\w+)\S*/g, textarea[0].value+' ');
    setCookie('replace', 1*getCookie('replace') + 1)
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : 0;
}
function setCookie(name, value) {
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
}
function load() {
    buttons[0].value = "To phone number ["+getCookie('phone')+']';
    buttons[1].value = "Word count ["+getCookie('count')+']';
    buttons[2].value = "Word replace ["+getCookie('replace')+']';
}