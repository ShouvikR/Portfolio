

// Menu hide & show 

const navMenu = document.getElementById('nav-menu');
    navToggle = document.getElementById('nav-toggle');
    navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }


    // Remove menu on mobile screen
    const navLink = document.querySelectorAll('.nav-link');

    function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu');
    }
    navLink.forEach((n) => n.addEventListener('click', linkAction));


    // Skills toggle

    const skillsContent = document.getElementsByClassName('skills-content');
    skillsHeader = document.querySelectorAll('.skills-header')

    function toggleSkills() {
        let itemClass = this.parentNode.className;

        for(i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills-content skills-close'
        }

        if(itemClass === 'skills-content skills-close') {
            this.parentNode.className = 'skills-content skills-open'
        }

    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
    })

    // Qualification area

    const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

      tabs.forEach(tab => {
          tab.addEventListener('click', () => {
              const target = document.querySelector(tab.dataset.target)

              tabContents.forEach(tabContent => {
                  tabContent.classList.remove('qualification-active')
              })

              target.classList.add('qualification-active')

              tabs.forEach(tab => {
                  tab.classList.remove('qualification-active');
              })
              tab.classList.add('qualification-active');

          })
      })

    //   Project swiper section

     let swiper = new Swiper(".project-container", {
       cssMode: true,
       loop: true,
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
       mousewheel: true,
       keyboard: true,
     });