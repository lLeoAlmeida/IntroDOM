/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });

    const btElement = document.getElementById("SelectElement");
    const btMC = document.getElementById("SelectMani");
    const btAtt = document.getElementById("SelectAtt");
    const btEvent = document.getElementById("SelectEvent");
    
    //firebase
    const btCreateProject = document.getElementById("SelectCP");
    const btAuth = document.getElementById("SelectConfigAuth"); 
  

    btElement.addEventListener("click", function () {
        scrollToSection("TextSL");
    });

    btMC.addEventListener("click", function () {
        scrollToSection("TextMC");
    });

    btAtt.addEventListener("click", function () {
        scrollToSection("TextATT");
    });

    btEvent.addEventListener("click", function () {
        scrollToSection("TextEvent");
    });

    //Firebase
    btCreateProject.addEventListener("click", function () {
        scrollToSection("CP");
    });

    btAuth.addEventListener("click", function () {
        scrollToSection("ConfigAuth");
    });


    function scrollToSection(sectionId) {
        const target = document.getElementById(sectionId);
        const offset = target.offsetTop;

        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
        });
    }
})


/*
  <a href="#!"
              ><img
                class="img-fluid"
                src="assets/img/post-sample-image.jpg"
                alt="..."
            /></a>
            <span class="caption text-muted"
              >To go places and do things that have never been done before –
              that’s what living is all about.</span
            >
*/