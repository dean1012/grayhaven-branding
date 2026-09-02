/** Preview-only behavior that keeps illustrative forms inert. */
(function () {
  'use strict';

  document.querySelectorAll('form[data-preview-noop]').forEach(
    function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
      });
    }
  );
})();
