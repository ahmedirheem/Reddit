BEGIN;

DROP TABLE IF EXISTS posts, users, communities CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  avatar TEXT,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  signed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  followers INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE communities(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  avatar TEXT,
  members INTEGER NOT NULL,
  description TEXT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  caption TEXT,
  images TEXT,
  video TEXT,
  likes INTEGER NOT NULL DEFAULT 0,
  dislikes INTEGER NOT NULL DEFAULT 0,
  posted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  poster_id INTEGER,
  community_id INTEGER,
  FOREIGN KEY (poster_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (community_id) REFERENCES communities(id) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT;