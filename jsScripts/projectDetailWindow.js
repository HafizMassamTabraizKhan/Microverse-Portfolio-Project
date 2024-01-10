const works = [
  {
    name: 'Space Travelers\'Hub',
    cat: ['MICROVERSE', './images/Dot.png', 'Front-End Dev', './images/Dot.png', 2023],
    description:
      `This is the Space Travel Hub website created with React using CRA CLI. It describes 
      a number of features related to the rockets, and missions associated with providing 
      commercial and scientific space travel services.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    snapshot: './images/spaceTravelers.jpeg',
    connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://spacetravelers-vp0l.onrender.com/',
      'https://github.com/HafizMassamTabraizKhan/spaceTravelers'],
  },
  {
    name: 'ICPC',
    cat: ['MICROVERSE', './images/Dot.png', 'Front-End Dev', './images/Dot.png', 2023],
    description:
      `It is a simple website about a programming contest known as the "International Collegiate Programming Contest(ICPC)". 
      This website consists of  two pages only one is the  "Home Page" and the second is the "About Page", both pages comprise of
      different sections like "Main Program", "Featured Speakers", "Sponsors", "Past Events", etc.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/icpc.png',
    connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://hafizmassamtabraizkhan.github.io/Microverse-Capstone-Project-1/',
      'https://github.com/HafizMassamTabraizKhan/Microverse-Capstone-Project-1'],
  },
  {
    name: 'Test Drive Zone',
    cat: ['MICROVERSE', './images/Dot.png', 'Full-stack Dev', './images/Dot.png', 2023],
    description:
      `This app is build using React and Rails. It allows users to schedule test drive 
      appointments for cars. Users can add, delete, and view details of available cars, 
      making it easy to manage appointments for test drives.`,
    tags: ['Rails', 'JavaScript', 'React', 'Redux', 'API', 'PostgreSQL'],
    snapshot: './images/testDrive.png',
    connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://car-rent-swa4.onrender.com/',
      'https://github.com/HafizMassamTabraizKhan/book-an-appointment-back-end'],
  },
  {
    name: 'Ecommerce Shop',
    cat: ['MICROVERSE', './images/Dot.png', 'Front-End Dev', './images/Dot.png', 2023],
    description:
      `Ecommerce Shop is a website built using React and Redux. It will display products 
      from different categories retrieved from an API. You can also explore the details of 
      each product and filter them via their categories.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'API'],
    snapshot: './images/ecommerceShop.png',
    connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://ecommerce-shop-csp8.onrender.com/',
      'https://github.com/HafizMassamTabraizKhan/react-capstone-project'],
  },
];

const works2 = [
  {
    name: 'Space Travelers\'Hub',
    cat: ['MICROVERSE', './images/Dot.png', 'Front-End Dev', './images/Dot.png', 2023],
    description:
      `This is the Space Travel Hub website created with React using CRA CLI. It describes 
      a number of features related to the rockets, and missions associated with providing 
      commercial and scientific space travel services.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    snapshot: './images/spaceTravelers.jpeg',
    connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://spacetravelers-vp0l.onrender.com/',
      'https://github.com/HafizMassamTabraizKhan/spaceTravelers'],
  },
  {
    name: 'ICPC',
    cat: ['MICROVERSE', './images/Dot.png', 'Front-End Dev', './images/Dot.png', 2023],
    description:
    `It is a simple website about a programming contest known as the "International Collegiate Programming Contest(ICPC)". 
    This website consists of  two pages only one is the  "Home Page" and the second is the "About Page", both pages comprise of
    different sections like "Main Program", "Featured Speakers", "Sponsors", "Past Events", etc.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/icpc.png',
    connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://hafizmassamtabraizkhan.github.io/Microverse-Capstone-Project-1/',
      'https://github.com/HafizMassamTabraizKhan/Microverse-Capstone-Project-1'],
  },
  {
    name: 'Test Drive Zone',
    cat: ['MICROVERSE', './images/Dot.png', 'Full-stack Dev', './images/Dot.png', 2023],
    description:
      `This app is build using React and Rails. It allows users to schedule test drive 
      appointments for cars. Users can add, delete, and view details of available cars, 
      making it easy to manage appointments for test drives.`,
    tags: ['Rails', 'JavaScript', 'React', 'Redux', 'API', 'PostgreSQL'],
    snapshot: './images/testDrive.png',
    connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://car-rent-swa4.onrender.com/',
      'https://github.com/HafizMassamTabraizKhan/book-an-appointment-back-end'],
  },
  {
    name: 'Ecommerce Shop',
    cat: ['MICROVERSE', './images/Dot.png', 'Front-End Dev', './images/Dot.png', 2023],
    description:
      `Ecommerce Shop is a website built using React and Redux. It will display products 
      from different categories retrieved from an API. You can also explore the details of 
      each product and filter them via their categories.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'API'],
    snapshot: './images/ecommerceShop.png',
    connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://ecommerce-shop-csp8.onrender.com/',
      'https://github.com/HafizMassamTabraizKhan/react-capstone-project'],
  },
];

