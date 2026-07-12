/**
 * Progressive navigation enhancement for the branding preview.
 *
 * Native anchors, target-based CSS, and the checkbox menu keep the preview
 * usable without JavaScript. This layer adds active-section tracking,
 * aria-current, and automatic mobile-menu closing.
 */

(function () {
  'use strict';

  document.documentElement.classList.add('js-enabled');

  const menuToggle = document.getElementById('previewMenuToggle');
  const menuToggleLabel = document.querySelector('label[for="previewMenuToggle"]');
  const navMenu = document.getElementById('previewMenu');
  const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];
  const sections = document.querySelectorAll('main section[id]');

  const setActiveNav = function (id) {
    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      const isActive = id === 'top'
        ? href === './index.html'
        : href === '#' + id;

      link.classList.toggle('is-active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  setActiveNav('top');

  const setHomeAtTop = function () {
    if (window.scrollY <= 4) {
      setActiveNav('top');
    }
  };

  window.addEventListener('scroll', setHomeAtTop, { passive: true });
  setHomeAtTop();

  if (menuToggle && menuToggleLabel) {
    menuToggleLabel.addEventListener('click', function (event) {
      event.preventDefault();
      menuToggle.checked = !menuToggle.checked;
      menuToggleLabel.setAttribute('aria-expanded', String(menuToggle.checked));
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (menuToggle) {
        menuToggle.checked = false;
      }

      if (menuToggleLabel) {
        menuToggleLabel.setAttribute('aria-expanded', 'false');
      }

      const href = link.getAttribute('href');
      if (href === './index.html') {
        setActiveNav('top');
      } else if (href && href.startsWith('#')) {
        setActiveNav(href.slice(1));
      }
    });
  });

  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(function (entries) {
      if (window.scrollY <= 4) {
        setActiveNav('top');
        return;
      }

      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, {
      rootMargin: '-60px 0px -70% 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }
})();
