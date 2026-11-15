/* Trocaverde — interações (menu, reveal, contador, galeria, formulário) */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Cabeçalho que encolhe ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Menu responsivo e dropdown acessível ---------- */
  const navToggle = document.querySelector('.nav-toggle-button');
  const siteHeader = document.querySelector('.site-header');
  const mainNav = document.querySelector('.main-nav');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const hasDropdowns = document.querySelectorAll('.has-dropdown');
  const mobileNav = window.matchMedia('(max-width: 900px)');

  const closeAllDropdowns = (restoreFocus = false) => {
    hasDropdowns.forEach(item => {
      item.classList.remove('is-open');
      const btn = item.querySelector('.dropdown-toggle');
      const menu = item.querySelector('.dropdown');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (menu) menu.hidden = true;
      if (restoreFocus && btn) btn.focus();
    });
  };

  const closeMobileNav = (restoreFocus = false) => {
    if (!navToggle || !siteHeader) return;
    siteHeader.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    closeAllDropdowns();
    if (restoreFocus) navToggle.focus();
  };

  if (navToggle && siteHeader && mainNav) {
    navToggle.addEventListener('click', () => {
      const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
      siteHeader.classList.toggle('menu-open', willOpen);
      navToggle.setAttribute('aria-expanded', String(willOpen));
      navToggle.setAttribute(
        'aria-label',
        willOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
      );
      if (!willOpen) closeAllDropdowns();
    });

    document.addEventListener('click', (event) => {
      if (
        mobileNav.matches &&
        navToggle.getAttribute('aria-expanded') === 'true' &&
        !siteHeader.contains(event.target)
      ) {
        closeMobileNav();
      }
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => closeMobileNav());
    });

    mobileNav.addEventListener?.('change', (event) => {
      if (!event.matches) closeMobileNav();
    });
  }

  const closeDropdown = (item, restoreFocus = false) => {
    if (!item) return;
    item.classList.remove('is-open');
    const btn = item.querySelector('.dropdown-toggle');
    const menu = item.querySelector('.dropdown');

    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      if (restoreFocus) btn.focus();
    }

    if (menu) menu.hidden = true;
  };

  dropdownToggles.forEach(btn => {
    const parent = btn.closest('.has-dropdown');
    const menu = parent?.querySelector('.dropdown');

    if (menu) menu.hidden = true;

    btn.addEventListener('click', (event) => {
      event.stopPropagation();

      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      closeAllDropdowns();

      if (!isOpen && parent && menu) {
        parent.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        menu.hidden = false;
      }
    });
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.has-dropdown')) closeAllDropdowns();
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;

    const openedDropdown = document.querySelector('.has-dropdown.is-open');

    if (openedDropdown) {
      event.preventDefault();
      closeDropdown(openedDropdown, true);
      return;
    }

    if (navToggle?.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      closeMobileNav(true);
    }
  });

  hasDropdowns.forEach(item => {
    if (item.querySelector('a[aria-current="page"]')) {
      item.classList.add('has-current');
    }
  });

  /* ---------- Reveal ao rolar ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Contador animado ---------- */
  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = parseInt(el.dataset.counter, 10);
    if (!target) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.textContent = target.toLocaleString('pt-BR');
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        io.unobserve(el);

        const duration = 1200;
        const start = performance.now();

        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor(target * p).toLocaleString('pt-BR');

          if (p < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });

    io.observe(el);
  });

  /* ---------- Galeria: filtros ---------- */
  const gallery = document.querySelector('[data-gallery]');

  if (gallery) {
    const buttons = document.querySelectorAll('[data-filter]');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.dataset.filter;

        gallery.querySelectorAll('figure').forEach((fig) => {
          fig.hidden = !(filter === 'all' || fig.dataset.category === filter);
        });
      });
    });
  }

  /* ---------- Galeria: lightbox acessível ---------- */
  const dialog = document.getElementById('lightbox');

  if (dialog && typeof dialog.showModal === 'function') {
    const content = dialog.querySelector('.lightbox-content');
    const captionEl = dialog.querySelector('.lightbox-caption');
    const closeBtn = dialog.querySelector('.close');
    let lastTrigger = null;

    const openLightbox = (trigger) => {
      const figure = trigger.closest('figure');
      const swatch = figure?.querySelector('.swatch');

      if (!swatch) return;

      lastTrigger = trigger;
      content.innerHTML = swatch.innerHTML;

      const originalCaption = figure.querySelector('.gallery-caption');
      captionEl.replaceChildren();

      if (originalCaption) {
        captionEl.append(originalCaption.cloneNode(true));
      }

      dialog.showModal();
      closeBtn?.focus();
    };

    document.querySelectorAll('[data-lightbox]').forEach(trigger => {
      trigger.addEventListener('click', () => openLightbox(trigger));
    });

    closeBtn?.addEventListener('click', () => dialog.close());

    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener('close', () => {
      if (lastTrigger?.isConnected) lastTrigger.focus();
      lastTrigger = null;
    });
  }

  /* ---------- Newsletter: aviso acessível sem simular envio ---------- */
  document.querySelectorAll('[data-newsletter-form]').forEach(newsletter => {
    newsletter.addEventListener('submit', event => {
      event.preventDefault();

      const status = newsletter.parentElement.querySelector('.newsletter-status');

      if (!status) return;

      status.textContent =
        'Este formulário é demonstrativo: o serviço de inscrição ainda não está conectado. Nenhum e-mail foi enviado.';

      status.hidden = false;
    });
  });

  /* ---------- Formulário de contato ---------- */
  const form = document.getElementById('contact-form');
  if (!form) return;

  const DRAFT_KEY = 'trocaverde-draft';
  const fields = form.querySelectorAll('input, select, textarea');

  /* Restaura rascunho */
  const saved = localStorage.getItem(DRAFT_KEY);

  if (saved) {
    try {
      const data = JSON.parse(saved);

      Object.entries(data).forEach(([name, value]) => {
        const field = form.elements[name];
        if (!field) return;

        if (field.type === 'checkbox') {
          field.checked = Boolean(value);
        } else {
          field.value = value;
        }
      });
    } catch (_) {
      /* Rascunho inválido, ignora */
    }
  }

  /* Salva rascunho */
  const saveDraft = () => {
    const data = {};

    fields.forEach((f) => {
      if (!f.name) return;

      data[f.name] = f.type === 'checkbox' ? f.checked : f.value;
    });

    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  };

  form.addEventListener('input', saveDraft);

  /* Campo condicional "Quantidade de peças" */
  const assunto = form.querySelector('#assunto');
  const pecasWrap = form.querySelector('#pecas-wrap');

  const updatePecas = () => {
    if (!pecasWrap) return;
    pecasWrap.hidden = assunto?.value !== 'doacao';
  };

  if (assunto) assunto.addEventListener('change', updatePecas);
  updatePecas();

  /* Contador de caracteres */
  const textarea = form.querySelector('#mensagem');
  const counter = form.querySelector('#msg-counter');

  if (textarea && counter) {
    const max = parseInt(textarea.getAttribute('maxlength'), 10) || 800;

    const updateCounter = () => {
      counter.textContent = `${textarea.value.length}/${max}`;
    };

    textarea.addEventListener('input', updateCounter);
    updateCounter();
  }

  /* ---------- Validação ---------- */
  const showError = (field, message) => {
    field.setAttribute('aria-invalid', 'true');

    const errorEl = document.getElementById(`${field.id}-error`);

    if (errorEl) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    }
  };

  const clearError = (field) => {
    field.removeAttribute('aria-invalid');

    const errorEl = document.getElementById(`${field.id}-error`);

    if (errorEl) {
      errorEl.textContent = '';
      errorEl.hidden = true;
    }
  };

  const validate = () => {
    let valid = true;

    /* Verifica campos obrigatórios */
    form.querySelectorAll('[required]').forEach((field) => {
      clearError(field);

      const value =
        field.type === 'checkbox' ? field.checked : field.value.trim();

      if (!value) {
        showError(
          field,
          field.type === 'checkbox'
            ? 'É necessário marcar esta opção.'
            : 'Este campo é obrigatório.'
        );

        valid = false;
        return;
      }

      /* Verifica formato do e-mail */
      if (
        field.type === 'email' &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
      ) {
        showError(field, 'Informe um e-mail válido.');
        valid = false;
        return;
      }

      /* Verifica quantidade mínima de caracteres */
      if (field.minLength > 0 && field.value.length < field.minLength) {
        showError(field, `Mínimo de ${field.minLength} caracteres.`);
        valid = false;
      }
    });

    /* Verifica telefone, caso tenha sido preenchido */
    const telefone = form.querySelector('#telefone');

    if (telefone) {
      clearError(telefone);

      const valorTelefone = telefone.value.trim();
      const telefoneValido = /^(?:\(\d{2}\)|\d{2})\s?9?\d{4}-?\d{4}$/;

      if (valorTelefone && !telefoneValido.test(valorTelefone)) {
        showError(
          telefone,
          'Informe um telefone válido com DDD. Exemplo: (11) 91234-5678.'
        );

        valid = false;
      }
    }

    /* Verifica CEP, caso tenha sido preenchido */
    const cep = form.querySelector('#cep');

    if (cep) {
      clearError(cep);

      const valorCep = cep.value.trim();
      const cepValido = /^\d{5}-?\d{3}$/;

      if (valorCep && !cepValido.test(valorCep)) {
        showError(
          cep,
          'Informe um CEP válido com 8 dígitos. Exemplo: 03071-000.'
        );

        valid = false;
      }
    }

    return valid;
  };

  /* Limpa mensagens de erro ao sair do campo */
  fields.forEach((field) => {
    field.addEventListener('blur', () => {
      if (
        field.hasAttribute('required') &&
        !field.value.trim() &&
        field.type !== 'checkbox'
      ) {
        showError(field, 'Este campo é obrigatório.');
      } else {
        clearError(field);
      }
    });
  });

  /* ---------- Envio do formulário ---------- */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* 1. Valida os campos */
    if (!validate()) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');

      if (firstInvalid) firstInvalid.focus();
      return;
    }

    /* 2. Prepara o botão para mostrar que está enviando */
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!submitBtn) return;

    const originalBtnText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    submitBtn.style.opacity = '0.7';

    /* 3. Envia os dados para o Formspree */
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        /* SUCESSO: mostra a mensagem e limpa o formulário */
        const success = document.getElementById('form-success');

        if (success) {
          success.hidden = false;
          success.focus();
        }

        form.reset();
        localStorage.removeItem(DRAFT_KEY);

        if (pecasWrap) pecasWrap.hidden = true;

        if (counter && textarea) {
          counter.textContent =
            `0/${textarea.getAttribute('maxlength') || 800}`;
        }

      } else {
        /* ERRO DO FORMSPREE */
        alert(
          'Ocorreu um erro ao enviar. Entre em contato com o administrador do site.'
        );
      }

    } catch (error) {
      /* ERRO DE REDE */
      alert('Erro de conexão. Verifique sua internet e tente novamente.');

    } finally {
      /* 4. Restaura o botão ao normal */
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      submitBtn.style.opacity = '1';
    }
  });

})();
