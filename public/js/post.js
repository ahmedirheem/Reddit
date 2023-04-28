const postId = window.location.href.split('post/')[1].slice(0, 1);

window.onload = () => {
  fetch(`/posts/${postId}`)
    .then((res) => res.json())
    .then((data) => createPostElement(data.data.posts))
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
