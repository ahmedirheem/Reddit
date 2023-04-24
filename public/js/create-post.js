const titleInput = document.querySelector('.title-input input');

const postTextInput = document.querySelector('#post-text-input');
const urlInput = document.querySelector('.url-input');

const saveTextAsDraftBtn = document.querySelector('.post-type-input .save-draft-btn');
const postTextBtn = document.querySelector('.post-type-input .post-btn');

const cancelImagePost = document.querySelector('.images-type-input .cancel-btn');
const postImageBtn = document.querySelector('.images-type-input .post-btn');

const saveUrlAsDraftBtn = document.querySelector('.link-type-input .save-draft-btn');
const postUrlBtn = document.querySelector('.link-type-input .post-btn');

const signedUser = JSON.parse(localStorage.getItem('logged-user'));

postTextBtn.addEventListener('click', () => {
  console.log(titleInput.value);
  fetch('/api/v1/post/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: titleInput.value,
      caption: postTextInput.value,
      posterId: +signedUser.id,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => console.log('Create Post Error'));
  console.log('done');
});
