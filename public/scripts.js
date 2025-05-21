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
  // Check if a lightbox already exists and remove it
  const existingLightbox = document.getElementById('lightbox');
  if (existingLightbox) {
    existingLightbox.remove();
  }

  // Create new lightbox
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.position = 'fixed';
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  lightbox.style.display = 'flex';
  lightbox.style.alignItems = 'center';
  lightbox.style.justifyContent = 'center';
  lightbox.style.zIndex = 1000;

  // Create image element
  const fullImg = document.createElement('img');
  fullImg.src = imgElement.src;
  fullImg.style.maxWidth = '90%';
  fullImg.style.maxHeight = '90%';
  fullImg.style.border = '4px solid white';
  fullImg.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
  fullImg.style.borderRadius = '8px';

  // Close on click
  lightbox.addEventListener('click', () => {
    lightbox.remove();
  });

  lightbox.appendChild(fullImg);
  document.body.appendChild(lightbox);
}

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
  function showPopup(imgElement) {
  const wrapper = imgElement.parentElement;
  const popupBox = wrapper.querySelector('.popup-box');
  const popupImage = popupBox.querySelector('.popup-image');

  popupImage.src = imgElement.src;
  popupBox.style.display = 'block';

  // Trigger animation
  setTimeout(() => {
    popupBox.classList.add('visible');
  }, 10);
}

function closePopup(closeBtn) {
  const popupBox = closeBtn.parentElement;

  popupBox.classList.remove('visible');
  setTimeout(() => {
    popupBox.style.display = 'none';
  }, 300);
}
