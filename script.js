// Cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
  document.querySelectorAll('a, button, .project-item').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
  });

  // Theme
  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    document.getElementById('themeToggle').textContent = current === 'dark' ? '◑ tema' : '◐ tema';
  }

  // Navbar scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Mobile nav
  function toggleNav() {
    const links = document.getElementById('navLinks');
    const btn = document.getElementById('navHamburger');
    const isOpen = links.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.classList.toggle('nav-open', isOpen);
  }
  function closeNav() {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('navHamburger').classList.remove('open');
    document.body.classList.remove('nav-open');
  }
