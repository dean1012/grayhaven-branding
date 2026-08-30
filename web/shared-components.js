/**
 * Optional progressive enhancements for shared Grayhaven Systems LLC web
 * components. Native controls remain usable without JavaScript.
 */
(function () {
  'use strict';

  async function copyText(value) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const fallback = document.createElement('textarea');
    fallback.value = value;
    fallback.setAttribute('readonly', 'true');
    fallback.className = 'clipboard-fallback';
    document.body.appendChild(fallback);
    fallback.select();
    const copied = document.execCommand('copy');
    fallback.remove();
    if (!copied) throw new Error('Clipboard copy was rejected');
  }

  document.addEventListener('click', function (event) {
    if (!(event.target instanceof Element)) return;

    const button = event.target.closest('[data-copy-target]');
    if (!(button instanceof HTMLButtonElement)) return;

    let target;
    try {
      target = document.querySelector(button.dataset.copyTarget || '');
    } catch {
      return;
    }
    const value = target && (target.dataset.copyValue || target.textContent.trim());
    if (!value) return;

    copyText(value).then(function () {
      const original = button.innerHTML;
      const originalLabel = button.getAttribute('aria-label');
      const originalTitle = button.getAttribute('title');
      button.innerHTML =
        '<i class="fa-solid fa-check" aria-hidden="true"></i>' +
        '<span class="visually-hidden">Copied</span>';
      button.setAttribute('aria-label', 'Copied');
      button.setAttribute('title', 'Copied');
      window.setTimeout(function () {
        button.innerHTML = original;
        if (originalLabel === null) button.removeAttribute('aria-label');
        else button.setAttribute('aria-label', originalLabel);
        if (originalTitle === null) button.removeAttribute('title');
        else button.setAttribute('title', originalTitle);
      }, 1800);
    }).catch(function () {
      window.prompt('Copy this value', value);
    });
  });

  function datetimeLocalNow(timeZone) {
    const values = new Intl.DateTimeFormat('en-CA', {
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(new Date()).reduce(function (result, part) {
      result[part.type] = part.value;
      return result;
    }, {});

    return values.year + '-' + values.month + '-' + values.day + 'T' +
      values.hour + ':' + values.minute + ':' + values.second;
  }

  document.querySelectorAll('[data-set-now-for]').forEach(function (button) {
    button.addEventListener('click', function () {
      const input = document.querySelector(button.dataset.setNowFor || '');
      if (!(input instanceof HTMLInputElement)) return;

      input.value = datetimeLocalNow(
        input.dataset.timezone ||
          Intl.DateTimeFormat().resolvedOptions().timeZone
      );
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  document.querySelectorAll('[data-verification-code]').forEach(
    function (group) {
      const inputs = Array.from(group.querySelectorAll('input'));

      function distributeDigits(value) {
        const digits = value.replace(/\D/g, '').slice(0, inputs.length);
        inputs.forEach(function (input, index) {
          input.value = digits[index] || '';
        });
        const focusIndex = Math.min(digits.length, inputs.length - 1);
        inputs[focusIndex].focus();
        inputs[focusIndex].select();
      }

      group.addEventListener('paste', function (event) {
        const clipboard = event.clipboardData;
        const digits = clipboard
          ? clipboard.getData('text').replace(/\D/g, '')
          : '';
        if (digits.length === inputs.length) {
          event.preventDefault();
          distributeDigits(digits);
        }
      });

      inputs.forEach(function (input, index) {
        input.addEventListener('input', function () {
          const digits = input.value.replace(/\D/g, '');
          if (digits.length > 1) {
            distributeDigits(digits);
            return;
          }
          input.value = digits;
          if (digits && index < inputs.length - 1) {
            inputs[index + 1].focus();
            inputs[index + 1].select();
          }
        });

        input.addEventListener('focus', function () { input.select(); });
        input.addEventListener('keydown', function (event) {
          if (event.key === 'Backspace' && !input.value && index > 0) {
            event.preventDefault();
            inputs[index - 1].value = '';
            inputs[index - 1].focus();
          } else if (event.key === 'ArrowLeft' && index > 0) {
            event.preventDefault();
            inputs[index - 1].focus();
          } else if (event.key === 'ArrowRight' && index < inputs.length - 1) {
            event.preventDefault();
            inputs[index + 1].focus();
          }
        });
      });
    }
  );

  document.addEventListener('click', function (event) {
    document.querySelectorAll('details.inline-edit-control[open]').forEach(
      function (details) {
        if (!details.contains(event.target)) details.removeAttribute('open');
      }
    );
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('details.inline-edit-control[open]').forEach(
      function (details) {
        details.removeAttribute('open');
      }
    );
  });

  document.querySelectorAll('.alert[data-auto-dismiss]').forEach(
    function (alert) {
      window.setTimeout(function () {
        alert.classList.add('is-dismissing');
        window.setTimeout(function () { alert.remove(); }, 300);
      }, 4500);
    }
  );

  document.querySelectorAll('[data-dialog-open]').forEach(function (button) {
    button.addEventListener('click', function () {
      const dialog = document.querySelector(button.dataset.dialogOpen || '');
      if (dialog instanceof HTMLDialogElement) dialog.showModal();
    });
  });
})();
