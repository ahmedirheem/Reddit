const postId = window.location.href.split('post/')[1].slice(0, 1);

console.log(postId);

const closePostBtn = document.querySelector('.close-post');
const postOverlay = document.querySelector('.overlay');

closePostBtn.addEventListener('click', () => {
  window.location.href = '/';
});
postOverlay.addEventListener('click', () => {
  window.location.href = '/';
});
