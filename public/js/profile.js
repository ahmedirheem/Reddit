const usernameId = window.location.href.split('/').pop();
let userProfile;

function getPosterId(userId) {
  fetch('/api/v1/post/user-posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ posterId: userId }),
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
    userProfile = user.data.user;
    getPosterId(userProfile.id);
  })
  .catch((err) => console.log(err));
