const settingBtn = document.querySelector('.setting-btn');
const settingMenu = document.querySelector('.setting-menu');
const sidebarMenu = document.querySelector('.sidebar-menu');
const rightSideMenu = document.querySelector('.right-side-menus');
const risingMenu = document.querySelector('.rising-menu');

window.onload = () => {
  fetch('/api/v1/post')
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data.posts);
      // eslint-disable-next-line no-undef
      data.data.posts.forEach((post) => createPostElement(post));
    })
    .catch((err) => console.log(err));
};

const createHtmlElement = (element, className, id, textContent) => {
  const ele = document.createElement(element);

  if (className) {
    ele.className = className;
  }
  if (id) {
    ele.id = id;
  }
  if (textContent) {
    ele.textContent = textContent;
  }

  return ele;
};

const appendChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

// eslint-disable-next-line no-unused-vars
const appearSettingMenu = (ele, i) => {
  ele.nextSibling.classList.toggle('active');
  ele.children[i].classList.toggle('rotated');
};

const dropMenu = (element) => {
  element.classList.toggle('dropped');
};

// eslint-disable-next-line no-unused-vars
const appearRightMenus = (ele, index) => {
  for (let i = 0; i < ele.parentElement.children.length; i++) {
    if (ele.parentElement.children[i] !== ele.nextSibling) {
      ele.parentElement.children[i].classList.remove('active');
    }
  }
  ele.nextSibling.classList.toggle('active');
  ele.children[index].classList.toggle('rotated');
};

settingBtn.addEventListener('click', () => {
  settingMenu.classList.toggle('active');
});

risingMenu.addEventListener('click', () => {
  dropMenu(risingMenu);
});

// document.addEventListener('click', (e) => {
//   if(e.target.className !== settingMenu.className || e.target.className !== settingBtn.className || e.target.className !== settingBtn.querySelector('i').className){
//     console.log('WORK');
//     settingMenu.classList.remove('active')
//   }
// })

// eslint-disable-next-line no-undef
settingMenuData.forEach((item) => {
  const menuItem = createHtmlElement('li', 'setting-item');
  menuItem.setAttribute('onclick', 'appearSettingMenu(this, 2)');
  const itemTitle = createHtmlElement('span', 'item-title', null, item.title);
  const itemIcon = createHtmlElement('i', item.icon);
  const itemMoreIcon = createHtmlElement('i', item.moreIcon);

  if (item.menu) {
    const subMenu = createHtmlElement('ul', 'sub-setting-menu');

    item.menu.forEach((subItem) => {
      const subMenuItemLink = createHtmlElement('a', 'submenu-item-link');
      subMenuItemLink.setAttribute('href', '#');
      const subMenuItemList = createHtmlElement('li', 'submenu-item-list', null, subItem);
      subMenuItemLink.appendChild(subMenuItemList);
      subMenu.appendChild(subMenuItemLink);
    });

    appendChildren(menuItem, itemIcon, itemTitle, itemMoreIcon);
    appendChildren(settingMenu, menuItem, subMenu);
  } else {
    appendChildren(menuItem, itemIcon, itemTitle, itemMoreIcon);
    settingMenu.appendChild(menuItem);
  }
});

// eslint-disable-next-line no-undef
leftSidebarMenuData.forEach((item) => {
  const menuItem = createHtmlElement('li', 'setting-item');
  menuItem.setAttribute('onclick', 'appearSettingMenu(this, 2)');
  const itemTitle = createHtmlElement('span', 'item-title', null, item.title);
  const itemIcon = createHtmlElement('i', item.icon);
  const itemMoreIcon = createHtmlElement('i', 'fa-solid fa-angle-down');

  const subMenu = createHtmlElement('ul', 'sub-setting-menu');

  item.menu.forEach((subItem) => {
    const subMenuItemLink = createHtmlElement('a', 'submenu-item-link');
    subMenuItemLink.setAttribute('href', '#');
    const subMenuItemList = createHtmlElement('li', 'submenu-item-list', null, subItem);
    subMenuItemLink.appendChild(subMenuItemList);
    subMenu.appendChild(subMenuItemLink);
  });

  appendChildren(menuItem, itemIcon, itemTitle, itemMoreIcon);
  appendChildren(sidebarMenu, menuItem, subMenu);
});

// eslint-disable-next-line no-undef
rightSideMenuData.forEach((item) => {
  const menuItem = createHtmlElement('li', 'setting-item');
  menuItem.setAttribute('onclick', 'appearRightMenus(this, 1)');
  const itemTitle = createHtmlElement('span', 'item-title', null, item.title);
  const itemMoreIcon = createHtmlElement('i', 'fa-solid fa-angle-down');

  const subMenu = createHtmlElement('ul', 'sub-setting-menu');

  item.menu.forEach((subItem) => {
    const subMenuItemLink = createHtmlElement('a', 'submenu-item-link', null, subItem);
    subMenuItemLink.setAttribute('href', '#');
    subMenu.appendChild(subMenuItemLink);
  });
  const seeMoreBtn = createHtmlElement('button', 'see-more-btn', null, 'See more');
  subMenu.appendChild(seeMoreBtn);

  appendChildren(menuItem, itemTitle, itemMoreIcon);
  appendChildren(rightSideMenu, menuItem, subMenu);
});

const testItem = postsMenu[0];


createPostElement(testItem);

// Start Login Page
const logInPopup = document.querySelector('#login-popup-page');
const logInHeaderBtn = document.querySelector('.log-in-btn');
const logInMenuBtn = settingMenu.lastElementChild;
const logInSignUpBtn = document.querySelector('#login-signup-btn');
const logInOverlay = document.querySelector('.overlay-login');
const closeLogInPopupBtn = document.querySelector('#login-popup-page .close-icon');
const loginBtns = [logInHeaderBtn, logInMenuBtn, logInSignUpBtn];

// eslint-disable-next-line max-len
// const logInInputFocused = document.querySelector('#login-popup-page .login-form #username-input');

loginBtns.forEach((button) => {
  button.addEventListener('click', () => {
    logInPopup.style.display = 'flex';
    logInOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

closeLogInPopupBtn.addEventListener('click', () => {
  logInPopup.style.display = 'none';
  logInOverlay.style.display = 'none';
});

// End Login Page

// Start Get App Page
const getAppBtn = document.querySelector('.get-app-btn');
const getAppPopup = document.querySelector('#getapp-popup-page');
const getAppOverlay = document.querySelector('#get-app-overlay');
const closeGetAppPopupBtn = document.querySelector('#getapp-popup-page .head i');

getAppBtn.addEventListener('click', () => {
  getAppPopup.style.display = 'flex';
  getAppOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeGetAppPopupBtn.addEventListener('click', () => {
  getAppPopup.style.display = 'none';
  getAppOverlay.style.display = 'none';
});

getAppOverlay.addEventListener('click', () => {
  getAppPopup.style.display = 'none';
  getAppOverlay.style.display = 'none';
});

// End Get App Page

// Start Sign Up Page

const signUpPopup = document.querySelector('#signup-popup-page');

const postSignUpBtn = postsContainer.querySelector('.post #post-join-btn');
const navSignUpBtn = document.querySelector('nav .join-btn');
const signUpLogInBtn = document.querySelector('#signup-login-btn');

const closeSignUpPopupBtns = document.querySelectorAll('#signup-popup-page .close-icon');

const signUpBtns = [postSignUpBtn, navSignUpBtn, signUpLogInBtn];

logInSignUpBtn.addEventListener('click', () => {
  logInPopup.style.display = 'flex';
  logInOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  signUpPopup.style.display = 'none';
});

signUpBtns.forEach((button) => {
  button.addEventListener('click', () => {
    signUpPopup.style.display = 'flex';
    logInOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    logInPopup.style.display = 'none';
  });
});

closeSignUpPopupBtns.forEach((button) => {
  button.addEventListener('click', () => {
    signUpPopup.style.display = 'none';
    logInOverlay.style.display = 'none';
  });
});

const navigateToFormStep = (stepNumber) => {
  document.querySelectorAll('.form-step').forEach((formStepSection) => {
    formStepSection.classList.add('d-none');
  });
  document.querySelector(`#step-${stepNumber}`).classList.remove('d-none');
};

document.querySelectorAll('.btn-navigate-form-step').forEach((formNavigationBtn) => {
  formNavigationBtn.addEventListener('click', () => {
    const stepNumber = parseInt(formNavigationBtn.getAttribute('step_number'), 10);
    navigateToFormStep(stepNumber);
  });
});
// End Sign Up Page

// Get All Posts Section

