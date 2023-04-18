const settingBtn = document.querySelector('.setting-btn');
const settingMenu = document.querySelector('.setting-menu');
const sidebarMenu = document.querySelector('.sidebar-menu');
const rightSideMenu = document.querySelector('.right-side-menus');
const risingMenu = document.querySelector('.rising-menu');
const postsContainer = document.querySelector('.posts-container');

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

const createPostElement = (testItem) => {
  const post = createHtmlElement('div', 'post', 'post');

  const leftSide = createHtmlElement('div', 'left-side');

  const upIcon = createHtmlElement('i', 'fa-regular fa-circle-up');
  const likesNum = testItem.likes - testItem.disLikes;
  const likesCount = createHtmlElement('span', 'likes-count', null, `${likesNum}`);
  const downIcon = createHtmlElement('i', 'fa-regular fa-circle-down');

  appendChildren(leftSide, upIcon, likesCount, downIcon);

  const rightSide = createHtmlElement('div', 'right-side');

  const postHead = createHtmlElement('div', 'post-head');

  const avatar = createHtmlElement('img', 'avatar');
  avatar.src = testItem.userAvatar;
  const groupLink = createHtmlElement('a', 'group-link', null, testItem.groupName);
  const dotItem = createHtmlElement('span', 'dot-item', null, '•');
  const postedBy = createHtmlElement('span', 'posted-by', null, 'Posted by');
  const userName = createHtmlElement('a', 'username', null, testItem.userName);
  userName.setAttribute('href', '#');
  postedBy.appendChild(userName);
  const postedAt = createHtmlElement('span', 'posted-at', null, testItem.time);
  const joinBtn = createHtmlElement('button', 'join-btn', 'post-join-btn', 'join');

  appendChildren(postHead, avatar, groupLink, dotItem, postedBy, postedAt, joinBtn);

  const postCaption = createHtmlElement('div', 'post-caption');

  const captionText = createHtmlElement('h3', 'caption-text', null, testItem.content.caption);
  const category = createHtmlElement('a', 'category', null, testItem.content.category);
  category.setAttribute('href', '#');
  category.style.background = '#ff4500';

  appendChildren(postCaption, captionText, category);

  const postMedia = createHtmlElement('div', 'post-media');

  if (testItem.content.images.length) {
    const postImage = createHtmlElement('img', 'post-image');
    postImage.src = testItem.content.images[0];
    postMedia.appendChild(postImage);
  } else {
    const postVideo = createHtmlElement('img', 'post-video');
    postVideo.src = testItem.content.video;
    postMedia.appendChild(postVideo);
  }

  const postSocial = createHtmlElement('div', 'post-social');

  const commentSec = createHtmlElement('div', 'comment-sec');
  const commentIcon = createHtmlElement('i', 'fa-regular fa-message');
  const commentsCount = createHtmlElement('span', 'title', null, `${testItem.comments.length} Comments`);

  appendChildren(commentSec, commentIcon, commentsCount);

  const shareSec = createHtmlElement('div', 'share-sec');
  const shareIcon = createHtmlElement('i', 'ri-corner-up-right-fill');
  const shareSpan = createHtmlElement('span', 'title', null, 'Share');

  appendChildren(shareSec, shareIcon, shareSpan);

  const saveSec = createHtmlElement('div', 'save-sec');
  const saveIcon = createHtmlElement('i', 'fa-regular fa-bookmark');
  const saveSpan = createHtmlElement('span', 'title', null, 'Save');

  appendChildren(saveSec, saveIcon, saveSpan);

  const moreSec = createHtmlElement('div', 'more-sec');

  moreSec.addEventListener('click', () => {
    dropMenu(moreSec);
  });

  const moreIconSpan = createHtmlElement('span', 'more-icon');
  const moreIcon = createHtmlElement('i', 'fa-solid fa-ellipsis');
  moreIconSpan.appendChild(moreIcon);
  const moreMenu = createHtmlElement('ul', 'more-menu');

  const menuItem1 = createHtmlElement('li');
  const menuItemIcon1 = createHtmlElement('i', 'ri-volume-mute-line');
  const menuItemTitle1 = createHtmlElement('span', 'item-title', null, `Mute ${testItem.groupName}`);

  appendChildren(menuItem1, menuItemIcon1, menuItemTitle1);

  const menuItem2 = createHtmlElement('li');
  const menuItemIcon2 = createHtmlElement('i', 'fa-regular fa-eye-slash');
  const menuItemTitle2 = createHtmlElement('span', 'item-title', null, 'Hide');

  appendChildren(menuItem2, menuItemIcon2, menuItemTitle2);

  const menuItem3 = createHtmlElement('li');
  const menuItemIcon3 = createHtmlElement('i', 'fa-regular fa-flag');
  const menuItemTitle3 = createHtmlElement('span', 'item-title', null, 'Report');

  appendChildren(menuItem3, menuItemIcon3, menuItemTitle3);

  appendChildren(moreMenu, menuItem1, menuItem2, menuItem3);

  appendChildren(moreSec, moreIconSpan, moreMenu);

  appendChildren(postSocial, commentSec, shareSec, saveSec, moreSec);

  appendChildren(rightSide, postHead, postCaption, postMedia, postSocial);

  appendChildren(post, leftSide, rightSide);

  postsContainer.prepend(post);
};

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
