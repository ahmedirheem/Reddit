const titleInput = document.querySelector('.title-input input');

const postTextInput = document.querySelector('#post-text-input');
const urlInput = document.querySelector('.url-input textarea');

const saveTextAsDraftBtn = document.querySelector('.post-type-input .save-draft-btn');
const postTextBtn = document.querySelector('.post-type-input .post-btn');

const cancelImagePost = document.querySelector('.images-type-input .cancel-btn');
const postImageBtn = document.querySelector('.images-type-input .post-btn');

const saveUrlAsDraftBtn = document.querySelector('.link-type-input .save-draft-btn');
const postUrlBtn = document.querySelector('.link-type-input .post-btn');

const postTypeBtn = document.getElementById('post-type-btn');
const imageTypeBtn = document.getElementById('image-type-btn');
const linkTypeBtn = document.getElementById('link-type-btn');

const postTypeSection = document.getElementById('post-type-section');
const imageTypeSection = document.getElementById('image-type-section');
const linkTypeSection = document.getElementById('link-type-section');

const signedUser = JSON.parse(localStorage.getItem('logged-user'));

postTypeBtn.addEventListener('click', (e) => {
  imageTypeBtn.classList.remove('active');
  linkTypeBtn.classList.remove('active');
  postTypeBtn.classList.add('active');

  postTypeSection.style.display = 'block';
  imageTypeSection.style.display = 'none';
  linkTypeSection.style.display = 'none';
});

imageTypeBtn.addEventListener('click', () => {
  postTypeBtn.classList.remove('active');
  linkTypeBtn.classList.remove('active');
  imageTypeBtn.classList.add('active');

  imageTypeSection.style.display = 'block';
  postTypeSection.style.display = 'none';
  linkTypeSection.style.display = 'none';
});

linkTypeBtn.addEventListener('click', () => {
  postTypeBtn.classList.remove('active');
  imageTypeBtn.classList.remove('active');
  linkTypeBtn.classList.add('active');

  linkTypeSection.style.display = 'block';
  postTypeSection.style.display = 'none';
  imageTypeSection.style.display = 'none';
});

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
