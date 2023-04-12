const works = [
    {
      name: 'Tonic',
      cat: ['CANOPY', 'Back End Dev', 2015],
      description:
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text 
        of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled 
        it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
      tags: ['HTML', 'CSS', 'JavaScript'],
      snapshot: './images/portfolio1.png',
      connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
      connectionstext: ['See live', 'See source'],
      connectionsURL: ['https://hafizmassamtabraizkhan.github.io/Microverse-Portfolio-Project/', 
      'https://github.com/HafizMassamTabraizKhan/Microverse-Portfolio-Project'],
    },
    {
      name: 'Multi-Post Stories',
      cat: ['FACEBOOK', 'Full Stack Dev', 2015],
      description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
      scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
      releawn printer took a galley of type and scrambled it 1960s.`,
      tags: ['HTML', 'CSS', 'JavaScript'],
      snapshot: './images/portfolio2.png',
      connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
      connectionstext: ['See live', 'See source'],
      connectionsURL: ['https://hafizmassamtabraizkhan.github.io/Microverse-Portfolio-Project/', 
      'https://github.com/HafizMassamTabraizKhan/Microverse-Portfolio-Project'],
    },
    {
      name: 'Facebook 360',
      cat: ['FACEBOOk', 'Full Stack Dev', 2015],
      description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
      scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
      releawn printer took a galley of type and scrambled it 1960s.`,
      tags: ['HTML', 'CSS', 'JavaScript'],
      snapshot: './images/portfolio3.png',
      connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
      connectionstext: ['See live', 'See source'],
      connectionsURL: ['https://hafizmassamtabraizkhan.github.io/Microverse-Portfolio-Project/', 
      'https://github.com/HafizMassamTabraizKhan/Microverse-Portfolio-Project'],
    },
    {
      name: 'Uber Navigation',
      cat: ['Uber', 'Lead Developer', 2018],
      description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
      scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
      releawn printer took a galley of type and scrambled it 1960s.`,
      tags: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
      snapshot: './images/portfolio4.png',
      connectionsBtn: ['./images/live-link-icon.png', './images/github-icon.png'],
      connectionstext: ['See live', 'See source'],
      connectionsURL: ['https://hafizmassamtabraizkhan.github.io/Microverse-Portfolio-Project/', 
      'https://github.com/HafizMassamTabraizKhan/Microverse-Portfolio-Project'],
    },
  ];

  
const projectBtns = document.querySelectorAll('.work .work-btn');
const bodyTag = document.querySelector('body');
function projectModal(e) {
  const workCardInf = works[parseInt(e.target.dataset.workbtn, 10)];
  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('project-overlay-wrapper');
  let modalContent = `
  <div class= "project-overlay-wrapper">
      <div class= "project-overlay work-card">
          <div class="work-title-container">
              <h3>${workCardInf.name}</h3>
              <span class="work-clase">X</span>
          </div>
          <ul class="work-cat">`;
              for (let i = 0; i < workCardInf.cat.length; i += 1)
              {
                  if(i === 0)
                  modalContent += `<li class="cat-title">${workCardInf.cat[i]}</li>`;
                  else
                  modalContent += `<li class="cat-descrip">${workCardInf.cat[i]}</li>`;
                  
              }
              modalContent += 
          `</ul>
      
          <img src="${workCardInf.snapshot}" alt="${workCardInf.name} Project, ${workCardInf.cat[2]}" class="work-image"/>
          <div class="work-card-body">
              <p class="work-descrip">
              ${workCardInf.description}
              </p>
              <div class="work-title-footer">
                  <ul class="work-langs">`;
                      workCardInf.tags.forEach((tag) => {
                          modalContent += `<li class="work-lang">${tag}</li>`;
                      });
                  
                      modalContent += 
                  `</ul>
                  <div class="work-btns">`;
                      for (let i = 0; i < 2; i += 1) {
                          modalContent += 
                          `<button class="work-btn">
                              <a href="${workCardInf.connectionsURL[i]}" target="_blank">${workCardInf.connectionstext[i]}</a> 
                              <img src="${workCardInf.connectionsBtn[i]}" alt="${workCardInf.connectionstext[i]}"/>
                          </button>`;
                      }
                      modalContent += 
                  `</div>
              </div>
          </div>
      </div>
  </div>`;
  projectOverlay.innerHTML = modalContent;
  bodyTag.appendChild(projectOverlay);
  const closeBtn = document.querySelector('.work-clase');
  const workModal = document.querySelector('.project-overlay-wrapper');
  closeBtn.addEventListener('click', () => { 
      body.removeChild(workModal);
  });
}
projectBtns.forEach((btn) => btn.addEventListener('click', projectModal));
  