BEGIN;

DROP TABLE IF EXISTS posts, users, communities CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  avatar BYTEA,
  email VARCHAR(150) NOT NULL UNIQUE,
  password  NOT NULL,
  signed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  followers INTEGER NOT NULL
);

CREATE TABLE communities(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  avatar TEXT,
  members INTEGER NOT NULL,
  description TEXT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  caption TEXT,
  images BYTEA,
  video BYTEA,
  likes INTEGER NOT NULL DEFAULT 0,
  dislikes INTEGER NOT NULL DEFAULT 0,
  posted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  poster_id INTEGER,
  community_id INTEGER,
  FOREIGN KEY (poster_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (community_id) REFERENCES communities(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO communities(name, avatar, members, description) VALUES ('r/coding', 'https://play-lh.googleusercontent.com/zWYGIu_Jj_qBUII-XAiIgKHpglVffu891JXh_Wa8-FLi7Su1u6nqM9OXpKZxc7h3sWnJ', 1025, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos placeat doloribus soluta mollitia. Reiciendis repudiandae autem itaque earum, suscipit commodi.');
INSERT INTO communities(name, avatar, members, description) VALUES ('r/programming', 'https://play-lh.googleusercontent.com/zWYGIu_Jj_qBUII-XAiIgKHpglVffu891JXh_Wa8-FLi7Su1u6nqM9OXpKZxc7h3sWnJ', 1025, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos placeat doloribus soluta mollitia. Reiciendis repudiandae autem itaque earum, suscipit commodi.');
INSERT INTO communities(name, avatar, members, description) VALUES ('r/javascript', 'https://play-lh.googleusercontent.com/zWYGIu_Jj_qBUII-XAiIgKHpglVffu891JXh_Wa8-FLi7Su1u6nqM9OXpKZxc7h3sWnJ', 1025, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos placeat doloribus soluta mollitia. Reiciendis repudiandae autem itaque earum, suscipit commodi.');

COMMIT;