const postsContainer = document.querySelector('.posts-container');

const loggedUser = JSON.parse(localStorage.getItem('logged-user'));

const createHtmlElement1 = (element, className, id, textContent) => {
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

const appendChildren1 = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

const dropMenu = (element) => {
  element.classList.toggle('dropped');
};
// eslint-disable-next-line no-unused-vars
const createPostElement = (data) => {
  console.log(data);
  const post = createHtmlElement1('div', 'post', 'post');

  const leftSide = createHtmlElement1('div', 'left-side');

  const upIcon = createHtmlElement1('i', 'fa-regular fa-circle-up', 'like-icon');
  let likesNum = data.likes - data.dislikes;
  const likesCount = createHtmlElement1('span', 'likes-count', null, `${likesNum}`);
  const downIcon = createHtmlElement1('i', 'fa-regular fa-circle-down', 'dislike-icon');

  upIcon.addEventListener('click', () => {
    upIcon.classList.toggle('active');
    downIcon.classList.remove('active');
    upIcon.style.pointerEvents = 'none';
    downIcon.style.pointerEvents = 'all';

    fetch('/api/v1/post/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: data.id }),
    })
      .then((res) => res.json())
      .then((result) => {
        likesNum = result.data.post.likes - result.data.post.dislikes;
        likesCount.textContent = likesNum;
      })
      .catch(() => console.log('Like Error'));
  });

  downIcon.addEventListener('click', () => {
    downIcon.classList.toggle('active');
    upIcon.classList.remove('active');
    downIcon.style.pointerEvents = 'none';
    upIcon.style.pointerEvents = 'all';

    fetch('/api/v1/post/dislike', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: data.id }),
    })
      .then((res) => res.json())
      .then((result) => {
        likesNum = result.data.post.likes - result.data.post.dislikes;
        likesCount.textContent = likesNum;
      })
      .catch(() => {
        console.log('Dislike Error');
      });
  });

  appendChildren1(leftSide, upIcon, likesCount, downIcon);

  const rightSide = createHtmlElement1('div', 'right-side');

  const postHead = createHtmlElement1('div', 'post-head');

  const avatar = createHtmlElement1('img', 'avatar');

  const postedBy = createHtmlElement1('span', 'posted-by', null, 'Posted by');
  const userName = createHtmlElement1('a', 'username', null, data.username);
  userName.setAttribute('href', `/${data.username}`);

  postedBy.appendChild(userName);
  const postedAt = createHtmlElement1('span', 'posted-at', null, data.posted_at);

  if (data.com_id === 1) {
    avatar.src = data.user_avatar;
    appendChildren1(postHead, avatar, postedBy, postedAt);
  } else {
    avatar.src = data.com_avatar;
    const groupLink = createHtmlElement1('a', 'group-link', null, data.com_name);
    const dotItem = createHtmlElement1('span', 'dot-item', null, '•');
    appendChildren1(postHead, avatar, groupLink, dotItem, postedBy, postedAt);
  }

  const postCaption = createHtmlElement1('div', 'post-caption');
  const titleText = createHtmlElement1('h3', 'title-text', null, data.title);
  titleText.style.display = 'block';
  const captionText = createHtmlElement1('span', 'caption-text', null, data.caption);
  const category = createHtmlElement1('a', 'category', null, data.content?.category);
  category.setAttribute('href', '#');
  category.style.background = '#ff4500';

  appendChildren1(postCaption, titleText, captionText, category);

  postCaption.addEventListener('click', () => {
    window.location.href = `/post/${data.id}${data.title}`;
  });

  const postMedia = createHtmlElement1('div', 'post-media');

  if (data.images) {
    const postImage = createHtmlElement1('img', 'post-image');
    postImage.src = data.images;
    postMedia.appendChild(postImage);
  }
  // else {
  //   const postVideo = createHtmlElement1('img', 'post-video');
  //   postVideo.src = data.video;
  //   postMedia.appendChild(postVideo);
  // }

  const postSocial = createHtmlElement1('div', 'post-social');

  const commentSec = createHtmlElement1('div', 'comment-sec');
  const commentIcon = createHtmlElement1('i', 'fa-regular fa-message');
  const commentsCount = createHtmlElement1('span', 'title', null, `${15} Comments`);

  appendChildren1(commentSec, commentIcon, commentsCount);

  const shareSec = createHtmlElement1('div', 'share-sec');
  const shareIcon = createHtmlElement1('i', 'ri-corner-up-right-fill');
  const shareSpan = createHtmlElement1('span', 'title', null, 'Share');

  appendChildren1(shareSec, shareIcon, shareSpan);

  const saveSec = createHtmlElement1('div', 'save-sec');
  const saveIcon = createHtmlElement1('i', 'fa-regular fa-bookmark');
  const saveSpan = createHtmlElement1('span', 'title', null, 'Save');

  appendChildren1(saveSec, saveIcon, saveSpan);

  const moreSec = createHtmlElement1('div', 'more-sec');

  moreSec.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    dropMenu(moreSec);
  });

  const moreIconSpan = createHtmlElement1('span', 'more-icon');
  const moreIcon = createHtmlElement1('i', 'fa-solid fa-ellipsis');
  moreIconSpan.appendChild(moreIcon);
  const moreMenu = createHtmlElement1('ul', 'more-menu');

  const menuItem1 = createHtmlElement1('li');
  const menuItemIcon1 = createHtmlElement1('i', 'ri-volume-mute-line');
  const menuItemTitle1 = createHtmlElement1('span', 'item-title', null, `Mute ${data.groupName}`);

  appendChildren1(menuItem1, menuItemIcon1, menuItemTitle1);

  const menuItem2 = createHtmlElement1('li');
  const menuItemIcon2 = createHtmlElement1('i', 'fa-regular fa-eye-slash');
  const menuItemTitle2 = createHtmlElement1('span', 'item-title', null, 'Hide');

  appendChildren1(menuItem2, menuItemIcon2, menuItemTitle2);

  const menuItem3 = createHtmlElement1('li');
  const menuItemIcon3 = createHtmlElement1('i', 'fa-regular fa-flag');
  const menuItemTitle3 = createHtmlElement1('span', 'item-title', null, 'Report');

  appendChildren1(menuItem3, menuItemIcon3, menuItemTitle3);

  if (loggedUser.id === data.poster_id) {
    const deletePost = createHtmlElement1('li');
    const deletePostIcon = createHtmlElement1('i', 'ri-delete-bin-7-line');
    const deletePostTitle = createHtmlElement1('span', 'item-title', null, 'Delete');
    appendChildren1(deletePost, deletePostIcon, deletePostTitle);

    deletePost.addEventListener('click', () => {
      fetch('/api/v1/post/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: data.id }),
      })
        // .then((res) => res.json())
        .then(() => {
          window.location.href = window.location.href.split('/').pop();
        })
        .catch((err) => console.log(err));
    });

    const updatePost = createHtmlElement1('li');
    const updatePostIcon = createHtmlElement1('i', 'ri-pencil-line');
    const updatePostTitle = createHtmlElement1('span', 'item-title', null, 'Edit Post');
    appendChildren1(updatePost, updatePostIcon, updatePostTitle);

    // updatePost.addEventListener('click', () => {
    //   fetch('/api/v1/post/update', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ id, title, caption, images, video, posterId, communityId,}),
    //   })
    //     .then((res) => res.json())
    //     .then((result) => console.log(result))
    //     .catch((err) => console.log(err));
    // });

    appendChildren1(moreMenu, menuItem1, menuItem2, menuItem3, deletePost, updatePost);
  } else {
    appendChildren1(moreMenu, menuItem1, menuItem2, menuItem3);
  }

  appendChildren1(moreSec, moreIconSpan, moreMenu);

  appendChildren1(postSocial, commentSec, shareSec, saveSec, moreSec);

  appendChildren1(rightSide, postHead, postCaption, postMedia, postSocial);

  appendChildren1(post, leftSide, rightSide);

  postsContainer.prepend(post);
};
