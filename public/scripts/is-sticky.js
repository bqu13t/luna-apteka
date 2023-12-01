if (window.location.pathname === '/') {
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main__nav');
    const navList = document.querySelector('.main__nav__list');
    const activeLink = nav.querySelector('.active-link');
    const navPosition = nav.getBoundingClientRect();
    console.log(navPosition.top);

    if (navPosition.top < 1 && !nav.classList.contains('is-pinned')) {
        nav.classList.add('is-pinned');
      } else if (navPosition.top >= 1 && nav.classList.contains('is-pinned')) {
        nav.classList.remove('is-pinned');
      }

    if (activeLink) {
      const navRect = navList.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      if (linkRect.left < navRect.left) {
        navList.scrollLeft -= (navRect.left - linkRect.left);
      } else if (linkRect.right > navRect.right) {
        navList.scrollLeft += (linkRect.right - navRect.right);
      }
    }
  });
}
