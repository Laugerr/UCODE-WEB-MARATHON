document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    var now = document.getElementById('now');
    var images = document.getElementsByTagName('img');
    var collection;
    let check = true;
        
    function lazyload () {
        if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }    
          
        lazyloadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
              
            lazyloadImages.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {                
                    img.src = img.dataset.src;
                    if(!imageExists(img.src)){
                        img.src= "assets/images/Loader.gif";
                    }
                    img.classList.remove('lazy');
                    collection = document.getElementsByClassName('lazy');
                    now.innerHTML = '';
                    now.insertAdjacentHTML('beforeend', `${images.length - collection.length}`);
                    if (check) {
                        if (collection.length === 0) {
                            check = false;
                            let p = document.getElementsByTagName('p')[0];
                            p.classList.add('done');
                            setTimeout(function() {
                                p.style.display = 'none';
                            }, 3000);
                        }
                    }
                    
                  }
            });
            if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
                
            }
        }, 200);
        }
        
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    });
    

    function imageExists(image_url){
        var http = new XMLHttpRequest();
        http.open('HEAD', image_url, false);
        http.send();
        return http.status != 404;
    }