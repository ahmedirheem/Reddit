// eslint-disable-next-line no-unused-vars
// const createPostElement = (data) => {
//   // console.log(data);
//   const post = createHtmlElement1('div', 'post', 'post');

//   const leftSide = createHtmlElement1('div', 'left-side');

//   const upIcon = createHtmlElement1('i', 'fa-regular fa-circle-up');
//   let likesNum = data.likes - data.dislikes;
//   const likesCount = createHtmlElement1('span', 'likes-count', null, `${likesNum}`);
//   const downIcon = createHtmlElement1('i', 'fa-regular fa-circle-down');

//   upIcon.addEventListener('click', () => {
//     fetch('/api/v1/post/like', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id: data.id }),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         if (result.error) {
//           logInPopup.style.display = 'flex';
//           logInOverlay.style.display = 'block';
//           document.body.style.overflow = 'hidden';
//         } else {
//           likesNum = result.data.post.likes - result.data.post.dislikes;
//           likesCount.textContent = likesNum;
//           upIcon.style.color = '#cc3700';
//           downIcon.style.color = '#878a8c';
//         }
//       })
//       .catch(() => console.log('Like Error'));
//   });

//   downIcon.addEventListener('click', () => {
//     fetch('/api/v1/post/like', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id: data.id }),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.error) {
//           logInPopup.style.display = 'flex';
//           logInOverlay.style.display = 'block';
//           document.body.style.overflow = 'hidden';
//         } else {
//           likesNum = result.data.post.likes - result.data.post.dislikes;
//           likesCount.textContent = likesNum;
//           downIcon.style.color = '#cc3700';
//           upIcon.style.color = '#878a8c';
//         }
//       })
//       .catch(() => console.log('Like Error'));
//   });

//   appendChildren1(leftSide, upIcon, likesCount, downIcon);

//   const rightSide = createHtmlElement1('div', 'right-side');

//   const postHead = createHtmlElement1('div', 'post-head');

//   const avatar = createHtmlElement1('img', 'avatar');
//   avatar.src = data.userAvatar;
//   const groupLink = createHtmlElement1('a', 'group-link', null, data.groupName);
//   const dotItem = createHtmlElement1('span', 'dot-item', null, '•');
//   const postedBy = createHtmlElement1('span', 'posted-by', null, 'Posted by');
//   const userName = createHtmlElement1('a', 'username', null, data.userName);
//   userName.setAttribute('href', '#');
//   postedBy.appendChild(userName);
//   const postedAt = createHtmlElement1('span', 'posted-at', null, data.time);
//   const joinBtn = createHtmlElement1('button', 'join-btn', 'post-join-btn', 'join');

//   appendChildren1(postHead, avatar, groupLink, dotItem, postedBy, postedAt, joinBtn);

//   const postCaption = createHtmlElement1('div', 'post-caption');

//   const captionText = createHtmlElement1('h3', 'caption-text', null, data.caption);
//   const category = createHtmlElement1('a', 'category', null, data.content?.category);
//   category.setAttribute('href', '#');
//   category.style.background = '#ff4500';

//   appendChildren1(postCaption, captionText, category);

//   const postMedia = createHtmlElement1('div', 'post-media');

//   if (data.images) {
//     const postImage = createHtmlElement1('img', 'post-image');
//     postImage.src = data.images;
//     postMedia.appendChild(postImage);
//   } else {
//     const postVideo = createHtmlElement1('img', 'post-video');
//     postVideo.src = data.video;
//     postMedia.appendChild(postVideo);
//   }

//   const postSocial = createHtmlElement1('div', 'post-social');

//   const commentSec = createHtmlElement1('div', 'comment-sec');
//   const commentIcon = createHtmlElement1('i', 'fa-regular fa-message');
//   const commentsCount = createHtmlElement1('span', 'title', null, `${15} Comments`);

//   appendChildren1(commentSec, commentIcon, commentsCount);

