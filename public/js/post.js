const postId = window.location.href.split('post/')[1].slice(0, 1);
const communitySection = document.querySelector('.community-section');
const commentsContainer = document.querySelector('.comments-container');

const createCommunityCard = (community) => {
  const card = createHtmlElement1('div', 'community-card');

  const cardHead = createHtmlElement1('div', 'card-head');
  const communityImg = createHtmlElement1('img', 'community-img');
  communityImg.src = community.com_avatar;
  const communityName = createHtmlElement1('h1', 'community-name', null, community.com_name);
  appendChildren1(cardHead, communityImg, communityName);

  const cardDesc = createHtmlElement1('div', 'card-desc');
  const descText = createHtmlElement1('span', 'desc-text', null, community.description);
  const members = createHtmlElement1('span', 'members', null, `${community.members} Members`);
  appendChildren1(cardDesc, descText, members);

  const cardJoin = createHtmlElement1('div', 'card-join');
  const joinBtn = createHtmlElement1('button', 'join-btn', null, 'Join');
  cardJoin.appendChild(joinBtn);

  appendChildren1(card, cardHead, cardDesc, cardJoin);

  communitySection.appendChild(card);
};

const createCommentElement = (comment) => {
  const commentElement = createHtmlElement1('div', 'comment', 'comment');

  const commentHead = createHtmlElement1('div', 'comment-head');
  const avatar = createHtmlElement1('img', 'avatar');
  const userName = createHtmlElement1('a', 'username', null, comment.commenter_name);
  userName.setAttribute('href', `/${comment.commenter_name}`);
  const commentedAt = createHtmlElement1('span', 'commented-at', null, comment.commented_at);
  appendChildren1(commentHead, avatar, userName, commentedAt);

  const commentCaption = createHtmlElement1('div', 'comment-caption');
  const captionText = createHtmlElement1('span', 'caption-text', null, comment.caption);
  commentCaption.appendChild(captionText);

  const commentSocial = createHtmlElement1('div', 'comment-social');

  const replySec = createHtmlElement1('div', 'reply-sec');
  const replyIcon = createHtmlElement1('i', 'fa-regular fa-message');
  replySec.appendChild(replyIcon);

  const votesSide = createHtmlElement1('div', 'votes-side');
  const upIcon = createHtmlElement1('i', 'fa-regular fa-circle-up', 'like-icon');
  const commentLikesNum = comment.likes - comment.dislikes;
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

  appendChildren1(comment, commentHead, commentCaption, commentSocial);

  commentsContainer.append(commentElement);
};

window.onload = () => {
  fetch(`/posts/${postId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // eslint-disable-next-line no-undef
      createPostElement(data.data.posts);
      createCommunityCard(data.data.posts);
    })
    .catch((err) => {
      console.log(err);
      // alert('Post Error')
    });
};

const closePostBtn = document.querySelector('.close-post');
const postOverlay = document.querySelector('.overlay');

closePostBtn.addEventListener('click', () => {
  window.location.href = '/';
});
postOverlay.addEventListener('click', () => {
  window.location.href = '/';
});
