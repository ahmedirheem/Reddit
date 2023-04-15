const settingBtn = document.querySelector('.setting-btn');
const settingMenu = document.querySelector('.setting-menu');
const sidebarMenu = document.querySelector('.sidebar-menu');
const rightSideMenu = document.querySelector('.right-side-menus');
const risingMenu = document.querySelector('.rising-menu');

const createHtmlElement = (element, className, id, textContent) => {
  const ele = document.createElement(element);

  if (className) {
    ele.className = className
  }
  if (id) {
    ele.id = id
  }
  if (textContent) {
    ele.textContent = textContent
  }

  return ele;
}

const appendChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child)
  })
}

const appearSettingMenu = (ele, i) => {
  ele.nextSibling.classList.toggle('active')
  ele.children[i].classList.toggle('rotated');
}

const appearRightMenus = (ele, index) => {
  for (let i = 0; i < ele.parentElement.children.length; i++) {
    if(ele.parentElement.children[i] !== ele.nextSibling){
      ele.parentElement.children[i].classList.remove('active')
    }
  }
  ele.nextSibling.classList.toggle('active')
  ele.children[index].classList.toggle('rotated');
}

settingBtn.addEventListener('click', () => {
  settingMenu.classList.toggle('active')
})

risingMenu.addEventListener('click', () => {
  risingMenu.classList.toggle('dropped')
})

// document.addEventListener('click', (e) => {
//   if(e.target.className !== settingMenu.className || e.target.className !== settingBtn.className || e.target.className !== settingBtn.querySelector('i').className){
//     console.log('WORK');
//     settingMenu.classList.remove('active')
//   }
// })

settingMenuData.forEach((item) => {
  const menuItem = createHtmlElement('li', 'setting-item');
  menuItem.setAttribute('onclick', 'appearSettingMenu(this, 2)');
  const itemTitle = createHtmlElement('span', 'item-title', null, item.title)
  const itemIcon = createHtmlElement('i', item.icon)
  const itemMoreIcon = createHtmlElement('i', item.moreIcon)

  if (item.menu) {
    const subMenu = createHtmlElement('ul', 'sub-setting-menu');

    item.menu.forEach((subItem) => {
      const subMenuItemLink = createHtmlElement('a', 'submenu-item-link');
      subMenuItemLink.setAttribute('href', '#');
      const subMenuItemList = createHtmlElement('li', 'submenu-item-list', null, subItem);
      subMenuItemLink.appendChild(subMenuItemList);
      subMenu.appendChild(subMenuItemLink);
    })

    appendChildren(menuItem, itemIcon, itemTitle, itemMoreIcon);
    appendChildren(settingMenu, menuItem, subMenu);
  } else {
    appendChildren(menuItem, itemIcon, itemTitle, itemMoreIcon)
    settingMenu.appendChild(menuItem)

  }
})

leftSidebarMenuData.forEach((item) => {
  const menuItem = createHtmlElement('li', 'setting-item');
  menuItem.setAttribute('onclick', 'appearSettingMenu(this, 2)');
  const itemTitle = createHtmlElement('span', 'item-title', null, item.title)
  const itemIcon = createHtmlElement('i', item.icon)
  const itemMoreIcon = createHtmlElement('i', 'fa-solid fa-angle-down')

  const subMenu = createHtmlElement('ul', 'sub-setting-menu');

  item.menu.forEach((subItem) => {
    const subMenuItemLink = createHtmlElement('a', 'submenu-item-link');
    subMenuItemLink.setAttribute('href', '#');
    const subMenuItemList = createHtmlElement('li', 'submenu-item-list', null, subItem);
    subMenuItemLink.appendChild(subMenuItemList);
    subMenu.appendChild(subMenuItemLink);
  })

  appendChildren(menuItem, itemIcon, itemTitle, itemMoreIcon);
  appendChildren(sidebarMenu, menuItem, subMenu);
})

rightSideMenuData.forEach((item) => {
  const menuItem = createHtmlElement('li', 'setting-item');
  menuItem.setAttribute('onclick', 'appearRightMenus(this, 1)');
  const itemTitle = createHtmlElement('span', 'item-title', null, item.title)
  const itemMoreIcon = createHtmlElement('i', 'fa-solid fa-angle-down')

  const subMenu = createHtmlElement('ul', 'sub-setting-menu');

  item.menu.forEach((subItem) => {
    const subMenuItemLink = createHtmlElement('a', 'submenu-item-link', null, subItem);
    subMenuItemLink.setAttribute('href', '#');
    subMenu.appendChild(subMenuItemLink);
  })
  const seeMoreBtn = createHtmlElement('button', 'see-more-btn', null, 'See more')
  subMenu.appendChild(seeMoreBtn)

  appendChildren(menuItem, itemTitle, itemMoreIcon);
  appendChildren(rightSideMenu, menuItem, subMenu);
})


