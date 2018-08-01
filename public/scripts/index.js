document.addEventListener('DOMContentLoaded', () => {
  const headerBtns = document.getElementsByClassName('header-nav-btn');

  const sections = {
    home: document.getElementById('home'),
    about: document.getElementById('about'),
    projects: document.getElementById('projects'),
    contact: document.getElementById('contact')
  };

  for (let i = 0; i < headerBtns.length; i++) {
    headerBtns[i].addEventListener('click', () => {
      const id = headerBtns[i].id.split('-')[0];

      for (let section in sections) {
        if (section === id) sections[section].classList.remove('hidden');
        else sections[section].classList.add('hidden');
      }
    });
  }
});
