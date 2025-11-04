// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Add loading animation
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const heroIllustration = document.querySelector('.hero-illustration');
  if (heroIllustration) {
    heroIllustration.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Add hover effects to cards
document.querySelectorAll('.card, .service-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add click effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .btn {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#dc3545';
      isValid = false;
    } else {
      input.style.borderColor = '#E9ECEF';
    }
  });
  
  return isValid;
}

// Add form validation to all forms (excluding Firebase forms)
document.querySelectorAll('form:not(#career-mobile-form):not(#career-desktop-form):not(#grievance-form):not(#contact-form)').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm(this)) {
      // Form is valid, you can submit it
      console.log('Form is valid');
      // Add your form submission logic here
    }
  });
});

// Grievance upload filename reflection
document.addEventListener('change', function(e){
  const input = e.target.closest('.upload-input');
  if(input){
    const wrapper = input.closest('.upload-group');
    if(wrapper){
      const nameField = wrapper.querySelector('.upload-filename');
      if(nameField){
        nameField.value = input.files && input.files.length ? input.files[0].name : '';
      }
    }
  }
});

// ===== PAGE LOADER =====
window.addEventListener('load', function(){
  const loader = document.querySelector('.page-loader');
  if(loader){
    setTimeout(function(){
      loader.classList.add('hidden');
      setTimeout(function(){
        loader.remove();
      }, 300);
    }, 500);
  }
});

// Show loader on page navigation start (if using SPA-like behavior)
if(document.querySelector('.page-loader')){
  window.addEventListener('beforeunload', function(){
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    document.body.appendChild(loader);
  });
}

// ===== Inline PDF previews for Regulatory certificates =====
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cert-card[data-pdf]');
  cards.forEach(card => {
    const pdfUrl = card.getAttribute('data-pdf');
    const thumb = card.querySelector('.cert-thumb');
    const link = card.querySelector('.btn-download');
    if (pdfUrl && thumb) {
      // Render a lightweight inline PDF preview (first page, no chrome)
      const iframe = document.createElement('iframe');
      iframe.className = 'cert-preview';
      iframe.src = `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=auto,100`;
      thumb.innerHTML = '';
      thumb.appendChild(iframe);
    }
    if (link && pdfUrl) {
      link.href = pdfUrl;
      link.setAttribute('rel', 'noopener');
      link.setAttribute('target', '_blank');
      // Optional: add download attribute if you prefer a direct download
      // link.setAttribute('download', '');
    }
  });
});