//   const shareSec = createHtmlElement1('div', 'share-sec');
//   const shareIcon = createHtmlElement1('i', 'ri-corner-up-right-fill');
//   const shareSpan = createHtmlElement1('span', 'title', null, 'Share');

//   appendChildren1(shareSec, shareIcon, shareSpan);

//   const saveSec = createHtmlElement1('div', 'save-sec');
//   const saveIcon = createHtmlElement1('i', 'fa-regular fa-bookmark');
//   const saveSpan = createHtmlElement1('span', 'title', null, 'Save');

//   appendChildren1(saveSec, saveIcon, saveSpan);

//   const moreSec = createHtmlElement1('div', 'more-sec');

//   moreSec.addEventListener('click', () => {
//     // eslint-disable-next-line no-undef
//     dropMenu(moreSec);
//   });

//   const moreIconSpan = createHtmlElement1('span', 'more-icon');
//   const moreIcon = createHtmlElement1('i', 'fa-solid fa-ellipsis');
//   moreIconSpan.appendChild(moreIcon);
//   const moreMenu = createHtmlElement1('ul', 'more-menu');

//   const menuItem1 = createHtmlElement1('li');
//   const menuItemIcon1 = createHtmlElement1('i', 'ri-volume-mute-line');
//   const menuItemTitle1 = createHtmlElement1('span', 'item-title', null, `Mute ${data.groupName}`);

//   appendChildren1(menuItem1, menuItemIcon1, menuItemTitle1);

//   const menuItem2 = createHtmlElement1('li');
//   const menuItemIcon2 = createHtmlElement1('i', 'fa-regular fa-eye-slash');
//   const menuItemTitle2 = createHtmlElement1('span', 'item-title', null, 'Hide');

//   appendChildren1(menuItem2, menuItemIcon2, menuItemTitle2);

//   const menuItem3 = createHtmlElement1('li');
//   const menuItemIcon3 = createHtmlElement1('i', 'fa-regular fa-flag');
//   const menuItemTitle3 = createHtmlElement1('span', 'item-title', null, 'Report');

//   appendChildren1(menuItem3, menuItemIcon3, menuItemTitle3);

//   appendChildren1(moreMenu, menuItem1, menuItem2, menuItem3);

//   appendChildren1(moreSec, moreIconSpan, moreMenu);

//   appendChildren1(postSocial, commentSec, shareSec, saveSec, moreSec);

//   appendChildren1(rightSide, postHead, postCaption, postMedia, postSocial);

//   appendChildren1(post, leftSide, rightSide);

//   postsContainer.prepend(post);
// };

// eslint-disable-next-line no-unused-vars
// const createSettingMenuItem = (item) => {
//   const menuItem = createHtmlElement1('li', 'setting-item');
//   menuItem.setAttribute('onclick', 'appearSettingMenu(this, 2)');
//   const itemTitle = createHtmlElement1('span', 'item-title', null, item.title);
//   const itemIcon = createHtmlElement1('i', item.icon);
//   const itemMoreIcon = createHtmlElement1('i', item.moreIcon);

//   if (item.menu) {
//     const subMenu = createHtmlElement1('ul', 'sub-setting-menu');

//     item.menu.forEach((subItem) => {
//       const subMenuItemLink = createHtmlElement1('a', 'submenu-item-link');
//       subMenuItemLink.setAttribute('href', '#');
//       const subMenuItemList = createHtmlElement1('li', 'submenu-item-list', null, subItem);
//       subMenuItemLink.appendChild(subMenuItemList);
//       subMenu.appendChild(subMenuItemLink);
//     });

//     appendChildren1(menuItem, itemIcon, itemTitle, itemMoreIcon);
//     appendChildren1(settingMenu, menuItem, subMenu);
//   } else {
//     appendChildren1(menuItem, itemIcon, itemTitle, itemMoreIcon);
//     settingMenu.appendChild(menuItem);
//   }
// };
