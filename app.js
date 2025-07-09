
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });

    // Form submission
    //const contactForm = document.querySelector('.contact-form form');
    
    // contactForm.addEventListener('submit', (e) => {
    //   e.preventDefault();
      
    //   // Get form values
    //   const name = document.getElementById('name').value;
    //   const email = document.getElementById('email').value;
    //   const subject = document.getElementById('subject').value;
    //   const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      // For demonstration, we'll just log it and show an alert
    //   console.log({ name, email, subject, message });
      
    //   alert('Thank you for your message! I will get back to you soon.');
    //   contactForm.reset();
    // });

    // Mail submit code here

    const form = document.querySelector('.contact-form form');
    const button = document.getElementById('submitBtn');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      button.innerText = "Submitting...";
      //status.innerText = "";

      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          button.innerText = "Submitted!";
        //   status.innerText = "Thank you! Your message has been sent.";
          form.reset();
        } else {
          button.innerText = "Submit";
        //   status.innerText = "Failed to send. Try again.";
        }
      })
      .catch(error => {
        console.error(error);
        button.innerText = "Submit";
        // status.innerText = "Something went wrong. Please try later.";
      });
    });
// JavaScript for handling the mobile navigation menu
document.querySelector('.fas.fa-bars').addEventListener('click', function () {
    const navMenu = document.querySelector('nav ul');
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
    } else {
        navMenu.classList.add('show');
    }
});

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    }
    
    // Create intersection observer to trigger animation when skills section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(document.getElementById('skills'));