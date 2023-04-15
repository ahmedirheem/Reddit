const settingBtn = document.querySelector('.setting-btn');
const settingMenu = document.querySelector('.setting-menu');
const sidebarMenu = document.querySelector('.sidebar-menu');

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

const appearSettingMenu = (ele) => {
  ele.nextSibling.classList.toggle('active')
  ele.children[2].classList.toggle('rotated');
}

settingBtn.addEventListener('click', () => {
  settingMenu.classList.toggle('active')
})


settingMenuData.forEach((item) => {
  const menuItem = createHtmlElement('li', 'setting-item');
  menuItem.setAttribute('onclick', 'appearSettingMenu(this)');
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
  menuItem.setAttribute('onclick', 'appearSettingMenu(this)');
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


