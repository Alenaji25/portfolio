document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const options = {
        root: null,
        threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    sections.forEach(section => observer.observe(section));
});
// Show or Hide Scroll-to-Top Button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  
  // Smooth Scroll to Top
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    loader.style.display = 'none';
});
function scrollToSection(event, sectionId) {
    event.preventDefault(); // 💥 stops the default # action
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Prevent restoring scroll on refresh
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
  
function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgElement.src;
    lightbox.style.display = 'flex';
    
    // Slight delay to trigger CSS animation
    setTimeout(() => {
      lightbox.classList.add('active');
    }, 50);
  }
  document.addEventListener('mousemove', e => {
    const { clientX, clientY } = e;
    document.body.style.backgroundPosition = `${clientX * 0.01}px ${clientY * 0.01}px`;
  });
  const cursor = document.querySelector('.cursor-dot');

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      this.appendChild(ripple);
  
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
      
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    // Give time for zoom out animation before fully hiding
    setTimeout(() => {
      lightbox.style.display = 'none';
    }, 400);
  }
 // Handle Query Form Submission
document.addEventListener('DOMContentLoaded', function () {
    const queryForm = document.getElementById('query-form');
  
    if (queryForm) {
      queryForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value,
        };
  
        fetch('/send-query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (response.ok) {
            alert('Thank you! Your query has been sent.');
            queryForm.reset();
          } else {
            alert('Failed to send your query. Please try again later.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        });
      });
    }
  });
  
