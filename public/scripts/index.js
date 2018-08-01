document.addEventListener('DOMContentLoaded', () => {
  const headerBtns = document.getElementsByClassName('header-nav-btn');

  const sections = {
    home: document.getElementById('home'),
    about: document.getElementById('about'),
    projects: document.getElementById('projects'),
    contact: document.getElementById('contact')
  };

  let curr = 'home';

  const changeViews = evt => {
    const id = evt.target.id.split('-')[0];

    sections[curr].classList.add('hidden');
    sections[id].classList.remove('hidden');

    curr = id;
  };

  for (let i = 0; i < headerBtns.length; i++) {
    headerBtns[i].addEventListener('click', changeViews);
  }
});
