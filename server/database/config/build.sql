BEGIN;

DROP TABLE IF EXISTS posts, users, communities, comments CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  avatar TEXT DEFAULT 'https://external-preview.redd.it/5kh5OreeLd85QsqYO1Xz_4XSLYwZntfjqou-8fyBFoE.png?auto=webp&s=dbdabd04c399ce9c761ff899f5d38656d1de87c2',
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  signed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  followers INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE communities(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  avatar TEXT DEFAULT 'https://cdn.pixabay.com/photo/2012/04/23/16/49/registered-trademark-39027_960_720.png',
  members INTEGER NOT NULL,
  description TEXT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  caption TEXT,
  images TEXT,
  video TEXT,
  link TEXT,
  likes INTEGER NOT NULL DEFAULT 0,
  dislikes INTEGER NOT NULL DEFAULT 0,
  posted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  poster_id INTEGER,
  community_id INTEGER,
  FOREIGN KEY (poster_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (community_id) REFERENCES communities(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  caption TEXT,
  likes INTEGER NOT NULL DEFAULT 0,
  dislikes INTEGER NOT NULL DEFAULT 0,
  posted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  poster_id INTEGER,
  post_id INTEGER,
  FOREIGN KEY (poster_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT;