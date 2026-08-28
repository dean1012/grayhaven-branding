/**
 * Progressive navigation enhancement for the branding preview.
 *
 * Native anchors, target-based CSS, and the details menu keep the preview
 * usable without JavaScript. This layer adds active-section tracking,
 * aria-current, and automatic mobile-menu closing.
 */

(function () {
  'use strict';

  document.documentElement.classList.add('js-enabled');

  const mobileMenu = document.getElementById('previewMobileMenu');
  const navLinks = document.querySelectorAll(
    '.navbar-links a, .component-nav a, .component-nav-menu a'
  );
  const sections = document.querySelectorAll('main section[id]');
  const defaultSection = document.body.dataset.previewDefaultSection || 'top';

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

  setActiveNav(defaultSection);

  const header = document.querySelector('header');

  const updateActiveNav = function () {
    if (window.scrollY <= 4) {
      setActiveNav(defaultSection);
      return;
    }

    const documentHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const bottomGap = documentHeight - (window.scrollY + window.innerHeight);
    const bottomThreshold = Math.max(64, window.innerHeight * 0.06);

    if (sections.length > 0 && bottomGap <= bottomThreshold) {
      setActiveNav(sections[sections.length - 1].id);
      return;
    }

    const headerOffset = header ? header.getBoundingClientRect().height : 0;
    const activationOffset = Math.min(320, window.innerHeight * 0.24);
    const activationPoint = window.scrollY + headerOffset + activationOffset;
    let activeSection = defaultSection;

    sections.forEach(function (section) {
      if (section.offsetTop <= activationPoint) {
        activeSection = section.id;
      }
    });

    setActiveNav(activeSection);
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav);
  updateActiveNav();

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (mobileMenu) {
        mobileMenu.removeAttribute('open');
      }

      const href = link.getAttribute('href');
      if (href === './index.html') {
        setActiveNav(defaultSection);
      } else if (href && href.startsWith('#')) {
        setActiveNav(href.slice(1));
      }
    });
  });
})();
