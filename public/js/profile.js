const usernameId = window.location.href.split('/').pop();

const settingBtn = document.querySelector('.setting-btn');
const settingMenu = document.querySelector('.setting-menu');

const userAvatarPlace = document.querySelector('.card-container .round');
const userNamePlace = document.querySelector('.card-container h3');
const signedUser = JSON.parse(localStorage.getItem('logged-user'));

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
  ele.nextSibling?.classList.toggle('active');
  ele.children[i].classList.toggle('rotated');
};

settingBtn.addEventListener('click', () => {
  settingMenu.classList.toggle('active');
});

document.querySelector('section.body').addEventListener('click', () => {
  settingMenu.classList.remove('active');
});

// eslint-disable-next-line no-undef
settingLoggedMenuData.forEach((item) => {
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

const profileMenuBtn = settingMenu.firstElementChild;

profileMenuBtn.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  window.location.href = `/${loggedUser?.username}`;
});

const logOutMenuBtn = settingMenu.lastElementChild;

logOutMenuBtn.addEventListener('click', () => {
  fetch('/api/v1/user/logout')
    .then(() => {
      localStorage.clear();
      window.location.href = '/';
    })
    .catch(() => console.log('Logged Out Error!'));
});

let userProfile;

const usernameForLogged = document.querySelector('.setting-btn .username');
usernameForLogged.textContent = signedUser?.username;
const avatarImg = document.querySelector('.setting-btn .avatar img');
avatarImg.setAttribute('src', signedUser?.avatar || 'https://external-preview.redd.it/5kh5OreeLd85QsqYO1Xz_4XSLYwZntfjqou-8fyBFoE.png?auto=webp&s=dbdabd04c399ce9c761ff899f5d38656d1de87c2');

function getPosterId(userId) {
  fetch('/api/v1/post/user-posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ posterId: +userId }),
  })
    .then((res) => res.json())
    .then((data) => {
      // eslint-disable-next-line no-undef
      data.data.posts.forEach((post) => createPostElement(post));
    })
    .catch((err) => console.log(err));
}
fetch(`/profile/${usernameId}`)
  .then((res) => res.json())
  .then((user) => {
    userProfile = user?.data?.user;
    getPosterId(userProfile?.id);
    userAvatarPlace.setAttribute('src', userProfile?.avatar || 'https://external-preview.redd.it/5kh5OreeLd85QsqYO1Xz_4XSLYwZntfjqou-8fyBFoE.png?auto=webp&s=dbdabd04c399ce9c761ff899f5d38656d1de87c2');
    userNamePlace.textContent = userProfile?.username;
    document.title = userProfile?.username;
  })
  .catch((err) => console.log(err));
