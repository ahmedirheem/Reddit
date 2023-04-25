const usernameId = window.location.href.split('/').pop();

const userAvatarPlace = document.querySelector('.card-container .round');
const userNamePlace = document.querySelector('.card-container h3');

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
      console.log(data);
      // eslint-disable-next-line no-undef
      data.data.posts.forEach((post) => createPostElement(post));
    })
    .catch((err) => console.log(err));
}

fetch(`/profile/${usernameId}`)
  .then((res) => res.json())
  .then((user) => {
    userProfile = user.data.user;
    userAvatarPlace.setAttribute('src', user.data.user.avatar || 'https://external-preview.redd.it/5kh5OreeLd85QsqYO1Xz_4XSLYwZntfjqou-8fyBFoE.png?auto=webp&s=dbdabd04c399ce9c761ff899f5d38656d1de87c2');
    userNamePlace.textContent = user.data.user.username;
    document.title = user.data.user.username;
    getPosterId(userProfile.id);
  })
  .catch((err) => console.log(err));
