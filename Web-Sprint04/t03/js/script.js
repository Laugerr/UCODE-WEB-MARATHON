let index = 1;
autoSlider();

function nextSlide(n) {
    currentSlide(index += n);
}

function currentSlide(n) {
    let i;
    let slides = document.getElementsByClassName('slides');
    if (n > slides.length)
        index = 1;
    if (n < 1)
        index = slides.length;
    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    slides[index - 1].style.display = "block";
}

function autoSlider() {
    let i;
    let slides = document.getElementsByClassName('slides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {index = 1}
        slides[index - 1].style.display = "block";
    setTimeout(autoSlider, 3000);
}