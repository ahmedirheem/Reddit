const settingBtn = document.querySelector('.setting-btn');
const settingMenu = document.querySelector('.setting-menu');
// Start Variables Section

const sidebarMenu = document.querySelector('.sidebar-menu');
const rightSideMenu = document.querySelector('.right-side-menus');
const risingMenu = document.querySelector('.rising-menu');
const postsContainer = document.querySelector('.posts-container');
const signUpPopup = document.querySelector('#signup-popup-page');
const logInPopup = document.querySelector('#login-popup-page');
const logInOverlay = document.querySelector('.overlay-login');

// End Variables Section

// Start Global Functions
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
  for (let i = 0; i < ele.parentElement.children.length; i += 1) {
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

const showLoginPage = () => {
  logInPopup.style.display = 'flex';
  logInOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  signUpPopup.style.display = 'none';
};

const showSignupPage = () => {
  signUpPopup.style.display = 'flex';
  logInOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  logInPopup.style.display = 'none';
};

document.querySelector('section.body').addEventListener('click', () => {
  settingMenu.classList.remove('active');
});

// End Global Functions

// Start Create Post Section

const createPostElement = (data) => {
  const post = createHtmlElement('div', 'post', 'post');

  const leftSide = createHtmlElement('div', 'left-side');

  const upIcon = createHtmlElement('i', 'fa-regular fa-circle-up');
  const likesNum = data.likes - data.dislikes;
  const likesCount = createHtmlElement('span', 'likes-count', null, `${likesNum}`);
  const downIcon = createHtmlElement('i', 'fa-regular fa-circle-down');

  upIcon.addEventListener('click', () => {
    showSignupPage();
  });

  downIcon.addEventListener('click', () => {
    showSignupPage();
  });

  appendChildren(leftSide, upIcon, likesCount, downIcon);

  const rightSide = createHtmlElement('div', 'right-side');

  const postHead = createHtmlElement('div', 'post-head');

  const avatar = createHtmlElement('img', 'avatar');
  avatar.src = data.com_avatar;
  const groupLink = createHtmlElement('a', 'group-link', null, data.com_name);
  const dotItem = createHtmlElement('span', 'dot-item', null, '•');
  const postedBy = createHtmlElement('span', 'posted-by', null, 'Posted by');
  const userName = createHtmlElement('a', 'username', null, data.username);
  userName.setAttribute('href', '#');
  postedBy.appendChild(userName);
  const postedAt = createHtmlElement('span', 'posted-at', null, data.posted_at);
  const joinBtn = createHtmlElement('button', 'join-btn', 'post-join-btn', 'join');
  joinBtn.setAttribute('onclick', 'showSignupPage()');
  appendChildren(postHead, avatar, groupLink, dotItem, postedBy, postedAt, joinBtn);

  const postCaption = createHtmlElement('div', 'post-caption');

  const titleText = createHtmlElement('h3', 'title-text', null, data.title);
  titleText.style.display = 'block';

  const captionText = createHtmlElement('span', 'caption-text', null, data.caption);
  const category = createHtmlElement('a', 'category', null, data.content?.category);
  category.setAttribute('href', '#');
  category.style.background = '#ff4500';

  appendChildren(postCaption, titleText, captionText, category);

  const postMedia = createHtmlElement('div', 'post-media');

  if (data.images) {
    const postImage = createHtmlElement('img', 'post-image');
    postImage.src = data.images;
    postMedia.appendChild(postImage);
  }
  // else {
  // const postVideo = createHtmlElement('img', 'post-video');
  // postVideo.src = data.video;
  // postMedia.appendChild(postVideo);
  // }

  const postSocial = createHtmlElement('div', 'post-social');

  const commentSec = createHtmlElement('div', 'comment-sec');
  const commentIcon = createHtmlElement('i', 'fa-regular fa-message');
  const commentsCount = createHtmlElement('span', 'title', null, `${15} Comments`);

  appendChildren(commentSec, commentIcon, commentsCount);

  const shareSec = createHtmlElement('div', 'share-sec');
  const shareIcon = createHtmlElement('i', 'ri-corner-up-right-fill');
  const shareSpan = createHtmlElement('span', 'title', null, 'Share');

  appendChildren(shareSec, shareIcon, shareSpan);

  const saveSec = createHtmlElement('div', 'save-sec');
  const saveIcon = createHtmlElement('i', 'fa-regular fa-bookmark');
  const saveSpan = createHtmlElement('span', 'title', null, 'Save');

  appendChildren(saveSec, saveIcon, saveSpan);
  saveSec.setAttribute('onclick', 'showSignupPage()');

  const moreSec = createHtmlElement('div', 'more-sec');

  moreSec.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    dropMenu(moreSec);
  });

  const moreIconSpan = createHtmlElement('span', 'more-icon');
  const moreIcon = createHtmlElement('i', 'fa-solid fa-ellipsis');
  moreIconSpan.appendChild(moreIcon);
  const moreMenu = createHtmlElement('ul', 'more-menu');

  const menuItem1 = createHtmlElement('li');
  const menuItemIcon1 = createHtmlElement('i', 'ri-volume-mute-line');
  const menuItemTitle1 = createHtmlElement('span', 'item-title', null, `Mute ${data.groupName}`);
  appendChildren(menuItem1, menuItemIcon1, menuItemTitle1);

  const menuItem2 = createHtmlElement('li');
  const menuItemIcon2 = createHtmlElement('i', 'fa-regular fa-eye-slash');
  const menuItemTitle2 = createHtmlElement('span', 'item-title', null, 'Hide');

  appendChildren(menuItem2, menuItemIcon2, menuItemTitle2);
  menuItem2.setAttribute('onclick', 'showSignupPage()');

  const menuItem3 = createHtmlElement('li');
  const menuItemIcon3 = createHtmlElement('i', 'fa-regular fa-flag');
  const menuItemTitle3 = createHtmlElement('span', 'item-title', null, 'Report');
  appendChildren(menuItem3, menuItemIcon3, menuItemTitle3);
  menuItem3.setAttribute('onclick', 'showSignupPage()');

  appendChildren(moreMenu, menuItem1, menuItem2, menuItem3);

  appendChildren(moreSec, moreIconSpan, moreMenu);

  appendChildren(postSocial, commentSec, shareSec, saveSec, moreSec);

  appendChildren(rightSide, postHead, postCaption, postMedia, postSocial);

  appendChildren(post, leftSide, rightSide);

  postsContainer.prepend(post);
};

