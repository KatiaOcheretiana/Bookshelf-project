import saveTheChildrenImage from '../../img/images/save-the-children-1x.png';
import saveTheChildrenImageX from '../../img/images/save-the-children-2x.png';
import projectHome from '../../img/images/project-hope-1x.png';
import projectHomeX from '../../img/images/project-hope-2x.png';
import internationalMedicalCorps from '../../img/images/international-medical-corps-1x.png';
import internationalMedicalCorpsX from '../../img/images/international-medical-corps-2x.png';
import razom from '../../img/images/razom-1x.png';
import razomX from '../../img/images/razom-2x.png';
import actionAgainstHunger from '../../img/images/action-against-hunger-1x.png';
import actionAgainstHungerX from '../../img/images/action-against-hunger-2x.png';
import serhiyPrytulaCharityFoundation from '../../img/images/sergiy-prytula-1x.png';
import serhiyPrytulaCharityFoundationX from '../../img/images/sergiy-prytula-2x.png';
import medicinsSansFrontieres from '../../img/images/medecins-sans-frontieres-1x.png';
import medicinsSansFrontieresX from '../../img/images/medecins-sans-frontieres-2x.png';
import worldVision from '../../img/images/world-vision-1x.png';
import worldVisionX from '../../img/images/world-vision-2x.png';
import united24 from '../../img/images/united24-1x.png';
import united24X from '../../img/images/united24-2x.png';

const fondsList = document.getElementById('fonds-list');
const suppBtn = document.querySelector('.supp-btn');
let clickCount = 0;
let firstClick = false;

const initialFonds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: saveTheChildrenImage,
    img2x: saveTheChildrenImageX,
    width: 129,
    height: 32,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHome,
    img2x: projectHomeX,
    width: 62,
    height: 32,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: internationalMedicalCorps,
    img2x: internationalMedicalCorpsX,
    width: 103,
    height: 32,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
    img2x: razomX,
    width: 82,
    height: 32,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actionAgainstHunger,
    img2x: actionAgainstHungerX,
    width: 55,
    height: 32,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: serhiyPrytulaCharityFoundation,
    img2x: serhiyPrytulaCharityFoundationX,
    width: 115,
    height: 32,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medicinsSansFrontieres,
    img2x: medicinsSansFrontieresX,
    width: 94,
    height: 32,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVision,
    img2x: worldVisionX,
    width: 85,
    height: 30,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united24,
    img2x: united24X,
    width: 109,
    height: 10,
  },
];
const fonds = [...initialFonds];
let currentState = [...fonds];

const itemsPerPage = 6;
let currentPage = 0;
let isAnimating = false;

const totalPages = Math.ceil(fonds.length / itemsPerPage);

function createListItem(fond, index) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const image = document.createElement('img');

  const number = (index + 1).toString().padStart(2, '0');
  const { img, img2x, width, height, url, title } = fond;

  listItem.classList.add('list-item');

  link.href = url;
  link.target = '_blank';

  if (window.devicePixelRatio > 1) {
    image.src = img2x || img;
  } else {
    image.src = img;
  }
  image.style.width = width + 'px';
  image.style.height = height + 'px';
  image.alt = title;

  link.appendChild(image);

  listItem.appendChild(document.createTextNode(number + ' '));
  listItem.appendChild(link);

  return listItem;
}

function updateList() {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;

  fondsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  for (let i = start; i < end; i++) {
    const adjustedIndex = i % fonds.length;
    const listItem = createListItem(fonds[adjustedIndex], adjustedIndex);

    if (firstClick) {
      listItem.classList.add('smooth-slide-up');
    } else {
      listItem.classList.add('smooth-slide-down');
    }

    fragment.appendChild(listItem);
  }
  fondsList.appendChild(fragment);
}

function resetFonds() {
  currentState = [...initialFonds];
  currentPage = 0;
  updateList();
}

function scrollUp() {
  currentPage = (currentPage - 1 + fonds.length) % fonds.length;
  updateList();
}

suppBtn.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 1) {
    firstClick = true;
    suppBtn.style.transition = 'transform 0.3s ease';
    suppBtn.style.transform = 'rotate(270deg)';
  } else if (clickCount === 2) {
    suppBtn.style.transition = 'transform 0.3s ease';
    suppBtn.style.transform = 'rotate(90deg)';
    clickCount = 0;
    firstClick = false;
    resetFonds();
  }

  setTimeout(() => {
    if (clickCount === 1) {
      scrollUp();
    }
  }, 200);
});

updateList();
