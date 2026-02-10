// navigation bar function
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else{
        menuBtn.className = "nav-menu";
    }
}

// Close mobile menu when clicking nav links
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('myNavMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove responsive class to hide menu
            if (navMenu.classList.contains('responsive')) {
                navMenu.classList.remove('responsive');
            }
        });
    });
});


// add shadow on navigation bar while scrolling
      window.onscroll = function() {headerShadow()};

      function headerShadow() {
        const navHeader =document.getElementById("header");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";    
        navHeader.style.height = "70px";    
        navHeader.style.lineHeight = "70px";    
      
        } else {
              
        navHeader.style.boxShadow = "none";    
        navHeader.style.height = "90px";    
        navHeader.style.lineHeight = "90px"; 
        }
    }

    
     

// typing effect
        document.addEventListener('DOMContentLoaded', function() {
            var typingEffect = new Typed(".typedText", {
                strings: ["a Web Developer.", "a Graphic Designer.", "an Ethical Hacker."],
                loop: true,
                typeSpeed: 60,
                backSpeed: 60,
                backDelay: 2000
            });
        
});


// scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });



// home
  sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', {delay: 100});
    sr.reveal('.featured-text-info', {delay: 200});
    sr.reveal('.featured-text-btn', {delay: 200});
    sr.reveal('.social-icons', {delay: 200});
    sr.reveal('.featured-image', {delay: 300});
});
// project
document.addEventListener('DOMContentLoaded', function() {
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    reset: true
});

// Then your code - this is correct!
sr.reveal('.project-box', {interval: 200});
});

// About info
document.addEventListener('DOMContentLoaded', function() {
const srLeft = ScrollReveal({
   origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true 
});
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srLeft.reveal('.top-header',{delay: 100})

});
// control-form and .col 
document.addEventListener('DOMContentLoaded', function() {
const srRight = ScrollReveal({
   origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true 
});
srRight.reveal('.form-control',{delay: 100})
srRight.reveal('.col',{delay: 100})
});
// change active link

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.add('active-link')                                                                                       

        } else {
            document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Download CV button functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('button.btn:has(i.uil-file-alt)');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = './assets/docs/resumee_040033.pdf';
            link.download = 'resumee_040033.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