window.onload = () => {
  fetch('/api/v1/post')
    .then((res) => res.json())
    .then((data) => {
      // eslint-disable-next-line no-undef
      data.data.posts.forEach((post) => createPostElement(post));
    })
    .catch((err) => console.log(err));
};

// Start Create Post Section

// Start Setting Menu Section
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
// End Setting Menu Section

// Start left Sidebar Menu Section
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
// End left Sidebar Menu Section

// Start right Sidebar Menu Section
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
// End right Sidebar Menu Section

// Start Get App Popup
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

// End Get App Popup

// Start Login Popup Section
const logInHeaderBtn = document.querySelector('.log-in-btn');
const logInMenuBtn = settingMenu.lastElementChild;
const logInSignUpBtn = document.querySelector('#login-signup-btn');
const closeLogInPopupBtn = document.querySelector('#login-popup-page .close-icon');
const loginSubmitBtn = document.getElementById('login-submit-btn');
const loginBtns = [logInHeaderBtn, logInMenuBtn, logInSignUpBtn];

loginBtns.forEach((button) => {
  button.addEventListener('click', () => {
    showLoginPage();
  });
});

closeLogInPopupBtn.addEventListener('click', () => {
  logInPopup.style.display = 'none';
  logInOverlay.style.display = 'none';
});

loginSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const loginUsernameInput = document.querySelector('#login-popup-page #username-input');
  const loginPasswordInput = document.querySelector('#login-popup-page #password-input');

  const usernameValidateMsg = document.querySelector('.validate-message.username-validate');
  const passwordValidateMsg = document.querySelector('.validate-message.password-validate');

  if (loginUsernameInput.value.length < 5) {
    loginUsernameInput.style.border = '1px solid #FF4500';
    usernameValidateMsg.style.display = 'block';
    usernameValidateMsg.textContent = 'Username must has at least 5 characters';
  }

  if (loginPasswordInput.value.length < 5) {
    loginPasswordInput.style.border = '1px solid #FF4500';
    passwordValidateMsg.style.display = 'block';
    passwordValidateMsg.textContent = 'Password must has at least 5 characters';
  }

  if (loginUsernameInput.value.length > 50) {
    loginUsernameInput.style.border = '1px solid #FF4500';
    usernameValidateMsg.style.display = 'block';
    usernameValidateMsg.textContent = 'Username must has at max 50 characters';
  }

  if (loginPasswordInput.value.length > 50) {
    loginPasswordInput.style.border = '1px solid #FF4500';
    passwordValidateMsg.style.display = 'block';
    passwordValidateMsg.textContent = 'Password must has at max 50 characters';
  }

  loginUsernameInput.addEventListener('input', () => {
    loginUsernameInput.style.borderColor = 'transparent';
    usernameValidateMsg.style.display = 'none';
  });

  loginPasswordInput.addEventListener('input', () => {
    loginPasswordInput.style.borderColor = 'transparent';
    passwordValidateMsg.style.display = 'none';
  });

  if (loginUsernameInput.value.length >= 5
    && loginUsernameInput.value.length < 50
    && loginPasswordInput.value.length >= 5
    && loginPasswordInput.value.length < 50) {
    fetch('/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: loginUsernameInput.value,
        password: loginPasswordInput.value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          loginUsernameInput.style.border = '1px solid #FF4500';
          usernameValidateMsg.style.display = 'block';
          usernameValidateMsg.textContent = result.data.message;

          loginPasswordInput.style.border = '1px solid #FF4500';
          passwordValidateMsg.style.display = 'block';
          passwordValidateMsg.textContent = result.data.message;
          console.log(result);
        } else {
          const {
            id, email, avatar, username, followers, signed_at,
          } = result.data.user;

          localStorage.setItem('logged-user', JSON.stringify({
            id, email, avatar, username, followers, signed_at
          }));
          window.location.href = '/';
        }
      })
      .catch(() => alert('Login Error'));
  }
});
// End Login Popup Section