const bodyTag = document.querySelector('body');

function projectModal(e) {
  const workCardInf = works[parseInt(e.target.dataset.workbtn, 10)];
  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('project-overlay-wrapper');

  let modalContent = `
      <div class= "project-overlay project-card">
          <div class="work-title-container project-detail">
              <h3>${workCardInf.name}</h3>
              <span class="work-close">X</span>
          </div>
          <ul class="work-cat role">`;
  for (let i = 0; i < workCardInf.cat.length; i += 1) {
    if (i === 0) { modalContent += `<li class="cat-title"><a href="#">${workCardInf.cat[i]}</a></li>`; } else if (i === 1 || i === 3) { modalContent += `<li class="cat-title"><img src="${workCardInf.cat[i]}" /></li>`; } else { modalContent += `<li class="cat-descrip">${workCardInf.cat[i]}</li>`; }
  }
  modalContent
          += `</ul>
      
          <img src="${workCardInf.snapshot}" alt="${workCardInf.name} Project, ${workCardInf.cat[2]}" class="work-image"/>
          <div class="work-card-body project-detail">
              <p class="work-descrip">
              ${workCardInf.description}
              </p>
              <div class="work-title-footer">
                  <ul class="work-langs skills">`;
  workCardInf.tags.forEach((tag) => {
    modalContent += `<li class="work-lang">${tag}</li>`;
  });

  modalContent
                  += `</ul>
                  <div class="work-btns">`;
  for (let i = 0; i < 2; i += 1) {
    modalContent
                          += `<button class="work-btn btn">
                              <a href="${workCardInf.connectionsURL[i]}" target="_blank">${workCardInf.connectionstext[i]}</a> 
                              <img src="${workCardInf.connectionsBtn[i]}" alt="${workCardInf.connectionstext[i]}"/>
                          </button>`;
  }
  modalContent
                  += `</div>
              </div>
          </div>

      </div>`;
  projectOverlay.innerHTML = modalContent;
  bodyTag.appendChild(projectOverlay);
  const closeBtn = document.querySelector('.work-close');
  const workModal = document.querySelector('.project-overlay-wrapper');
  closeBtn.addEventListener('click', () => {
    bodyTag.removeChild(workModal);
  });
}

function renderworks() {
  const workSection = document.querySelector('#projects');
  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('project-card');
  let cardContent = '';

  for (let i = 0; i < works2.length; i += 1) {
    const workCardInf = works2[i];
    const projectOverlay = document.createElement('div');

    cardContent = '';

    if (i === 0) { projectOverlay.classList.add('project-card', `card${i + 1}`); } else { projectOverlay.classList.add('project-card', 'card-margin', `card${i + 1}`); }

    cardContent += `
        
            <img src="${workCardInf.snapshot}" alt="${workCardInf.name} Project, ${workCardInf.cat[2]}" class="project-image">
            <div class="project-detail">
                <h3>${workCardInf.name}</h3>
                <ul class="role">`;
    for (let i = 0; i < workCardInf.cat.length; i += 1) {
      if (i === 0) { cardContent += `<li><a href="#">${workCardInf.cat[i]}</a></li>`; } else if (i === 1 || i === 3) { cardContent += `<li><img src="${workCardInf.cat[i]}" /></li>`; } else { cardContent += `<li>${workCardInf.cat[i]}</li>`; }
    }
    cardContent += `
                </ul>
                <p>${workCardInf.description}</p>
                <ul class="skills">`;
    for (let i = 0; i < workCardInf.tags.length; i += 1) {
      cardContent += `<li class="work-lang">${workCardInf.tags[i]}</li>`;
    }

    cardContent
                += `</ul>
                <button class="btn" data-workBtn="${i}">See Project</button>
            </div>`;

    projectOverlay.innerHTML = cardContent;
    workSection.appendChild(projectOverlay);
  }

  const projectBtns = document.querySelectorAll('.project-card .btn');
  projectBtns.forEach((btn) => btn.addEventListener('click', projectModal));
}

window.addEventListener('load', renderworks);
