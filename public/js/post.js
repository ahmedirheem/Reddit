const postId = window.location.href.split('post/')[1].slice(0, 1);
const postContainer = document.querySelector('.alone-post-container');
const communitySection = document.querySelector('.community-section');
const commentsContainer = document.querySelector('.comments-container');
const commentAsUsername = document.querySelector('.comment-as-username');
const commentInput = document.getElementById('comment-side-input');
const commentBtn = document.querySelector('.comment-btn');

// eslint-disable-next-line no-undef
commentAsUsername.textContent = loggedUser.username;

const closePostBtn = document.querySelector('.close-post');
const postOverlay = document.querySelector('.overlay');

closePostBtn.addEventListener('click', () => {
  window.location.href = '/';
});
postOverlay.addEventListener('click', () => {
  window.location.href = '/';
});

const createCommunityCard = (community) => {
  console.log(community);
  const card = createHtmlElement1('div', 'community-card');

  const cardHead = createHtmlElement1('div', 'card-head');
  const communityImg = createHtmlElement1('img', 'community-img');
  const communityName = createHtmlElement1('h1', 'community-name', null, community.username);
  if (community.com_id === 1) {
    communityImg.src = community.user_avatar;
    communityName.textContent = community.username;
  } else {
    communityImg.src = community.com_avatar;
    communityName.textContent = community.com_name;
  }
  appendChildren1(cardHead, communityImg, communityName);

  const cardJoin = createHtmlElement1('div', 'card-join');
  const joinBtn = createHtmlElement1('button', 'join-btn');
  cardJoin.appendChild(joinBtn);

  if (community.com_id !== 1) {
    const cardDesc = createHtmlElement1('div', 'card-desc');
    const descText = createHtmlElement1('span', 'desc-text', null, community.description);
    const members = createHtmlElement1('span', 'members', null, `${community.members} Members`);
    appendChildren1(cardDesc, descText, members);
    joinBtn.textContent = 'Join';
    appendChildren1(card, cardHead, cardDesc, cardJoin);
  } else {
    joinBtn.textContent = 'Follow';
    appendChildren1(card, cardHead, cardJoin);
  }
  communitySection.appendChild(card);
};

const createCommentElement = (comment) => {
  const commentElement = createHtmlElement1('div', 'comment', 'comment');

  const commentHead = createHtmlElement1('div', 'comment-head');
  const avatar = createHtmlElement1('img', 'avatar');
  avatar.src = comment.avatar || loggedUser.avatar;
  const userName = createHtmlElement1('a', 'username', null, comment.username || loggedUser.username);
  userName.setAttribute('href', `/${comment.username}`);
  const commentedAt = createHtmlElement1('span', 'commented-at', null, comment.commented_at);
  appendChildren1(commentHead, avatar, userName, commentedAt);

  const commentCaption = createHtmlElement1('div', 'comment-caption');
  const captionText = createHtmlElement1('span', 'caption-text', null, comment.comment_caption);
  commentCaption.appendChild(captionText);

  const commentSocial = createHtmlElement1('div', 'comment-social');

  const replySec = createHtmlElement1('div', 'reply-sec');
  const replyIcon = createHtmlElement1('i', 'fa-regular fa-message');
  replySec.appendChild(replyIcon);

  const votesSide = createHtmlElement1('div', 'votes-side');
  const upIcon = createHtmlElement1('i', 'fa-regular fa-circle-up', 'like-icon');
  const commentLikesNum = comment.comment_likes - comment.comment_dislikes;
  const likesCount = createHtmlElement1('span', 'likes-count', null, `${commentLikesNum}`);
  const downIcon = createHtmlElement1('i', 'fa-regular fa-circle-down', 'dislike-icon');

  // upIcon.addEventListener('click', () => {
  //   upIcon.classList.toggle('active');
  //   downIcon.classList.remove('active');
  //   upIcon.style.pointerEvents = 'none';
  //   downIcon.style.pointerEvents = 'all';

  //   fetch('/api/v1/post/like', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ id: data.id }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       likesNum = result.data.post.likes - result.data.post.dislikes;
  //       likesCount.textContent = likesNum;
  //     })
  //     .catch(() => console.log('Like Error'));
  // });

  // downIcon.addEventListener('click', () => {
  //   downIcon.classList.toggle('active');
  //   upIcon.classList.remove('active');
  //   downIcon.style.pointerEvents = 'none';
  //   upIcon.style.pointerEvents = 'all';

  //   fetch('/api/v1/post/dislike', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ id: data.id }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       likesNum = result.data.post.likes - result.data.post.dislikes;
  //       likesCount.textContent = likesNum;
  //     })
  //     .catch(() => {
  //       console.log('Dislike Error');
  //     });
  // });

  appendChildren1(votesSide, upIcon, likesCount, downIcon);

  appendChildren1(commentSocial, votesSide, replySec);

  appendChildren1(commentElement, commentHead, commentCaption, commentSocial);

  commentsContainer.prepend(commentElement);
};

fetch(`/posts/${postId}`)
  .then((res) => res.json())
  .then((data) => {
    // eslint-disable-next-line no-undef
    const post = createPostElement(data.data.posts);
    postContainer.appendChild(post);
    createCommunityCard(data.data.posts);
    document.title = data.data.posts.title;
  })
  .catch((err) => {
    console.log(err);
    alert('Post Error');
  });

fetch(`/api/v1/comment/${postId}`)
  .then((res) => res.json())
  .then((data) => {
    // eslint-disable-next-line no-undef
    data.data.comments.forEach((comment) => {
      createCommentElement(comment);
    });
  })
  .catch((err) => {
    console.log(err);
    alert('comment Error');
  });

commentBtn.addEventListener('click', () => {
  if (commentInput.value === '') {
    return;
  }
  fetch(`/api/v1/comment/add/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      commentCaption: commentInput.value,
      // eslint-disable-next-line no-undef
      commenterId: loggedUser.id,
      postId: +postId,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      commentInput.value = '';
      createCommentElement(data.data.comment);
    })
    .cath((err) => console.log(err));
});