// Start Sign Up Page
const navSignUpBtn = document.querySelector('nav .join-btn');
const signUpLogInBtn = document.querySelector('#signup-login-btn');
const signupSubmitBtn = document.getElementById('signup-submit-btn');
const closeSignUpPopupBtns = document.querySelectorAll('#signup-popup-page .close-icon');
const signUpBtns = [navSignUpBtn, signUpLogInBtn];

logInSignUpBtn.addEventListener('click', () => {
  showLoginPage();
});

signUpBtns.forEach((button) => {
  button.addEventListener('click', () => {
    showSignupPage();
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
    const signupEmailInput = document.querySelector('#signup-popup-page #email-input');
    const emailValidateMsg = document.querySelector('.validate-message.email-validate');
    const emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!signupEmailInput.value.match(emailValidRegex)) {
      emailValidateMsg.style.display = 'block';
      emailValidateMsg.textContent = 'This filed must be an email';
      signupEmailInput.style.border = '1px solid #FF4500';
    }

    if (signupEmailInput.value.length === 0) {
      emailValidateMsg.style.display = 'block';
      emailValidateMsg.textContent = 'Email must has a value';
      signupEmailInput.style.border = '1px solid #FF4500';
    }

    signupEmailInput.addEventListener('input', () => {
      signupEmailInput.style.borderColor = 'transparent';
      emailValidateMsg.style.display = 'none';
    });

    if (signupEmailInput.value.length > 0
      && signupEmailInput.value.match(emailValidRegex)) {
      const stepNumber = parseInt(formNavigationBtn.getAttribute('step_number'), 10);
      navigateToFormStep(stepNumber);
    }
  });
});

signupSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const signupEmailInput = document.querySelector('#signup-popup-page #email-input');
  const signupUsernameInput = document.querySelector('#signup-popup-page #username-input');
  const signupPasswordInput = document.querySelector('#signup-popup-page #password-input');

  const usernameValidateMsg = document.querySelector('.validate-message.signup-username-validate');
  const passwordValidateMsg = document.querySelector('.validate-message.signup-password-validate');

  if (signupUsernameInput.value.length < 5) {
    signupUsernameInput.style.border = '1px solid #FF4500';
    usernameValidateMsg.style.display = 'block';
    usernameValidateMsg.textContent = 'Username must has at least 5 characters';
  }

  if (signupPasswordInput.value.length < 5) {
    signupPasswordInput.style.border = '1px solid #FF4500';
    passwordValidateMsg.style.display = 'block';
    passwordValidateMsg.textContent = 'Password must has at least 5 characters';
  }

  if (signupUsernameInput.value.length > 50) {
    signupUsernameInput.style.border = '1px solid #FF4500';
    usernameValidateMsg.style.display = 'block';
    usernameValidateMsg.textContent = 'Username must has at max 50 characters';
  }

  if (signupPasswordInput.value.length > 50) {
    signupPasswordInput.style.border = '1px solid #FF4500';
    passwordValidateMsg.style.display = 'block';
    passwordValidateMsg.textContent = 'Password must has at max 50 characters';
  }

  signupUsernameInput.addEventListener('input', () => {
    signupUsernameInput.style.borderColor = 'transparent';
    usernameValidateMsg.style.display = 'none';
  });

  signupPasswordInput.addEventListener('input', () => {
    signupPasswordInput.style.borderColor = 'transparent';
    passwordValidateMsg.style.display = 'none';
  });

  if (signupUsernameInput.value.length >= 5
    && signupUsernameInput.value.length < 50
    && signupPasswordInput.value.length >= 5
    && signupPasswordInput.value.length < 50) {
    fetch('/api/v1/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: signupEmailInput.value,
        username: signupUsernameInput.value,
        password: signupPasswordInput.value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          signupUsernameInput.style.border = '1px solid #FF4500';
          usernameValidateMsg.style.display = 'block';
          usernameValidateMsg.textContent = result.data.message;

          signupPasswordInput.style.border = '1px solid #FF4500';
          passwordValidateMsg.style.display = 'block';
          passwordValidateMsg.textContent = result.data.message;
        } else {
          loggedUserData = result.data.user;
          const {
            id, email, avatar, username, followers, signed_at,
          } = result.data.user;
          localStorage.setItem('logged-user', JSON.stringify({
            id, email, avatar, username, followers, signed_at,
          }));
          window.location.href = '/';
        }
      })
      .catch(() => alert('signup Error'));
  }
});

// End Sign Up Popup

// Get All Posts Section
